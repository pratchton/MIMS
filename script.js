// Real Motor Database from CSV
const realMotorData = [
    {"equipmentNo":"11010097000","tagNumber":"76PM001A","description":"ACCIDENTALLY OILY WASTE PUMP DRIVER","department":"PolyOlefin-3","plant":"PP5","power":22,"voltage":"415V","speed":2959,"current":36.7,"frequency":50,"frameSize":"180MLA","serialNumber":"3G1F1931609134","manufacturer":"ABB","zone":"Zone 1","atexRating":"Ex-de IIB, T3, IP55","tempClass":"T3","vsdDol":"DOL","bearingDE":"63102ZC3","bearingNDE":"63102ZC3","greaseOil":"Grease","lubricationType":"Non greasable","greasingDuration":"N/A"},
    {"equipmentNo":"11010097001","tagNumber":"76PM001B","description":"ACCIDENTALLY OILY WASTE PUMP DRIVER","department":"PolyOlefin-3","plant":"PP5","power":22,"voltage":"415V","speed":2959,"current":36.7,"frequency":50,"frameSize":"180MLA","serialNumber":"3G1F1931609135","manufacturer":"ABB","zone":"Zone 1","atexRating":"Ex-de IIB, T3, IP55","tempClass":"T3","vsdDol":"DOL","bearingDE":"63102ZC3","bearingNDE":"63102ZC3","greaseOil":"Grease","lubricationType":"Non greasable","greasingDuration":"N/A"},
    {"equipmentNo":"11010097002","tagNumber":"76PM002A","description":"FLARE DRAIN PUMP DRIVER","department":"PolyOlefin-3","plant":"PP5","power":15,"voltage":"415V","speed":2960,"current":26.2,"frequency":50,"frameSize":"160","serialNumber":"3GZF500730-47","manufacturer":"ABB","zone":"Zone 1","atexRating":"Ex-de IIB, T3, IP55","tempClass":"T3","vsdDol":"DOL","bearingDE":"63092ZC3","bearingNDE":"63092ZC3","greaseOil":"Grease","lubricationType":"Non greasable","greasingDuration":"N/A"},
    {"equipmentNo":"11010097003","tagNumber":"76PM002B","description":"FLARE DRAIN PUMP DRIVER","department":"PolyOlefin-3","plant":"PP5","power":15,"voltage":"415V","speed":2960,"current":26.2,"frequency":50,"frameSize":"160","serialNumber":"3G1F1931609338","manufacturer":"ABB","zone":"Zone 1","atexRating":"Ex-de IIB, T3, IP55","tempClass":"T3","vsdDol":"DOL","bearingDE":"63092ZC3","bearingNDE":"63092ZC3","greaseOil":"Grease","lubricationType":"Non greasable","greasingDuration":"N/A"},
    {"equipmentNo":"11010097004","tagNumber":"76PM008A","description":"CONDENSATE PUMP DRIVER","department":"PolyOlefin-3","plant":"PP5","power":30,"voltage":"415V","speed":2940,"current":50,"frequency":50,"frameSize":"WUDF225MN","serialNumber":"RI 711818","manufacturer":"BROOK CROMPTON","zone":"Zone 2","atexRating":"Ex-nA II, T3, IP55","tempClass":"T3","vsdDol":"DOL","bearingDE":"6314C3","bearingNDE":"6314C3","greaseOil":"Grease","lubricationType":"SHELL GADUS S2V","greasingDuration":"2600"},
    {"equipmentNo":"11010097005","tagNumber":"76PM008B","description":"CONDENSATE PUMP DRIVER","department":"PolyOlefin-3","plant":"PP5","power":30,"voltage":"415V","speed":2940,"current":50,"frequency":50,"frameSize":"WUDF225MN","serialNumber":"RI 711819","manufacturer":"BROOK CROMPTON","zone":"Zone 2","atexRating":"Ex-nA II, T3, IP55","tempClass":"T3","vsdDol":"DOL","bearingDE":"6314C3","bearingNDE":"6314C3","greaseOil":"Grease","lubricationType":"SHELL GADUS S2V","greasingDuration":"2600"},
    {"equipmentNo":"11010097006","tagNumber":"76XK001KM001","description":"PURGE GAS BLOWER DRIVER","department":"PolyOlefin-3","plant":"PP5","power":180,"voltage":"3300V","speed":1482,"current":38.7,"frequency":50,"frameSize":"400","serialNumber":"10411217","manufacturer":"NIDEC ASI S.P.A","zone":"Safe Area","atexRating":"IP55","tempClass":"","vsdDol":"DOL","bearingDE":"NU221MC3+6221MC3","bearingNDE":"NU221MC3","greaseOil":"Grease","lubricationType":"Kluber Asonic","greasingDuration":"400"},
    {"equipmentNo":"11010097007","tagNumber":"76XK001KM002A","description":"NOISE HOOD FAN DRIVER","department":"PolyOlefin-3","plant":"PP5","power":3,"voltage":"415V","speed":1455,"current":6,"frequency":50,"frameSize":"112MU","serialNumber":"20191083","manufacturer":"NIDEC ASI S.P.A","zone":"Zone 2","atexRating":"Ex-tD A22 IP55","tempClass":"","vsdDol":"DOL","bearingDE":"6206ZZC3","bearingNDE":"6206ZZC3","greaseOil":"Grease","lubricationType":"Shell Alvania RL3","greasingDuration":"N/A"},
    {"equipmentNo":"11010097008","tagNumber":"76XK001KM002B","description":"NOISE HOOD FAN DRIVER","department":"PolyOlefin-3","plant":"PP5","power":3,"voltage":"415V","speed":1455,"current":6,"frequency":50,"frameSize":"112MU","serialNumber":"20191084","manufacturer":"NIDEC ASI S.P.A","zone":"Zone 2","atexRating":"Ex-tD A22 IP55","tempClass":"","vsdDol":"DOL","bearingDE":"6206ZZC3","bearingNDE":"6206ZZC3","greaseOil":"Grease","lubricationType":"Shell Alvania RL3","greasingDuration":"N/A"},
    {"equipmentNo":"11010097009","tagNumber":"76PM010A","description":"PP-5 OPERATOR SHELTER SANITARY WASTE WATER LIFTING PUMP DRIVER","department":"PolyOlefin-3","plant":"PP5","power":11,"voltage":"415V","speed":2925,"current":19.8,"frequency":50,"frameSize":"160","serialNumber":"N/A","manufacturer":"EMOD","zone":"Safe Area","atexRating":"IP55","tempClass":"","vsdDol":"DOL","bearingDE":"","bearingNDE":"","greaseOil":"Grease","lubricationType":"Non greasable","greasingDuration":"N/A"},
    {"equipmentNo":"11010097010","tagNumber":"76PM010B","description":"PP-5 OPERATOR SHELTER SANITARY WASTE WATER LIFTING PUMP DRIVER","department":"PolyOlefin-3","plant":"PP5","power":11,"voltage":"415V","speed":2925,"current":19.8,"frequency":50,"frameSize":"160","serialNumber":"N/A","manufacturer":"EMOD","zone":"Zone 2","atexRating":"Ex db eb IIB T3, IP55","tempClass":"T3","vsdDol":"DOL","bearingDE":"","bearingNDE":"","greaseOil":"Grease","lubricationType":"Non greasable","greasingDuration":"N/A"},
    {"equipmentNo":"11010097011","tagNumber":"76XP101APM101A","description":"LOOP REACTOR FEED PUMP DRIVER","department":"PolyOlefin-3","plant":"PP5","power":560,"voltage":"3300V","speed":2983,"current":111.9,"frequency":50,"frameSize":"450","serialNumber":"20183761RMHC39001","manufacturer":"HYUNDAI","zone":"Zone 2","atexRating":"Ex-nA IIC, T3, Gc, IP55","tempClass":"T3","vsdDol":"DOL","bearingDE":"HF980","bearingNDE":"HF980","greaseOil":"Oil","lubricationType":"VISCOSITY ISO VG 32","greasingDuration":"N/A"},
    {"equipmentNo":"11010097012","tagNumber":"76XP101BPM101B","description":"LOOP REACTOR FEED PUMP DRIVER","department":"PolyOlefin-3","plant":"PP5","power":560,"voltage":"3300V","speed":2983,"current":111.9,"frequency":50,"frameSize":"450","serialNumber":"20183761RMHC39002","manufacturer":"HYUNDAI","zone":"Zone 2","atexRating":"Ex-nA IIC, T3, Gc, IP55","tempClass":"T3","vsdDol":"DOL","bearingDE":"HF980","bearingNDE":"HF980","greaseOil":"Oil","lubricationType":"VISCOSITY ISO VG 32","greasingDuration":"N/A"},
    {"equipmentNo":"11010097013","tagNumber":"76XK202KM202A","description":"PROPYLENE REFRIGERATION COMPRESSOR DRIVER","department":"PolyOlefin-3","plant":"PP5","power":1428,"voltage":"11000V","speed":2987,"current":85,"frequency":50,"frameSize":"500L2A","serialNumber":"4670010","manufacturer":"ABB","zone":"Safe Area","atexRating":"IP55","tempClass":"","vsdDol":"DOL","bearingDE":"EFNL31190FBM","bearingNDE":"EFNL31190EBM","greaseOil":"Oil","lubricationType":"ISO VG 32","greasingDuration":"4000"},
    {"equipmentNo":"11010097014","tagNumber":"76XK202KM202B","description":"PROPYLENE REFRIGERATION COMPRESSOR DRIVER","department":"PolyOlefin-3","plant":"PP5","power":1428,"voltage":"11000V","speed":2987,"current":85,"frequency":50,"frameSize":"500L2A","serialNumber":"4670046","manufacturer":"ABB","zone":"Safe Area","atexRating":"IP55","tempClass":"","vsdDol":"DOL","bearingDE":"EFNL31190FBM","bearingNDE":"EFNL31190EBM","greaseOil":"Oil","lubricationType":"ISO VG 32","greasingDuration":"4000"},
    {"equipmentNo":"11010097015","tagNumber":"76XK202KM203A","description":"ACOUSTIC HOOD FAN FOR PROPYLENE COMPRESSOR","department":"PolyOlefin-3","plant":"PP5","power":0.18,"voltage":"415V","speed":2895,"current":0.75,"frequency":50,"frameSize":"63A2","serialNumber":"1917357347","manufacturer":"CEMP","zone":"Safe Area","atexRating":"IP55","tempClass":"","vsdDol":"DOL","bearingDE":"6202ZZ","bearingNDE":"6202ZZ","greaseOil":"Grease","lubricationType":"Non greasable","greasingDuration":"N/A"},
    {"equipmentNo":"11010097016","tagNumber":"76XK202KM203B","description":"ACOUSTIC HOOD FAN FOR PROPYLENE COMPRESSOR","department":"PolyOlefin-3","plant":"PP5","power":0.18,"voltage":"415V","speed":2895,"current":0.75,"frequency":50,"frameSize":"63A2","serialNumber":"1917357348","manufacturer":"CEMP","zone":"Safe Area","atexRating":"IP55","tempClass":"","vsdDol":"DOL","bearingDE":"6202ZZ","bearingNDE":"6202ZZ","greaseOil":"Grease","lubricationType":"Non greasable","greasingDuration":"N/A"},
    {"equipmentNo":"11010097017","tagNumber":"76XK202KM204A","description":"ACOUSTIC HOOD FAN FOR PROPYLENE COMPRESSOR","department":"PolyOlefin-3","plant":"PP5","power":0.18,"voltage":"415V","speed":2895,"current":0.75,"frequency":50,"frameSize":"63A2","serialNumber":"1917359754","manufacturer":"CEMP","zone":"Zone 2","atexRating":"Ex-tD A22 IP55","tempClass":"","vsdDol":"DOL","bearingDE":"6202ZZ","bearingNDE":"6202ZZ","greaseOil":"Grease","lubricationType":"Non greasable","greasingDuration":"N/A"},
    {"equipmentNo":"11010097018","tagNumber":"76XK202KM204B","description":"ACOUSTIC HOOD FAN FOR PROPYLENE COMPRESSOR","department":"PolyOlefin-3","plant":"PP5","power":0.18,"voltage":"415V","speed":2895,"current":0.75,"frequency":50,"frameSize":"63A2","serialNumber":"1917359753","manufacturer":"CEMP","zone":"Safe Area","atexRating":"IP55","tempClass":"","vsdDol":"DOL","bearingDE":"6202ZZ","bearingNDE":"6202ZZ","greaseOil":"Grease","lubricationType":"Non greasable","greasingDuration":"N/A"},
    {"equipmentNo":"11010097019","tagNumber":"76PM206","description":"GLYCOL LOADING PUMP DRIVER","department":"PolyOlefin-3","plant":"PP5","power":1.1,"voltage":"415V","speed":1437,"current":2.87,"frequency":50,"frameSize":"90SLA","serialNumber":"3G1F1940620467","manufacturer":"ABB","zone":"Zone 2","atexRating":"Ex-nA II, T3, IP55","tempClass":"T3","vsdDol":"DOL","bearingDE":"62052ZC3","bearingNDE":"62052ZC3","greaseOil":"Grease","lubricationType":"Non greasable","greasingDuration":"N/A"},
    {"equipmentNo":"11010097020","tagNumber":"76PM205A","description":"GLYCOL WATER PUMP DRIVER","department":"PolyOlefin-3","plant":"PP5","power":55,"voltage":"415V","speed":1480,"current":93,"frequency":50,"frameSize":"WU-DF280MNE","serialNumber":"RI 711794","manufacturer":"BROOK CROMPTON","zone":"Safe Area","atexRating":"IP55","tempClass":"","vsdDol":"DOL","bearingDE":"6318C3","bearingNDE":"6318C3","greaseOil":"Grease","lubricationType":"Shellgadus s2v 100.3","greasingDuration":"5900"},
    {"equipmentNo":"11010097021","tagNumber":"76PM205B","description":"GLYCOL WATER PUMP DRIVER","department":"PolyOlefin-3","plant":"PP5","power":55,"voltage":"415V","speed":1480,"current":93,"frequency":50,"frameSize":"WU-DF280MNE","serialNumber":"RI 711795","manufacturer":"BROOK CROMPTON","zone":"Safe Area","atexRating":"IP55","tempClass":"","vsdDol":"DOL","bearingDE":"6318C3","bearingNDE":"6318C3","greaseOil":"Grease","lubricationType":"Shellgadus s2v 100.3","greasingDuration":"5900"},
    {"equipmentNo":"11010097022","tagNumber":"76XK202PM215A","description":"PRC PROCESS OIL CIRCULATION PUMP DRIVER","department":"PolyOlefin-3","plant":"PP5","power":11,"voltage":"415V","speed":1470,"current":20.4,"frequency":50,"frameSize":"160M/L","serialNumber":"1047379458","manufacturer":"WEG","zone":"Safe Area","atexRating":"IP55","tempClass":"","vsdDol":"DOL","bearingDE":"6309C3","bearingNDE":"6308C3","greaseOil":"Grease","lubricationType":"MOBIL POLYREX EM","greasingDuration":"13000"},
    {"equipmentNo":"11010097023","tagNumber":"76XK202PM215B","description":"PRC PROCESS OIL CIRCULATION PUMP DRIVER","department":"PolyOlefin-3","plant":"PP5","power":11,"voltage":"415V","speed":1470,"current":20.4,"frequency":50,"frameSize":"160M/L","serialNumber":"1047379459","manufacturer":"WEG","zone":"Safe Area","atexRating":"IP55","tempClass":"","vsdDol":"DOL","bearingDE":"6309C3","bearingNDE":"6308C3","greaseOil":"Grease","lubricationType":"MOBIL POLYREX EM","greasingDuration":"13000"},
    {"equipmentNo":"11010097024","tagNumber":"76XK202PM216A","description":"COMPRESSOR OIL CHARGE PUMP MOTOR","department":"PolyOlefin-3","plant":"PP5","power":4,"voltage":"415V","speed":1475,"current":7.98,"frequency":50,"frameSize":"132","serialNumber":"1047619766","manufacturer":"WEG","zone":"Safe Area","atexRating":"IP55","tempClass":"","vsdDol":"DOL","bearingDE":"6308ZZ","bearingNDE":"6207ZZ","greaseOil":"Grease","lubricationType":"Non greasable","greasingDuration":"N/A"},
    {"equipmentNo":"11010097025","tagNumber":"76XK202PM216B","description":"COMPRESSOR OIL CHARGE PUMP MOTOR","department":"PolyOlefin-3","plant":"PP5","power":4,"voltage":"415V","speed":1475,"current":7.98,"frequency":50,"frameSize":"132","serialNumber":"1047619765","manufacturer":"WEG","zone":"Zone 2","atexRating":"Ex-de IIB, T3, IP55","tempClass":"T3","vsdDol":"DOL","bearingDE":"6308ZZ","bearingNDE":"6207ZZ","greaseOil":"Grease","lubricationType":"Non greasable","greasingDuration":"N/A"},
    {"equipmentNo":"11010097026","tagNumber":"76XK202PM217A","description":"PRC PROCESS OIL CIRCULATION PUMP DRIVER","department":"PolyOlefin-3","plant":"PP5","power":11,"voltage":"415V","speed":1470,"current":20.4,"frequency":50,"frameSize":"160M/L","serialNumber":"1047329460","manufacturer":"WEG","zone":"Zone 2","atexRating":"Ex II3GD Ex nA IIC T3 Gc Ex tc IIIC T125°C Dc","tempClass":"T3","vsdDol":"DOL","bearingDE":"6309C3","bearingNDE":"6308C3","greaseOil":"Grease","lubricationType":"MOBIL POLYREX EM","greasingDuration":"13000"},
    {"equipmentNo":"11010097027","tagNumber":"76XK202PM217B","description":"PRC PROCESS OIL CIRCULATION PUMP DRIVER","department":"PolyOlefin-3","plant":"PP5","power":11,"voltage":"415V","speed":1470,"current":20.4,"frequency":50,"frameSize":"160M/L","serialNumber":"1047379461","manufacturer":"WEG","zone":"Zone 2","atexRating":"Ex II3GD Ex nA IIC T3 Gc Ex tc IIIC T125°C Dc","tempClass":"T3","vsdDol":"DOL","bearingDE":"6309C3","bearingNDE":"6308C3","greaseOil":"Grease","lubricationType":"MOBIL POLYREX EM","greasingDuration":"13000"},
    {"equipmentNo":"11010097028","tagNumber":"76XK272KM202A","description":"NOISE HOOD FAN DRIVER","department":"PolyOlefin-3","plant":"PP5","power":2.2,"voltage":"415V","speed":1435,"current":4.5,"frequency":50,"frameSize":"100L","serialNumber":"317370H11003","manufacturer":"RELOY SOMER","zone":"Zone 2","atexRating":"Ex pxb IIC T3 Gb, IP 55","tempClass":"T3","vsdDol":"DOL","bearingDE":"6206ZZC3","bearingNDE":"6205ZZC3","greaseOil":"Grease","lubricationType":"Non greasable","greasingDuration":"N/A"},
    {"equipmentNo":"11010097029","tagNumber":"76XK202KM202B","description":"NOISE HOOD FAN DRIVER","department":"PolyOlefin-3","plant":"PP5","power":2.2,"voltage":"415V","speed":1435,"current":4.5,"frequency":50,"frameSize":"100L","serialNumber":"317370H11004","manufacturer":"RELOY SOMER","zone":"Zone 2","atexRating":"Ex pxb IIC T3 Gb, IP 55","tempClass":"T3","vsdDol":"DOL","bearingDE":"6206ZZC3","bearingNDE":"6205ZZC3","greaseOil":"Grease","lubricationType":"Non greasable","greasingDuration":"N/A"}
];

// Status options: Running, Stand by, Under Maintenance, Isolate
const statusOptions = ['Running', 'Stand by', 'Under Maintenance', 'Isolate'];

// Departments and Plants (from previous update)
const departments = ['Olefin-1/2', 'Olefin-3/4', 'PolyOlefin-1/2', 'PolyOlefin-3', 'PolyOlefin-4', 'Utility&Offsite'];
const plantsByDepartment = {
    'Olefin-1/2': ['EU1', 'EU2', 'OCU', 'BT'],
    'Olefin-3/4': ['EU3', 'EU4', 'BT3'],
    'PolyOlefin-1/2': ['PE1', 'PE2', 'PE3', 'PP1', 'PP2'],
    'PolyOlefin-3': ['PE4', 'PE5', 'PP3', 'PP4', 'PP5', 'PPC', 'PEC'],
    'PolyOlefin-4': ['PE6', 'PE7', 'LDPE', 'XL1', 'XL2'],
    'Utility&Offsite': ['UO1', 'UO2', 'UO3', 'UO4', 'MH1', 'MH2', 'MH3']
};
const allPlants = ['EU1', 'EU2', 'OCU', 'BT', 'EU3', 'EU4', 'BT3', 'PE1', 'PE2', 'PE3', 'PP1', 'PP2', 'PE4', 'PE5', 'PP3', 'PP4', 'PP5', 'PPC', 'PEC', 'PE6', 'PE7', 'LDPE', 'XL1', 'XL2', 'UO1', 'UO2', 'UO3', 'UO4', 'MH1', 'MH2', 'MH3'];

// Build motors array from real data
let motors = realMotorData.map((motor, index) => {
    // Assign random status with more running motors
    const rand = Math.random();
    let status;
    if (rand < 0.70) status = 'Running';  // 70% running
    else if (rand < 0.85) status = 'Stand by';  // 15% standby
    else if (rand < 0.95) status = 'Under Maintenance';  // 10% maintenance
    else status = 'Isolate';  // 5% isolated
    
    return {
        id: index + 1,
        equipmentNo: motor.equipmentNo,
        tagNumber: motor.tagNumber,
        description: motor.description,
        department: motor.department,
        plant: motor.plant,
        power: parseFloat(motor.power),
        voltage: motor.voltage,
        speed: parseInt(motor.speed),
        current: parseFloat(motor.current),
        frequency: motor.frequency,
        frameSize: motor.frameSize,
        serialNumber: motor.serialNumber,
        manufacturer: motor.manufacturer,
        zone: motor.zone,
        atexRating: motor.atexRating,
        tempClass: motor.tempClass,
        vsdDol: motor.vsdDol,
        bearingDE: motor.bearingDE,
        bearingNDE: motor.bearingNDE,
        greaseOil: motor.greaseOil,
        lubricationType: motor.lubricationType,
        greasingDuration: motor.greasingDuration,
        status: status
    };
});

// Current filters
let currentFilters = {
    department: '',
    plant: '',
    search: ''
};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initNavigation();
    updateStatistics();
    renderMotorTable(motors.slice(0, 50)); // Show first 50 motors
    updateMotorCount(motors.length);
    buildMotorDatabase(); // Build database specifications
});

// Update statistics based on motor status
function updateStatistics() {
    const total = motors.length;
    const running = motors.filter(m => m.status === 'Running').length;
    const standby = motors.filter(m => m.status === 'Stand by').length;
    const maintenance = motors.filter(m => m.status === 'Under Maintenance').length;
    const isolate = motors.filter(m => m.status === 'Isolate').length;
    
    document.getElementById('totalMotors').textContent = total;
    document.getElementById('runningMotors').textContent = running;
    document.getElementById('standbyMotors').textContent = standby;
    document.getElementById('maintenanceMotors').textContent = maintenance;
}

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
        case 'Running': return 'status-active';
        case 'Stand by': return 'status-standby';
        case 'Under Maintenance': return 'status-maintenance';
        case 'Isolate': return 'status-critical';
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
