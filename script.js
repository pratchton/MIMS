// Sample Motor Data Generator
const departments = ['Production', 'Utilities', 'Maintenance', 'Warehouse'];
const plants = ['Plant A', 'Plant B', 'Plant C', 'Plant D'];
const manufacturers = ['ABB', 'Siemens', 'WEG', 'Toshiba', 'Crompton Greaves', 'BHEL'];
const frameSizes = ['IEC 100L', 'IEC 112M', 'IEC 132M', 'IEC 160M', 'IEC 180M', 'IEC 200L', 'IEC 225M', 'IEC 250M'];
const zones = ['Zone 1', 'Zone 2', 'Safe Area'];
const atexRatings = ['Ex d IIB T4', 'Ex d IIC T5', 'Ex e IIB T4', 'N/A'];
const bearingTypes = ['6309-2Z', '6308-2RS', '6310-2Z', '6311-2Z', '6312-2RS', '6313-2Z'];
const greaseTypes = ['Shell Gadus S2 V220', 'Mobil Polyrex EM', 'SKF LGEP 2', 'Castrol LMX'];

// Generate sample motors
let motors = [];
for (let i = 1; i <= 5000; i++) {
    const dept = departments[Math.floor(Math.random() * departments.length)];
    const plant = plants[Math.floor(Math.random() * plants.length)];
    const power = [3.7, 5.5, 7.5, 11, 15, 18.5, 22, 30, 37, 45, 55, 75][Math.floor(Math.random() * 12)];
    const speed = [1500, 3000][Math.floor(Math.random() * 2)];
    const voltage = '380-415V';
    const current = (power * 1.8).toFixed(1);
    const status = Math.random() > 0.85 ? (Math.random() > 0.5 ? 'Maintenance' : 'Critical') : 'Active';
    
    motors.push({
        id: i,
        equipmentNo: `EQ-${String(i).padStart(6, '0')}`,
        tagNumber: `${dept.substring(0, 3).toUpperCase()}-M-${String(i).padStart(4, '0')}`,
        department: dept,
        plant: plant,
        power: power,
        voltage: voltage,
        speed: speed,
        current: current,
        frameSize: frameSizes[Math.floor(Math.random() * frameSizes.length)],
        serialNumber: `SN${Math.floor(Math.random() * 1000000)}`,
        manufacturer: manufacturers[Math.floor(Math.random() * manufacturers.length)],
        zone: zones[Math.floor(Math.random() * zones.length)],
        atexRating: atexRatings[Math.floor(Math.random() * atexRatings.length)],
        vsdDol: Math.random() > 0.7 ? 'VSD' : 'DOL',
        bearingDE: bearingTypes[Math.floor(Math.random() * bearingTypes.length)],
        bearingNDE: bearingTypes[Math.floor(Math.random() * bearingTypes.length)],
        greaseOil: 'Grease',
        lubricationType: greaseTypes[Math.floor(Math.random() * greaseTypes.length)],
        greasingDuration: [2000, 3000, 4000, 5000][Math.floor(Math.random() * 4)],
        status: status
    });
}

// Current filters
let currentFilters = {
    department: '',
    plant: '',
    search: ''
};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initNavigation();
    renderMotorTable(motors.slice(0, 50)); // Show first 50 motors
    updateMotorCount(motors.length);
});

// Navigation
function initNavigation() {
    const navItems = document.querySelectorAll('.nav-item:not(.disabled)');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            const pageId = this.getAttribute('data-page');
            switchPage(pageId);
            
            // Update active state
            navItems.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
        });
    });
}

function switchPage(pageId) {
    const pages = document.querySelectorAll('.page-content');
    pages.forEach(page => page.classList.remove('active'));
    
    const activePage = document.getElementById(pageId);
    if (activePage) {
        activePage.classList.add('active');
    }
}

// Motor Table Rendering
function renderMotorTable(motorsToRender) {
    const tbody = document.getElementById('motorTableBody');
    tbody.innerHTML = '';
    
    motorsToRender.forEach(motor => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><strong>${motor.equipmentNo}</strong></td>
            <td>${motor.tagNumber}</td>
            <td>${motor.department}</td>
            <td>${motor.plant}</td>
            <td>${motor.power}</td>
            <td>${motor.voltage}</td>
            <td>${motor.speed}</td>
            <td><span class="badge badge-info">${motor.frameSize}</span></td>
            <td>${motor.manufacturer}</td>
            <td>${motor.zone}</td>
            <td>
                <span class="status-badge ${getStatusClass(motor.status)}">
                    ${motor.status}
                </span>
            </td>
            <td>
                <button class="btn btn-ghost btn-sm" onclick="viewMotor(${motor.id})" title="View Details">
                    <svg class="btn-icon" viewBox="0 0 24 24">
                        <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
                    </svg>
                </button>
                <button class="btn btn-ghost btn-sm" onclick="openMotorModal('edit', ${motor.id})" title="Edit">
                    <svg class="btn-icon" viewBox="0 0 24 24">
                        <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
                    </svg>
                </button>
                <button class="btn btn-ghost btn-sm" onclick="deleteMotor(${motor.id})" title="Delete">
                    <svg class="btn-icon" viewBox="0 0 24 24">
                        <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
                    </svg>
                </button>
            </td>
        `;
        tbody.appendChild(row);
    });
}

function getStatusClass(status) {
    switch(status) {
        case 'Active': return 'status-active';
        case 'Maintenance': return 'status-maintenance';
        case 'Critical': return 'status-critical';
        default: return 'status-active';
    }
}

function updateMotorCount(count) {
    const motorCountElement = document.getElementById('motorCount');
    if (motorCountElement) {
        motorCountElement.textContent = count;
    }
}

// Filter Functions
function applyFilters() {
    currentFilters.department = document.getElementById('filterDepartment').value;
    currentFilters.plant = document.getElementById('filterPlant').value;
    currentFilters.search = document.getElementById('searchInput').value.toLowerCase();
    
    let filtered = motors;
    
    if (currentFilters.department) {
        filtered = filtered.filter(m => m.department === currentFilters.department);
    }
    
    if (currentFilters.plant) {
        filtered = filtered.filter(m => m.plant === currentFilters.plant);
    }
    
    if (currentFilters.search) {
        filtered = filtered.filter(m => 
            m.tagNumber.toLowerCase().includes(currentFilters.search) ||
            m.equipmentNo.toLowerCase().includes(currentFilters.search) ||
            m.manufacturer.toLowerCase().includes(currentFilters.search)
        );
    }
    
    renderMotorTable(filtered.slice(0, 50));
    updateMotorCount(filtered.length);
}

function clearFilters() {
    document.getElementById('filterDepartment').value = '';
    document.getElementById('filterPlant').value = '';
    document.getElementById('searchInput').value = '';
    currentFilters = { department: '', plant: '', search: '' };
    renderMotorTable(motors.slice(0, 50));
    updateMotorCount(motors.length);
}

// Modal Functions
function openMotorModal(mode, motorId = null) {
    const modal = document.getElementById('motorModal');
    const modalTitle = document.getElementById('modalTitle');
    const form = document.getElementById('motorForm');
    
    if (mode === 'create') {
        modalTitle.textContent = 'Add New Motor';
        form.reset();
    } else if (mode === 'edit' && motorId) {
        modalTitle.textContent = 'Edit Motor';
        const motor = motors.find(m => m.id === motorId);
        if (motor) {
            populateForm(motor);
        }
    }
    
    modal.classList.add('active');
}

function closeMotorModal() {
    const modal = document.getElementById('motorModal');
    modal.classList.remove('active');
}

function populateForm(motor) {
    const form = document.getElementById('motorForm');
    form.elements['equipmentNo'].value = motor.equipmentNo;
    form.elements['tagNumber'].value = motor.tagNumber;
    form.elements['department'].value = motor.department;
    form.elements['plant'].value = motor.plant;
    form.elements['power'].value = motor.power;
    form.elements['voltage'].value = motor.voltage;
    form.elements['speed'].value = motor.speed;
    form.elements['current'].value = motor.current;
    form.elements['frameSize'].value = motor.frameSize;
    form.elements['serialNumber'].value = motor.serialNumber;
    form.elements['manufacturer'].value = motor.manufacturer;
    form.elements['zone'].value = motor.zone;
    form.elements['atexRating'].value = motor.atexRating;
    form.elements['vsdDol'].value = motor.vsdDol;
    form.elements['bearingDE'].value = motor.bearingDE;
    form.elements['bearingNDE'].value = motor.bearingNDE;
    form.elements['greaseOil'].value = motor.greaseOil;
    form.elements['lubricationType'].value = motor.lubricationType;
    form.elements['greasingDuration'].value = motor.greasingDuration;
}

function saveMotor() {
    const form = document.getElementById('motorForm');
    
    // Basic validation
    if (!form.checkValidity()) {
        alert('Please fill in all required fields');
        return;
    }
    
    const formData = new FormData(form);
    const motorData = {
        id: motors.length + 1,
        equipmentNo: formData.get('equipmentNo'),
        tagNumber: formData.get('tagNumber'),
        department: formData.get('department'),
        plant: formData.get('plant'),
        power: parseFloat(formData.get('power')),
        voltage: formData.get('voltage'),
        speed: parseInt(formData.get('speed')),
        current: parseFloat(formData.get('current')),
        frameSize: formData.get('frameSize'),
        serialNumber: formData.get('serialNumber'),
        manufacturer: formData.get('manufacturer'),
        zone: formData.get('zone'),
        atexRating: formData.get('atexRating'),
        vsdDol: formData.get('vsdDol'),
        bearingDE: formData.get('bearingDE'),
        bearingNDE: formData.get('bearingNDE'),
        greaseOil: formData.get('greaseOil'),
        lubricationType: formData.get('lubricationType'),
        greasingDuration: parseInt(formData.get('greasingDuration')),
        status: 'Active'
    };
    
    motors.push(motorData);
    renderMotorTable(motors.slice(0, 50));
    updateMotorCount(motors.length);
    closeMotorModal();
    
    showNotification('Motor added successfully!', 'success');
}

function viewMotor(motorId) {
    const motor = motors.find(m => m.id === motorId);
    if (motor) {
        alert(`Motor Details:\n\nEquipment No: ${motor.equipmentNo}\nTag: ${motor.tagNumber}\nDepartment: ${motor.department}\nPlant: ${motor.plant}\nPower: ${motor.power} kW\nManufacturer: ${motor.manufacturer}\nStatus: ${motor.status}`);
    }
}

function deleteMotor(motorId) {
    if (confirm('Are you sure you want to delete this motor?')) {
        motors = motors.filter(m => m.id !== motorId);
        renderMotorTable(motors.slice(0, 50));
        updateMotorCount(motors.length);
        showNotification('Motor deleted successfully!', 'success');
    }
}

// Import/Export Functions
function importFromSAP() {
    showNotification('SAP Import feature will be integrated with SAP S4/HANA system', 'info');
}

function exportToExcel() {
    // Create CSV content
    const headers = ['Equipment No', 'Tag Number', 'Department', 'Plant', 'Power (kW)', 'Voltage', 'Speed (rpm)', 'Current (A)', 'Type & Frame', 'Manufacturer', 'Zone/Cat', 'ATEX Rating', 'Status'];
    const csvContent = [
        headers.join(','),
        ...motors.slice(0, 100).map(motor => [
            motor.equipmentNo,
            motor.tagNumber,
            motor.department,
            motor.plant,
            motor.power,
            motor.voltage,
            motor.speed,
            motor.current,
            motor.frameSize,
            motor.manufacturer,
            motor.zone,
            motor.atexRating,
            motor.status
        ].join(','))
    ].join('\n');
    
    downloadCSV(csvContent, 'motor_registry.csv');
    showNotification('Exporting motor registry to Excel...', 'success');
}

function exportDatabaseToExcel() {
    showNotification('Exporting motor database to Excel...', 'success');
}

function downloadCSV(content, filename) {
    const blob = new Blob([content], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    if (link.download !== undefined) {
        const url = URL.createObjectURL(blob);
        link.setAttribute('href', url);
        link.setAttribute('download', filename);
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
}

// Notification System
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 4rem;
        right: 2rem;
        background: ${type === 'success' ? '#107e3e' : type === 'error' ? '#bb0000' : '#0a6ed1'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 0.25rem;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        z-index: 3000;
        animation: slideIn 0.3s ease;
        max-width: 400px;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Close modal when clicking outside
window.addEventListener('click', function(event) {
    const modal = document.getElementById('motorModal');
    if (event.target === modal) {
        closeMotorModal();
    }
});

// Add animation styles
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Sample data for demonstration
console.log('MIMS Application Loaded');
console.log(`Total Motors: ${motors.length}`);
console.log('Sample Motor Data:', motors[0]);
