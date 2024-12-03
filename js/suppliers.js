class SupplierManager {
    constructor() {
        this.suppliers = suppliersData;
        this.setupEventListeners();
        this.renderSuppliers();
    }

    setupEventListeners() {
        // Global search
        document.getElementById('globalSearch').addEventListener('input', (e) => {
            this.filterSuppliers();
        });

        // Filters
        document.getElementById('materialFilter').addEventListener('change', () => this.filterSuppliers());
        document.getElementById('availabilityFilter').addEventListener('change', () => this.filterSuppliers());
        document.getElementById('qualityFilter').addEventListener('change', () => this.filterSuppliers());

        // Modal close
        document.querySelector('.close').addEventListener('click', () => {
            document.getElementById('supplierModal').style.display = 'none';
        });

        // Close modal when clicking outside
        window.addEventListener('click', (e) => {
            const modal = document.getElementById('supplierModal');
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    }

    filterSuppliers() {
        const searchQuery = document.getElementById('globalSearch').value.toLowerCase();
        const materialFilter = document.getElementById('materialFilter').value.toLowerCase();
        const availabilityFilter = document.getElementById('availabilityFilter').value.toLowerCase();
        const qualityFilter = document.getElementById('qualityFilter').value.toLowerCase();

        const filteredSuppliers = this.suppliers.filter(supplier => {
            // Check if supplier or their materials match the search query
            const matchesSearch = searchQuery === '' || 
                supplier.name.toLowerCase().includes(searchQuery) ||
                supplier.materials.some(m => m.name.toLowerCase().includes(searchQuery));

            // Check if supplier has materials matching the filters
            const matchesMaterial = materialFilter === '' ||
                supplier.materials.some(m => m.name.toLowerCase().includes(materialFilter));

            const matchesAvailability = availabilityFilter === '' ||
                supplier.materials.some(m => m.availability === availabilityFilter);

            const matchesQuality = qualityFilter === '' ||
                supplier.materials.some(m => m.quality === qualityFilter);

            return matchesSearch && matchesMaterial && matchesAvailability && matchesQuality;
        });

        this.renderSuppliers(filteredSuppliers);
    }

    renderSuppliers(suppliersToRender = this.suppliers) {
        const suppliersList = document.getElementById('suppliersList');
        suppliersList.innerHTML = '';

        suppliersToRender.forEach(supplier => {
            const supplierCard = document.createElement('div');
            supplierCard.className = 'supplier-card';
            supplierCard.innerHTML = `
                <div class="supplier-header">
                    <h3>${supplier.name}</h3>
                </div>
                <div class="supplier-contact">
                    <p><i class="fas fa-phone"></i> ${supplier.contact.phone}</p>
                    <p><i class="fas fa-envelope"></i> ${supplier.contact.email}</p>
                </div>
                <div class="supplier-materials">
                    <h4>Available Materials: ${supplier.materials.length}</h4>
                    <ul>
                        ${supplier.materials.slice(0, 2).map(material => `
                            <li>${material.name} - ${material.availability}</li>
                        `).join('')}
                    </ul>
                    ${supplier.materials.length > 2 ? '<p class="more-materials">+ more...</p>' : ''}
                </div>
                <button class="btn-primary view-details" onclick="supplierManager.showSupplierDetails(${supplier.id})">
                    View Details
                </button>
            `;
            suppliersList.appendChild(supplierCard);
        });
    }

    showSupplierDetails(supplierId) {
        const supplier = this.suppliers.find(s => s.id === supplierId);
        if (!supplier) return;

        const modal = document.getElementById('supplierModal');
        const detailsContainer = document.getElementById('supplierDetails');

        detailsContainer.innerHTML = `
            <div class="supplier-detail-header">
                <h2>${supplier.name}</h2>
            </div>
            <div class="supplier-contact-details">
                <h3>Contact Information</h3>
                <p><i class="fas fa-phone"></i> ${supplier.contact.phone}</p>
                <p><i class="fas fa-envelope"></i> ${supplier.contact.email}</p>
                <p><i class="fas fa-map-marker-alt"></i> ${supplier.contact.address}</p>
            </div>
            <div class="supplier-materials-list">
                <h3>Available Materials</h3>
                <div class="materials-search">
                    <input type="text" id="materialSearch-${supplier.id}" 
                           placeholder="Search materials..." 
                           onkeyup="supplierManager.filterMaterials(${supplier.id})">
                </div>
                <table id="materialsTable-${supplier.id}" class="materials-table">
                    <thead>
                        <tr>
                            <th>Material</th>
                            <th>Price</th>
                            <th>Unit</th>
                            <th>Min. Order</th>
                            <th>Availability</th>
                            <th>Quality</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${supplier.materials.map(material => `
                            <tr>
                                <td>${material.name}</td>
                                <td>$${material.price}</td>
                                <td>${material.unit}</td>
                                <td>${material.minOrder}</td>
                                <td><span class="status-badge status-${material.availability}">${material.availability}</span></td>
                                <td><span class="quality-badge quality-${material.quality}">${material.quality}</span></td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        `;

        modal.style.display = 'block';
    }

    filterMaterials(supplierId) {
        const supplier = this.suppliers.find(s => s.id === supplierId);
        if (!supplier) return;

        const searchInput = document.getElementById(`materialSearch-${supplierId}`);
        const searchQuery = searchInput.value.toLowerCase();
        const tbody = document.querySelector(`#materialsTable-${supplierId} tbody`);

        tbody.innerHTML = supplier.materials
            .filter(material => material.name.toLowerCase().includes(searchQuery))
            .map(material => `
                <tr>
                    <td>${material.name}</td>
                    <td>$${material.price}</td>
                    <td>${material.unit}</td>
                    <td>${material.minOrder}</td>
                    <td><span class="status-badge status-${material.availability}">${material.availability}</span></td>
                    <td><span class="quality-badge quality-${material.quality}">${material.quality}</span></td>
                </tr>
            `).join('');
    }
}

// Initialize Supplier Manager
const supplierManager = new SupplierManager();
