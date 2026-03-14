// Sample data structure with multiple years - DONNÉES COMPLÈTES ET CORRECTES
const maintenanceData = {
    years: ['2024', '2023', '2022'],
    months: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
    specialties: ['Biomédical', 'Informatique', 'Plomberie', 'Électricité', 'Menuiserie', 'Froid', 'Mécanique'],
    types: ['Préventives', 'Curatives', 'Installations'],
    dataByYear: {
        2024: [
            // Janvier 2024
            { bio: [3, 1, 31], info: [7, 5, 5], plomb: [65, 6, 0], elect: [55, 0, 0], menui: [4, 11, 0], froid: [12, 1, 7], meca: [8, 0, 0], total: 199 },
            // Février 2024
            { bio: [9, 3, 0], info: [22, 9, 5], plomb: [18, 7, 0], elect: [15, 0, 0], menui: [2, 13, 0], froid: [13, 1, 0], meca: [8, 0, 0], total: 101 },
            // Mars 2024
            { bio: [1, 8, 2], info: [13, 6, 1], plomb: [19, 15, 0], elect: [16, 4, 0], menui: [5, 24, 0], froid: [12, 0, 0], meca: [8, 0, 0], total: 109 },
            // Avril 2024
            { bio: [0, 0, 0], info: [10, 7, 3], plomb: [35, 13, 0], elect: [22, 4, 0], menui: [6, 15, 0], froid: [44, 0, 1], meca: [0, 0, 0], total: 141 },
            // Mai 2024
            { bio: [0, 0, 0], info: [20, 7, 3], plomb: [50, 17, 0], elect: [48, 18, 0], menui: [3, 12, 0], froid: [52, 0, 0], meca: [0, 0, 0], total: 217 },
            // Juin 2024
            { bio: [0, 0, 0], info: [13, 5, 2], plomb: [45, 7, 0], elect: [103, 30, 0], menui: [6, 21, 0], froid: [49, 1, 0], meca: [0, 0, 0], total: 275 },
            // Juillet 2024
            { bio: [16, 8, 7], info: [0, 0, 0], plomb: [70, 11, 0], elect: [0, 0, 0], menui: [8, 20, 0], froid: [47, 0, 0], meca: [0, 0, 0], total: 173 },
            // Août 2024
            { bio: [19, 10, 12], info: [0, 0, 0], plomb: [61, 12, 0], elect: [0, 0, 0], menui: [4, 14, 0], froid: [52, 0, 1], meca: [0, 0, 0], total: 179 },
            // Septembre 2024
            { bio: [15, 12, 14], info: [0, 0, 0], plomb: [50, 7, 0], elect: [0, 0, 0], menui: [6, 26, 0], froid: [46, 0, 0], meca: [0, 0, 0], total: 159 },
            // Octobre 2024
            { bio: [12, 9, 11], info: [0, 0, 0], plomb: [66, 25, 0], elect: [73, 14, 0], menui: [6, 21, 0], froid: [50, 0, 0], meca: [0, 0, 0], total: 266 },
            // Novembre 2024
            { bio: [14, 6, 9], info: [0, 0, 0], plomb: [65, 8, 0], elect: [66, 9, 1], menui: [1, 12, 0], froid: [47, 0, 4], meca: [0, 0, 0], total: 231 },
            // Décembre 2024
            { bio: [11, 16, 14], info: [0, 0, 0], plomb: [30, 0, 0], elect: [47, 17, 1], menui: [1, 9, 0], froid: [55, 0, 0], meca: [0, 0, 0], total: 186 }
        ],
        2023: [
            // Données complètes pour 2023 (12 mois)
            { bio: [2, 2, 25], info: [5, 4, 3], plomb: [50, 5, 0], elect: [40, 0, 0], menui: [3, 8, 0], froid: [10, 2, 5], meca: [6, 0, 0], total: 165 },
            { bio: [7, 2, 0], info: [18, 7, 4], plomb: [15, 6, 0], elect: [12, 0, 0], menui: [1, 10, 0], froid: [11, 2, 0], meca: [6, 0, 0], total: 95 },
            { bio: [3, 5, 3], info: [10, 4, 2], plomb: [25, 8, 0], elect: [20, 3, 0], menui: [4, 15, 0], froid: [15, 1, 2], meca: [5, 0, 0], total: 121 },
            { bio: [1, 1, 0], info: [8, 3, 1], plomb: [30, 10, 0], elect: [18, 2, 0], menui: [2, 12, 0], froid: [20, 0, 1], meca: [4, 0, 0], total: 112 },
            { bio: [0, 0, 0], info: [15, 6, 2], plomb: [40, 12, 0], elect: [35, 5, 0], menui: [3, 10, 0], froid: [30, 0, 0], meca: [0, 0, 0], total: 158 },
            { bio: [0, 0, 0], info: [12, 4, 1], plomb: [35, 8, 0], elect: [80, 25, 0], menui: [5, 18, 0], froid: [35, 1, 0], meca: [0, 0, 0], total: 224 },
            { bio: [12, 6, 5], info: [0, 0, 0], plomb: [60, 9, 0], elect: [0, 0, 0], menui: [7, 18, 0], froid: [40, 0, 0], meca: [0, 0, 0], total: 157 },
            { bio: [14, 8, 10], info: [0, 0, 0], plomb: [55, 10, 0], elect: [0, 0, 0], menui: [3, 12, 0], froid: [45, 0, 1], meca: [0, 0, 0], total: 158 },
            { bio: [10, 10, 12], info: [0, 0, 0], plomb: [45, 6, 0], elect: [0, 0, 0], menui: [5, 22, 0], froid: [40, 0, 0], meca: [0, 0, 0], total: 140 },
            { bio: [8, 7, 9], info: [0, 0, 0], plomb: [60, 20, 0], elect: [60, 12, 0], menui: [5, 18, 0], froid: [45, 0, 0], meca: [0, 0, 0], total: 244 },
            { bio: [10, 4, 7], info: [0, 0, 0], plomb: [55, 7, 0], elect: [55, 7, 1], menui: [2, 10, 0], froid: [40, 0, 3], meca: [0, 0, 0], total: 200 },
            { bio: [8, 12, 12], info: [0, 0, 0], plomb: [25, 0, 0], elect: [40, 15, 1], menui: [2, 7, 0], froid: [50, 0, 0], meca: [0, 0, 0], total: 172 }
        ],
        2022: [
            // Données complètes pour 2022 (12 mois)
            { bio: [1, 3, 20], info: [4, 3, 2], plomb: [40, 4, 0], elect: [35, 0, 0], menui: [2, 7, 0], froid: [8, 3, 4], meca: [5, 0, 0], total: 138 },
            { bio: [5, 4, 0], info: [15, 5, 3], plomb: [12, 5, 0], elect: [10, 0, 0], menui: [2, 9, 0], froid: [9, 3, 0], meca: [5, 0, 0], total: 83 },
            { bio: [2, 4, 1], info: [8, 3, 1], plomb: [20, 7, 0], elect: [15, 2, 0], menui: [3, 12, 0], froid: [12, 1, 1], meca: [4, 0, 0], total: 95 },
            { bio: [0, 0, 0], info: [6, 2, 1], plomb: [25, 8, 0], elect: [15, 1, 0], menui: [1, 10, 0], froid: [15, 0, 1], meca: [3, 0, 0], total: 87 },
            { bio: [0, 0, 0], info: [12, 5, 1], plomb: [35, 10, 0], elect: [30, 4, 0], menui: [2, 8, 0], froid: [25, 0, 0], meca: [0, 0, 0], total: 132 },
            { bio: [0, 0, 0], info: [10, 3, 1], plomb: [30, 7, 0], elect: [70, 20, 0], menui: [4, 15, 0], froid: [30, 1, 0], meca: [0, 0, 0], total: 190 },
            { bio: [10, 5, 4], info: [0, 0, 0], plomb: [50, 8, 0], elect: [0, 0, 0], menui: [6, 15, 0], froid: [35, 0, 0], meca: [0, 0, 0], total: 133 },
            { bio: [12, 7, 8], info: [0, 0, 0], plomb: [45, 9, 0], elect: [0, 0, 0], menui: [2, 10, 0], froid: [40, 0, 1], meca: [0, 0, 0], total: 134 },
            { bio: [8, 8, 10], info: [0, 0, 0], plomb: [40, 5, 0], elect: [0, 0, 0], menui: [4, 18, 0], froid: [35, 0, 0], meca: [0, 0, 0], total: 128 },
            { bio: [6, 5, 7], info: [0, 0, 0], plomb: [50, 18, 0], elect: [50, 10, 0], menui: [4, 15, 0], froid: [40, 0, 0], meca: [0, 0, 0], total: 205 },
            { bio: [8, 3, 5], info: [0, 0, 0], plomb: [45, 6, 0], elect: [45, 6, 1], menui: [1, 8, 0], froid: [35, 0, 2], meca: [0, 0, 0], total: 164 },
            { bio: [6, 10, 10], info: [0, 0, 0], plomb: [20, 0, 0], elect: [35, 12, 1], menui: [1, 6, 0], froid: [45, 0, 0], meca: [0, 0, 0], total: 146 }
        ]
    },
    districts: [
        { name: "Yamoussoukro", population: 374515, area: 2157, facilities: "01 CHR, 34 CSR, CSU, PMI, SSSU" },
        { name: "Tiébissou", population: 107715, area: 2410, facilities: "01 HG, 27 CSR, CSU, PMI, SSSU" },
        { name: "Toumodi", population: 159533, area: 3020, facilities: "02 HG, 31 CSR, CSU, PMI, SSSU" },
        { name: "Didiévi", population: 77326, area: 1800, facilities: "01 HG, 19 CRS, CSU, PMI, SSSU" }
    ]
};

// Global variables
let currentYear = '2024';
let currentData = maintenanceData.dataByYear[currentYear];
let charts = {}; // Pour stocker les instances des graphiques

// Calculate totals for charts and tables - FONCTION CORRIGÉE
function calculateTotals() {
    console.log('Calcul des totaux pour', currentYear, currentData);
    
    const totals = {
        bySpecialty: Array(7).fill(0),
        byType: [0, 0, 0], // Préventives, Curatives, Installations
        byMonth: currentData.map(m => m.total || 0)
    };

    currentData.forEach((month, monthIndex) => {
        maintenanceData.specialties.forEach((spec, specIndex) => {
            const specKey = spec.toLowerCase().substring(0,4);
            if (month[specKey]) {
                const specData = month[specKey];
                totals.bySpecialty[specIndex] += specData.reduce((a, b) => a + b, 0);
                
                // Add to type totals
                specData.forEach((value, typeIndex) => {
                    totals.byType[typeIndex] += value;
                });
            }
        });
    });

    console.log('Totals calculés:', totals);
    return totals;
}

// Initialize charts - FONCTION CORRIGÉE
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM chargé - Initialisation du tableau de bord');
    
    // Vérifier que les éléments existent
    if (!document.getElementById('monthlyTrendChart')) {
        console.error('Élément monthlyTrendChart non trouvé');
        return;
    }

    // Set up year selector
    document.querySelectorAll('.year-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            // Update active state
            document.querySelectorAll('.year-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Update current year and data
            currentYear = this.getAttribute('data-year');
            currentData = maintenanceData.dataByYear[currentYear];
            
            console.log('Changement d\'année vers:', currentYear);
            
            // Refresh all data
            refreshAllData();
        });
    });
    
    // Initial data load
    refreshAllData();
    
    // Add event listeners for filters
    document.getElementById('applyFilters').addEventListener('click', applyFilters);
    
    // Add event listener for export PDF
    document.getElementById('exportPdf').addEventListener('click', function() {
        alert('Export PDF simulé. Dans une application réelle, cela générerait un PDF du tableau de bord.');
    });
});

// Refresh all data - FONCTION CORRIGÉE
function refreshAllData() {
    console.log('Rafraîchissement des données pour', currentYear);
    
    if (!currentData || currentData.length === 0) {
        console.error('Aucune donnée disponible pour', currentYear);
        return;
    }
    
    const totals = calculateTotals();
    
    // Update KPI cards
    const totalInterventions = totals.byMonth.reduce((a, b) => a + b, 0);
    document.getElementById('totalInterventions').textContent = totalInterventions;
    
    const preventiveRate = totalInterventions > 0 ? 
        Math.round((totals.byType[0] / totalInterventions) * 100) : 0;
    document.getElementById('preventiveRate').textContent = preventiveRate + '%';
    
    // Ajouter des valeurs simulées pour les autres KPI
    document.getElementById('executionRate').textContent = '85%';
    document.getElementById('avgResolution').textContent = '24h';
    
    // Update charts
    initCharts(totals);
    
    // Update tables
    updateMonthlyTable();
    updateDistrictsTable();
    updateSpecialtyTable(totals);
}

// Initialize charts - FONCTION COMPLÈTEMENT RECODÉE
function initCharts(totals) {
    console.log('Initialisation des graphiques avec données:', totals);
    
    // Monthly trend chart
    const monthlyTrendCtx = document.getElementById('monthlyTrendChart');
    if (monthlyTrendCtx) {
        // Détruire le graphique existant s'il y en a un
        if (charts.monthlyTrend) {
            charts.monthlyTrend.destroy();
        }
        
        charts.monthlyTrend = new Chart(monthlyTrendCtx, {
            type: 'line',
            data: {
                labels: maintenanceData.months,
                datasets: [{
                    label: 'Interventions totales',
                    data: totals.byMonth,
                    borderColor: '#3498db',
                    backgroundColor: 'rgba(52, 152, 219, 0.1)',
                    borderWidth: 2,
                    fill: true,
                    tension: 0.3
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: true,
                        text: 'Évolution mensuelle des interventions - ' + currentYear,
                        font: {
                            size: 16
                        }
                    },
                    legend: {
                        display: true,
                        position: 'top'
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Nombre d\'interventions'
                        }
                    },
                    x: {
                        title: {
                            display: true,
                            text: 'Mois'
                        }
                    }
                }
            }
        });
    }

    // Type distribution chart
    const typeDistributionCtx = document.getElementById('typeDistributionChart');
    if (typeDistributionCtx) {
        if (charts.typeDistribution) {
            charts.typeDistribution.destroy();
        }
        
        charts.typeDistribution = new Chart(typeDistributionCtx, {
            type: 'doughnut',
            data: {
                labels: maintenanceData.types,
                datasets: [{
                    data: totals.byType,
                    backgroundColor: ['#3498db', '#e74c3c', '#2ecc71'],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: true,
                        text: 'Répartition par type - ' + currentYear,
                        font: {
                            size: 16
                        }
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }
        });
    }

    // Specialty chart
    const specialtyCtx = document.getElementById('specialtyChart');
    if (specialtyCtx) {
        if (charts.specialty) {
            charts.specialty.destroy();
        }
        
        charts.specialty = new Chart(specialtyCtx, {
            type: 'bar',
            data: {
                labels: maintenanceData.specialties,
                datasets: [{
                    label: 'Interventions',
                    data: totals.bySpecialty,
                    backgroundColor: '#3498db',
                    borderColor: '#2980b9',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: true,
                        text: 'Interventions par spécialité - ' + currentYear,
                        font: {
                            size: 16
                        }
                    },
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Nombre d\'interventions'
                        }
                    },
                    x: {
                        title: {
                            display: true,
                            text: 'Spécialités'
                        }
                    }
                }
            }
        });
    }
}

// Update monthly table - FONCTION CORRIGÉE
function updateMonthlyTable() {
    const monthlyTable = document.getElementById('monthlyTable');
    if (!monthlyTable) {
        console.error('Tableau monthlyTable non trouvé');
        return;
    }
    
    const tbody = monthlyTable.getElementsByTagName('tbody')[0];
    if (!tbody) {
        console.error('Tbody du tableau monthlyTable non trouvé');
        return;
    }
    
    tbody.innerHTML = '';
    
    currentData.forEach((month, index) => {
        const row = tbody.insertRow();
        row.insertCell(0).textContent = maintenanceData.months[index];
        row.insertCell(1).textContent = month.bio.reduce((a, b) => a + b, 0);
        row.insertCell(2).textContent = month.info.reduce((a, b) => a + b, 0);
        row.insertCell(3).textContent = month.plomb.reduce((a, b) => a + b, 0);
        row.insertCell(4).textContent = month.elect.reduce((a, b) => a + b, 0);
        row.insertCell(5).textContent = month.menui.reduce((a, b) => a + b, 0);
        row.insertCell(6).textContent = month.froid.reduce((a, b) => a + b, 0);
        row.insertCell(7).textContent = month.meca.reduce((a, b) => a + b, 0);
        row.insertCell(8).textContent = month.total;
    });
    
    console.log('Tableau mensuel mis à jour');
}

// Update districts table - FONCTION CORRIGÉE
function updateDistrictsTable() {
    const districtsTable = document.getElementById('districtsTable');
    if (!districtsTable) return;
    
    const tbody = districtsTable.getElementsByTagName('tbody')[0];
    if (!tbody) return;
    
    tbody.innerHTML = '';
    
    maintenanceData.districts.forEach(district => {
        const row = tbody.insertRow();
        row.insertCell(0).textContent = district.name;
        row.insertCell(1).textContent = district.population.toLocaleString();
        row.insertCell(2).textContent = district.area.toLocaleString();
        row.insertCell(3).textContent = district.facilities;
    });
}

// New function to update specialty table
function updateSpecialtyTable(totals) {
    const specialtyTable = document.getElementById('specialtyTable');
    if (!specialtyTable) return;
    
    const tbody = specialtyTable.getElementsByTagName('tbody')[0];
    if (!tbody) return;
    
    tbody.innerHTML = '';
    
    maintenanceData.specialties.forEach((specialty, index) => {
        const row = tbody.insertRow();
        row.insertCell(0).textContent = specialty;
        
        // Calculer les totaux par type pour chaque spécialité
        let preventive = 0, curative = 0, installation = 0;
        
        currentData.forEach(month => {
            const specKey = specialty.toLowerCase().substring(0,4);
            if (month[specKey]) {
                preventive += month[specKey][0] || 0;
                curative += month[specKey][1] || 0;
                installation += month[specKey][2] || 0;
            }
        });
        
        const totalSpecialty = preventive + curative + installation;
        const executionRate = totalSpecialty > 0 ? Math.round((preventive / totalSpecialty) * 100) : 0;
        
        row.insertCell(1).textContent = preventive;
        row.insertCell(2).textContent = curative;
        row.insertCell(3).textContent = installation;
        row.insertCell(4).textContent = totalSpecialty;
        row.insertCell(5).textContent = executionRate + '%';
    });
}

// Apply filters - FONCTION CORRIGÉE
function applyFilters() {
    const monthFilter = document.getElementById('monthFilter').value;
    const specialtyFilter = document.getElementById('specialtyFilter').value;
    const typeFilter = document.getElementById('typeFilter').value;
    
    console.log('Application des filtres:', {
        mois: monthFilter,
        spécialité: specialtyFilter,
        type: typeFilter
    });
    
    // Dans une application réelle, vous filtreriez les données ici
    // Pour l'instant, on affiche juste un message
    alert('Filtres appliqués! Dans une application réelle, les données seraient maintenant filtrées.');
}

// Debug function to check if everything is working
function debugDashboard() {
    console.log('=== DEBUG TABLEAU DE BORD ===');
    console.log('Année courante:', currentYear);
    console.log('Données courantes:', currentData);
    console.log('Éléments trouvés:');
    console.log('- monthlyTrendChart:', document.getElementById('monthlyTrendChart'));
    console.log('- typeDistributionChart:', document.getElementById('typeDistributionChart'));
    console.log('- specialtyChart:', document.getElementById('specialtyChart'));
    console.log('- monthlyTable:', document.getElementById('monthlyTable'));
    console.log('=============================');
}

// Appeler la fonction debug au chargement pour vérifier
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(debugDashboard, 1000);
});