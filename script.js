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
    buildMotorDatabase(); // Build database specifications
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
    if (!motor) {
        showNotification('Motor not found', 'error');
        return;
    }
    
    // Update modal title
    document.getElementById('viewModalTitle').textContent = `Motor: ${motor.tagNumber}`;
    document.getElementById('viewModalSubtitle').textContent = `Equipment No: ${motor.equipmentNo}`;
    
    // Store current motor ID for edit function
    window.currentViewMotorId = motorId;
    
    // Build the view content
    const content = `
        <div class="view-section">
            <h3 class="view-section-title">
                <svg class="view-section-icon" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                Basic Information
            </h3>
            <div class="view-grid">
                <div class="view-field">
                    <label class="view-label">SAP Equipment Number</label>
                    <div class="view-value">${motor.equipmentNo}</div>
                </div>
                <div class="view-field">
                    <label class="view-label">Tag Number</label>
                    <div class="view-value">${motor.tagNumber}</div>
                </div>
                <div class="view-field">
                    <label class="view-label">Department</label>
                    <div class="view-value">
                        <span class="view-badge view-badge-blue">${motor.department}</span>
                    </div>
                </div>
                <div class="view-field">
                    <label class="view-label">Plant</label>
                    <div class="view-value">
                        <span class="view-badge view-badge-blue">${motor.plant}</span>
                    </div>
                </div>
                <div class="view-field">
                    <label class="view-label">Status</label>
                    <div class="view-value">
                        <span class="view-badge ${motor.status === 'Active' ? 'view-badge-green' : motor.status === 'Maintenance' ? 'view-badge-orange' : 'view-badge-red'}">
                            ${motor.status}
                        </span>
                    </div>
                </div>
            </div>
        </div>

        <div class="view-section">
            <h3 class="view-section-title">
                <svg class="view-section-icon" viewBox="0 0 24 24">
                    <path d="M13 2.05v3.03c3.39.49 6 3.39 6 6.92 0 .9-.18 1.75-.48 2.54l2.6 1.53c.56-1.24.88-2.62.88-4.07 0-5.18-3.95-9.45-9-9.95zM12 19c-3.87 0-7-3.13-7-7 0-3.53 2.61-6.43 6-6.92V2.05c-5.06.5-9 4.76-9 9.95 0 5.52 4.47 10 9.99 10 3.31 0 6.24-1.61 8.06-4.09l-2.6-1.53C16.17 17.98 14.21 19 12 19z"/>
                </svg>
                Electrical Specifications
            </h3>
            <div class="view-grid">
                <div class="view-field">
                    <label class="view-label">Power (kW)</label>
                    <div class="view-value"><strong>${motor.power} kW</strong></div>
                </div>
                <div class="view-field">
                    <label class="view-label">Voltage</label>
                    <div class="view-value">${motor.voltage}</div>
                </div>
                <div class="view-field">
                    <label class="view-label">Speed (rpm)</label>
                    <div class="view-value">${motor.speed} rpm</div>
                </div>
                <div class="view-field">
                    <label class="view-label">Current</label>
                    <div class="view-value">${motor.current} A</div>
                </div>
            </div>
        </div>

        <div class="view-section">
            <h3 class="view-section-title">
                <svg class="view-section-icon" viewBox="0 0 24 24">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                </svg>
                Motor Details
            </h3>
            <div class="view-grid">
                <div class="view-field">
                    <label class="view-label">Type & Frame Size</label>
                    <div class="view-value">
                        <span class="view-badge view-badge-blue">${motor.frameSize}</span>
                    </div>
                </div>
                <div class="view-field">
                    <label class="view-label">Serial Number</label>
                    <div class="view-value ${motor.serialNumber ? '' : 'empty'}">
                        ${motor.serialNumber || 'Not specified'}
                    </div>
                </div>
                <div class="view-field">
                    <label class="view-label">Manufacturer</label>
                    <div class="view-value">${motor.manufacturer}</div>
                </div>
                <div class="view-field">
                    <label class="view-label">Zone/Category</label>
                    <div class="view-value">
                        <span class="view-badge ${motor.zone === 'Zone 1' ? 'view-badge-red' : motor.zone === 'Zone 2' ? 'view-badge-orange' : 'view-badge-green'}">
                            ${motor.zone}
                        </span>
                    </div>
                </div>
                <div class="view-field">
                    <label class="view-label">ATEX Rating</label>
                    <div class="view-value ${motor.atexRating ? '' : 'empty'}">
                        ${motor.atexRating || 'N/A'}
                    </div>
                </div>
                <div class="view-field">
                    <label class="view-label">VSD/DOL</label>
                    <div class="view-value">
                        <span class="view-badge view-badge-blue">${motor.vsdDol}</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="view-section">
            <h3 class="view-section-title">
                <svg class="view-section-icon" viewBox="0 0 24 24">
                    <path d="M12.5 8c-2.65 0-5.05.99-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88 3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z"/>
                </svg>
                Bearing & Lubrication
            </h3>
            <div class="view-grid">
                <div class="view-field">
                    <label class="view-label">Bearing DE (Drive End)</label>
                    <div class="view-value ${motor.bearingDE ? '' : 'empty'}">
                        ${motor.bearingDE || 'Not specified'}
                    </div>
                </div>
                <div class="view-field">
                    <label class="view-label">Bearing NDE (Non-Drive End)</label>
                    <div class="view-value ${motor.bearingNDE ? '' : 'empty'}">
                        ${motor.bearingNDE || 'Not specified'}
                    </div>
                </div>
                <div class="view-field">
                    <label class="view-label">Lubrication Type</label>
                    <div class="view-value">
                        <span class="view-badge view-badge-blue">${motor.greaseOil}</span>
                    </div>
                </div>
                <div class="view-field">
                    <label class="view-label">Type of ${motor.greaseOil}</label>
                    <div class="view-value ${motor.lubricationType ? '' : 'empty'}">
                        ${motor.lubricationType || 'Not specified'}
                    </div>
                </div>
                <div class="view-field">
                    <label class="view-label">Greasing Duration</label>
                    <div class="view-value ${motor.greasingDuration ? '' : 'empty'}">
                        ${motor.greasingDuration ? motor.greasingDuration + ' hours' : 'Not specified'}
                    </div>
                </div>
            </div>
        </div>

        <div class="view-section">
            <h3 class="view-section-title">
                <svg class="view-section-icon" viewBox="0 0 24 24">
                    <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
                </svg>
                Motor Photo
            </h3>
            <div class="view-photo-placeholder">
                <svg viewBox="0 0 24 24">
                    <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
                </svg>
                <span>No photo uploaded</span>
                <small style="color: var(--gray-500); font-size: var(--font-size-xs);">Motor nameplate or installation photo</small>
            </div>
        </div>
    `;
    
    document.getElementById('viewMotorContent').innerHTML = content;
    document.getElementById('viewMotorModal').classList.add('active');
}

function closeViewMotorModal() {
    document.getElementById('viewMotorModal').classList.remove('active');
}

function editFromView() {
    const motorId = window.currentViewMotorId;
    closeViewMotorModal();
    setTimeout(() => {
        openMotorModal('edit', motorId);
    }, 300);
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

// Motor Database Functions
let motorDatabase = [];
let filteredDatabase = [];
let currentSpecification = null;

function buildMotorDatabase() {
    // Group motors by specification
    const specMap = new Map();
    
    motors.forEach(motor => {
        const key = `${motor.power}|${motor.voltage}|${motor.speed}|${motor.frameSize}|${motor.zone}`;
        
        if (!specMap.has(key)) {
            specMap.set(key, {
                power: motor.power,
                voltage: motor.voltage,
                speed: motor.speed,
                frameSize: motor.frameSize,
                zone: motor.zone,
                current: motor.current,
                atexRating: motor.atexRating,
                motors: []
            });
        }
        
        specMap.get(key).motors.push(motor);
    });
    
    // Convert to array and sort by count
    motorDatabase = Array.from(specMap.values()).sort((a, b) => b.motors.length - a.motors.length);
    filteredDatabase = [...motorDatabase];
    
    renderMotorDatabase(filteredDatabase);
    updateDatabaseStats();
}

function renderMotorDatabase(database) {
    const tbody = document.getElementById('databaseTableBody');
    if (!tbody) return;
    
    tbody.innerHTML = '';
    
    if (database.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="9" style="text-align: center; padding: 2rem; color: var(--gray-500);">
                    No specifications found matching the selected criteria
                </td>
            </tr>
        `;
        document.getElementById('dbResultCount').textContent = '0';
        return;
    }
    
    database.forEach((spec, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><span class="badge badge-info">${spec.frameSize}</span></td>
            <td><strong>${spec.power}</strong></td>
            <td>${spec.voltage}</td>
            <td>${spec.speed}</td>
            <td>${spec.current}</td>
            <td>
                <span class="tier-badge ${spec.zone === 'Zone 1' ? 'tier-critical' : spec.zone === 'Zone 2' ? 'tier-high' : 'tier-medium'}">
                    ${spec.zone}
                </span>
            </td>
            <td>${spec.atexRating || 'N/A'}</td>
            <td><span class="count-badge">${spec.motors.length}</span></td>
            <td>
                <button class="btn btn-sm btn-primary" onclick="viewMotorsInSpec(${index})">
                    <svg class="btn-icon" viewBox="0 0 24 24">
                        <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
                    </svg>
                    View Motors
                </button>
            </td>
        `;
        tbody.appendChild(row);
    });
    
    document.getElementById('dbResultCount').textContent = database.length;
}

function applyDatabaseFilters() {
    const powerFilter = document.getElementById('dbFilterPower').value;
    const voltageFilter = document.getElementById('dbFilterVoltage').value;
    const speedFilter = document.getElementById('dbFilterSpeed').value;
    const frameFilter = document.getElementById('dbFilterFrame').value;
    const zoneFilter = document.getElementById('dbFilterZone').value;
    
    filteredDatabase = motorDatabase.filter(spec => {
        if (powerFilter && spec.power.toString() !== powerFilter) return false;
        if (voltageFilter && spec.voltage !== voltageFilter) return false;
        if (speedFilter && spec.speed.toString() !== speedFilter) return false;
        if (frameFilter && spec.frameSize !== frameFilter) return false;
        if (zoneFilter && spec.zone !== zoneFilter) return false;
        return true;
    });
    
    renderMotorDatabase(filteredDatabase);
    updateDatabaseStats();
}

function clearDatabaseFilters() {
    document.getElementById('dbFilterPower').value = '';
    document.getElementById('dbFilterVoltage').value = '';
    document.getElementById('dbFilterSpeed').value = '';
    document.getElementById('dbFilterFrame').value = '';
    document.getElementById('dbFilterZone').value = '';
    
    filteredDatabase = [...motorDatabase];
    renderMotorDatabase(filteredDatabase);
    updateDatabaseStats();
}

function updateDatabaseStats() {
    document.getElementById('uniqueSpecsCount').textContent = filteredDatabase.length;
    
    const totalMotors = filteredDatabase.reduce((sum, spec) => sum + spec.motors.length, 0);
    document.getElementById('totalMotorsInDb').textContent = totalMotors;
}

function viewMotorsInSpec(index) {
    const spec = filteredDatabase[index];
    currentSpecification = spec;
    
    // Update modal title
    document.getElementById('motorsListTitle').textContent = 'Motors with Matching Specification';
    document.getElementById('motorsListSubtitle').textContent = `${spec.motors.length} motor(s) found`;
    
    // Build specification summary
    const specSummary = document.getElementById('specSummary');
    specSummary.innerHTML = `
        <div class="spec-summary-title">Specification Details</div>
        <div class="spec-summary-grid">
            <div class="spec-summary-item">
                <div class="spec-summary-label">Type & Frame</div>
                <div class="spec-summary-value">${spec.frameSize}</div>
            </div>
            <div class="spec-summary-item">
                <div class="spec-summary-label">Power</div>
                <div class="spec-summary-value">${spec.power} kW</div>
            </div>
            <div class="spec-summary-item">
                <div class="spec-summary-label">Voltage</div>
                <div class="spec-summary-value">${spec.voltage}</div>
            </div>
            <div class="spec-summary-item">
                <div class="spec-summary-label">Speed</div>
                <div class="spec-summary-value">${spec.speed} rpm</div>
            </div>
            <div class="spec-summary-item">
                <div class="spec-summary-label">Current</div>
                <div class="spec-summary-value">${spec.current} A</div>
            </div>
            <div class="spec-summary-item">
                <div class="spec-summary-label">Zone/Category</div>
                <div class="spec-summary-value">${spec.zone}</div>
            </div>
            <div class="spec-summary-item">
                <div class="spec-summary-label">ATEX Rating</div>
                <div class="spec-summary-value">${spec.atexRating || 'N/A'}</div>
            </div>
        </div>
    `;
    
    // Render motors table
    renderMotorsList(spec.motors);
    
    // Show modal
    document.getElementById('motorsListModal').classList.add('active');
}

function renderMotorsList(motorsList) {
    const tbody = document.getElementById('motorsListTableBody');
    tbody.innerHTML = '';
    
    document.getElementById('motorsListCount').textContent = motorsList.length;
    
    motorsList.forEach(motor => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><strong>${motor.equipmentNo}</strong></td>
            <td>${motor.tagNumber}</td>
            <td>${motor.department}</td>
            <td>${motor.plant}</td>
            <td>${motor.manufacturer}</td>
            <td>${motor.serialNumber || 'N/A'}</td>
            <td>
                <span class="status-badge ${getStatusClass(motor.status)}">
                    ${motor.status}
                </span>
            </td>
            <td>
                <button class="btn btn-ghost btn-sm" onclick="viewMotorFromList(${motor.id})" title="View Details">
                    <svg class="btn-icon" viewBox="0 0 24 24">
                        <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
                    </svg>
                </button>
                <button class="btn btn-ghost btn-sm" onclick="editMotorFromList(${motor.id})" title="Edit">
                    <svg class="btn-icon" viewBox="0 0 24 24">
                        <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
                    </svg>
                </button>
            </td>
        `;
        tbody.appendChild(row);
    });
}

function viewMotorFromList(motorId) {
    closeMotorsListModal();
    setTimeout(() => {
        viewMotor(motorId);
    }, 300);
}

function editMotorFromList(motorId) {
    closeMotorsListModal();
    setTimeout(() => {
        openMotorModal('edit', motorId);
    }, 300);
}

function closeMotorsListModal() {
    document.getElementById('motorsListModal').classList.remove('active');
}

function exportMotorsList() {
    if (!currentSpecification) return;
    
    const headers = ['Equipment No', 'Tag Number', 'Department', 'Plant', 'Manufacturer', 'Serial Number', 'Status'];
    const csvContent = [
        headers.join(','),
        ...currentSpecification.motors.map(motor => [
            motor.equipmentNo,
            motor.tagNumber,
            motor.department,
            motor.plant,
            motor.manufacturer,
            motor.serialNumber || 'N/A',
            motor.status
        ].join(','))
    ].join('\n');
    
    const filename = `motors_${currentSpecification.frameSize}_${currentSpecification.power}kW.csv`;
    downloadCSV(csvContent, filename);
    showNotification('Exporting motors list...', 'success');
}

// Close modal when clicking outside
window.addEventListener('click', function(event) {
    const motorModal = document.getElementById('motorModal');
    const viewMotorModal = document.getElementById('viewMotorModal');
    const motorsListModal = document.getElementById('motorsListModal');
    
    if (event.target === motorModal) {
        closeMotorModal();
    }
    
    if (event.target === viewMotorModal) {
        closeViewMotorModal();
    }
    
    if (event.target === motorsListModal) {
        closeMotorsListModal();
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