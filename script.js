// Resource Management Class
class ResourceManager {
    constructor() {
        this.resources = JSON.parse(localStorage.getItem('resources')) || [];
        this.setupEventListeners();
        this.renderResources();
    }

    setupEventListeners() {
        // Form submission
        document.getElementById('resourceForm').addEventListener('submit', (e) => {
            e.preventDefault();
            this.addResource();
        });

        // Search functionality
        document.getElementById('searchResource').addEventListener('input', (e) => {
            this.searchResources(e.target.value);
        });

        // Edit form submission
        document.getElementById('editForm').addEventListener('submit', (e) => {
            e.preventDefault();
            this.updateResource();
        });

        // Modal close button
        document.querySelector('.close').addEventListener('click', () => {
            document.getElementById('editModal').style.display = 'none';
        });

        // Close modal when clicking outside
        window.addEventListener('click', (e) => {
            const modal = document.getElementById('editModal');
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    }

    addResource() {
        const resource = {
            id: Date.now(),
            name: document.getElementById('resourceName').value,
            quantity: parseInt(document.getElementById('quantity').value),
            unit: document.getElementById('unit').value,
            status: document.getElementById('status').value
        };

        this.resources.push(resource);
        this.saveResources();
        this.renderResources();
        document.getElementById('resourceForm').reset();

        // Show success message
        this.showNotification('Resource added successfully!', 'success');
    }

    deleteResource(id) {
        if (confirm('Are you sure you want to delete this resource?')) {
            this.resources = this.resources.filter(resource => resource.id !== id);
            this.saveResources();
            this.renderResources();
            this.showNotification('Resource deleted successfully!', 'success');
        }
    }

    editResource(id) {
        const resource = this.resources.find(r => r.id === id);
        if (resource) {
            // Populate edit form
            document.getElementById('editResourceName').value = resource.name;
            document.getElementById('editQuantity').value = resource.quantity;
            document.getElementById('editUnit').value = resource.unit;
            document.getElementById('editStatus').value = resource.status;
            
            // Store current resource ID for update
            document.getElementById('editForm').dataset.resourceId = id;
            
            // Show modal
            document.getElementById('editModal').style.display = 'block';
        }
    }

    updateResource() {
        const id = parseInt(document.getElementById('editForm').dataset.resourceId);
        const resourceIndex = this.resources.findIndex(r => r.id === id);

        if (resourceIndex !== -1) {
            this.resources[resourceIndex] = {
                id: id,
                name: document.getElementById('editResourceName').value,
                quantity: parseInt(document.getElementById('editQuantity').value),
                unit: document.getElementById('editUnit').value,
                status: document.getElementById('editStatus').value
            };

            this.saveResources();
            this.renderResources();
            document.getElementById('editModal').style.display = 'none';
            this.showNotification('Resource updated successfully!', 'success');
        }
    }

    searchResources(query) {
        const filteredResources = this.resources.filter(resource => 
            resource.name.toLowerCase().includes(query.toLowerCase()) ||
            resource.status.toLowerCase().includes(query.toLowerCase())
        );
        this.renderResources(filteredResources);
    }

    renderResources(resourcesToRender = this.resources) {
        const tbody = document.getElementById('resourcesTableBody');
        tbody.innerHTML = '';

        resourcesToRender.forEach(resource => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${resource.name}</td>
                <td>${resource.quantity}</td>
                <td>${resource.unit}</td>
                <td><span class="status-badge status-${resource.status}">${resource.status}</span></td>
                <td class="action-buttons">
                    <button class="btn-edit" onclick="resourceManager.editResource(${resource.id})">
                        <i class="fas fa-edit"></i> Edit
                    </button>
                    <button class="btn-delete" onclick="resourceManager.deleteResource(${resource.id})">
                        <i class="fas fa-trash"></i> Delete
                    </button>
                </td>
            `;
            tbody.appendChild(tr);
        });

        // Update resource count
        const totalResources = resourcesToRender.length;
        const resourceCount = document.querySelector('.resources-list h2');
        resourceCount.textContent = `Resources Inventory (${totalResources})`;
    }

    saveResources() {
        localStorage.setItem('resources', JSON.stringify(this.resources));
    }

    showNotification(message, type) {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;

        // Add notification to the page
        document.body.appendChild(notification);

        // Remove notification after 3 seconds
        setTimeout(() => {
            notification.remove();
        }, 3000);
    }
}

// Initialize Resource Manager
const resourceManager = new ResourceManager();

// Add some sample data if no resources exist
if (resourceManager.resources.length === 0) {
    const sampleResources = [
        {
            id: 1,
            name: "Bricks",
            quantity: 1000,
            unit: "pieces",
            status: "available"
        },
        {
            id: 2,
            name: "Cement",
            quantity: 50,
            unit: "bags",
            status: "low"
        },
        {
            id: 3,
            name: "Steel Bars",
            quantity: 200,
            unit: "pieces",
            status: "in-use"
        }
    ];

    sampleResources.forEach(resource => {
        resourceManager.resources.push(resource);
    });
    resourceManager.saveResources();
    resourceManager.renderResources();
}
