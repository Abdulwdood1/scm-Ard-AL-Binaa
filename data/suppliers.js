// Sample supplier data
const suppliersData = [
    {
        id: 1,
        name: "Al-Salam Building Materials",
        contact: {
            phone: "+964 771 234 5678",
            email: "info@alsalam-materials.com",
            address: "Al-Mansour District, Baghdad, Iraq"
        },
        materials: [
            {
                id: 1,
                name: "Premium Bricks",
                price: 0.75,
                unit: "piece",
                minOrder: 1000,
                availability: "in-stock",
                quality: "high"
            },
            {
                id: 2,
                name: "Portland Cement",
                price: 12.50,
                unit: "bag",
                minOrder: 50,
                availability: "in-stock",
                quality: "premium"
            }
        ]
    },
    {
        id: 2,
        name: "Al-Rafidain Steel Industries",
        contact: {
            phone: "+964 773 456 7890",
            email: "sales@rafidain-steel.com",
            address: "Industrial Area, Basra, Iraq"
        },
        materials: [
            {
                id: 3,
                name: "Reinforcement Steel Bars",
                price: 45.00,
                unit: "ton",
                minOrder: 5,
                availability: "in-stock",
                quality: "high"
            },
            {
                id: 4,
                name: "Steel Wire Mesh",
                price: 25.00,
                unit: "roll",
                minOrder: 10,
                availability: "on-demand",
                quality: "standard"
            }
        ]
    },
    {
        id: 3,
        name: "Al-Najaf Concrete Solutions",
        contact: {
            phone: "+964 770 789 1234",
            email: "info@najaf-concrete.com",
            address: "Industrial Zone, Najaf, Iraq"
        },
        materials: [
            {
                id: 5,
                name: "Ready-Mix Concrete",
                price: 85.00,
                unit: "cubic-yard",
                minOrder: 1,
                availability: "made-to-order",
                quality: "high"
            },
            {
                id: 6,
                name: "Concrete Blocks",
                price: 2.25,
                unit: "piece",
                minOrder: 500,
                availability: "in-stock",
                quality: "standard"
            }
        ]
    },
    {
        id: 4,
        name: "Mosul Construction Materials",
        contact: {
            phone: "+964 772 345 6789",
            email: "sales@mosul-materials.com",
            address: "Industrial District, Mosul, Iraq"
        },
        materials: [
            {
                id: 7,
                name: "Ceramic Tiles",
                price: 15.00,
                unit: "square-meter",
                minOrder: 100,
                availability: "in-stock",
                quality: "premium"
            },
            {
                id: 8,
                name: "Marble Slabs",
                price: 45.00,
                unit: "square-meter",
                minOrder: 50,
                availability: "on-demand",
                quality: "premium"
            },
            {
                id: 9,
                name: "Granite Tiles",
                price: 35.00,
                unit: "square-meter",
                minOrder: 75,
                availability: "in-stock",
                quality: "high"
            }
        ]
    },
    {
        id: 5,
        name: "Karbala Glass & Aluminum",
        contact: {
            phone: "+964 771 567 8901",
            email: "info@karbala-glass.com",
            address: "Industrial Area, Karbala, Iraq"
        },
        materials: [
            {
                id: 10,
                name: "Tempered Glass",
                price: 55.00,
                unit: "square-meter",
                minOrder: 20,
                availability: "made-to-order",
                quality: "premium"
            },
            {
                id: 11,
                name: "Aluminum Profiles",
                price: 18.00,
                unit: "meter",
                minOrder: 100,
                availability: "in-stock",
                quality: "high"
            },
            {
                id: 12,
                name: "Double Glazed Units",
                price: 85.00,
                unit: "square-meter",
                minOrder: 15,
                availability: "made-to-order",
                quality: "premium"
            }
        ]
    },
    {
        id: 6,
        name: "Diyala Wood & Timber",
        contact: {
            phone: "+964 773 678 9012",
            email: "orders@diyala-wood.com",
            address: "Industrial Zone, Baqubah, Diyala, Iraq"
        },
        materials: [
            {
                id: 13,
                name: "Plywood Sheets",
                price: 25.00,
                unit: "sheet",
                minOrder: 50,
                availability: "in-stock",
                quality: "standard"
            },
            {
                id: 14,
                name: "Hardwood Timber",
                price: 75.00,
                unit: "cubic-meter",
                minOrder: 5,
                availability: "on-demand",
                quality: "premium"
            },
            {
                id: 15,
                name: "MDF Boards",
                price: 30.00,
                unit: "sheet",
                minOrder: 30,
                availability: "in-stock",
                quality: "high"
            }
        ]
    },
    {
        id: 7,
        name: "Erbil Modern Paints",
        contact: {
            phone: "+964 770 789 0123",
            email: "contact@erbil-paints.com",
            address: "Industrial Complex, Erbil, Iraq"
        },
        materials: [
            {
                id: 16,
                name: "Interior Emulsion Paint",
                price: 15.00,
                unit: "gallon",
                minOrder: 50,
                availability: "in-stock",
                quality: "premium"
            },
            {
                id: 17,
                name: "Exterior Weather Paint",
                price: 25.00,
                unit: "gallon",
                minOrder: 30,
                availability: "in-stock",
                quality: "high"
            },
            {
                id: 18,
                name: "Anti-Rust Primer",
                price: 20.00,
                unit: "gallon",
                minOrder: 25,
                availability: "in-stock",
                quality: "standard"
            }
        ]
    },
    {
        id: 8,
        name: "Anbar Insulation Materials",
        contact: {
            phone: "+964 772 890 1234",
            email: "sales@anbar-insulation.com",
            address: "Industrial Area, Ramadi, Anbar, Iraq"
        },
        materials: [
            {
                id: 19,
                name: "Thermal Insulation Rolls",
                price: 8.50,
                unit: "square-meter",
                minOrder: 200,
                availability: "in-stock",
                quality: "high"
            },
            {
                id: 20,
                name: "Waterproofing Membrane",
                price: 12.00,
                unit: "square-meter",
                minOrder: 150,
                availability: "in-stock",
                quality: "premium"
            },
            {
                id: 21,
                name: "Acoustic Insulation Panels",
                price: 15.00,
                unit: "panel",
                minOrder: 100,
                availability: "on-demand",
                quality: "premium"
            }
        ]
    },
    {
        id: 9,
        name: "Kirkuk Pipes & Fittings",
        contact: {
            phone: "+964 771 901 2345",
            email: "info@kirkuk-pipes.com",
            address: "Industrial Zone, Kirkuk, Iraq"
        },
        materials: [
            {
                id: 22,
                name: "PVC Pipes",
                price: 8.00,
                unit: "meter",
                minOrder: 100,
                availability: "in-stock",
                quality: "high"
            },
            {
                id: 23,
                name: "Metal Water Pipes",
                price: 15.00,
                unit: "meter",
                minOrder: 50,
                availability: "in-stock",
                quality: "premium"
            },
            {
                id: 24,
                name: "Pipe Fittings Set",
                price: 45.00,
                unit: "set",
                minOrder: 20,
                availability: "in-stock",
                quality: "standard"
            }
        ]
    },
    {
        id: 10,
        name: "Wasit Electrical Supplies",
        contact: {
            phone: "+964 773 012 3456",
            email: "orders@wasit-electrical.com",
            address: "Industrial District, Kut, Wasit, Iraq"
        },
        materials: [
            {
                id: 25,
                name: "Electrical Cables",
                price: 2.50,
                unit: "meter",
                minOrder: 500,
                availability: "in-stock",
                quality: "high"
            },
            {
                id: 26,
                name: "Circuit Breakers",
                price: 15.00,
                unit: "piece",
                minOrder: 50,
                availability: "in-stock",
                quality: "premium"
            },
            {
                id: 27,
                name: "Distribution Boards",
                price: 120.00,
                unit: "piece",
                minOrder: 10,
                availability: "on-demand",
                quality: "premium"
            }
        ]
    }
];
