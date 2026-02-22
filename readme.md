# MIMS Update - Real Department & Plant Data

## Version 1.2.1 - Department & Plant Database Update

### What's New? 🎉

The MIMS application has been updated with your actual department and plant structure based on the uploaded Excel file. The system now reflects your real organizational structure with 6 departments and 31 plants.

## Updated Department & Plant Structure

### Departments (6)
1. **Olefin-1/2** - 4 plants
2. **Olefin-3/4** - 3 plants
3. **PolyOlefin-1/2** - 5 plants
4. **PolyOlefin-3** - 7 plants
5. **PolyOlefin-4** - 5 plants
6. **Utility&Offsite** - 7 plants

### Plants by Department (31 Total)

#### Olefin-1/2 (4 plants)
- EU1
- EU2
- OCU
- BT

#### Olefin-3/4 (3 plants)
- EU3
- EU4
- BT3

#### PolyOlefin-1/2 (5 plants)
- PE1
- PE2
- PE3
- PP1
- PP2

#### PolyOlefin-3 (7 plants)
- PE4
- PE5
- PP3
- PP4
- PP5
- PPC
- PEC

#### PolyOlefin-4 (5 plants)
- PE6
- PE7
- LDPE
- XL1
- XL2

#### Utility&Offsite (7 plants)
- UO1
- UO2
- UO3
- UO4
- MH1
- MH2
- MH3

## What Changed?

### 1. **Sample Data Generation**
All 5,000 sample motors are now distributed across:
- 6 real departments (instead of generic "Production", "Utilities", etc.)
- 31 real plants (instead of generic "Plant A", "Plant B", etc.)
- Motors are properly assigned to plants within their department

### 2. **Motor Registry Filters**
Updated dropdown options:
- **Department filter**: Now shows 6 actual departments
- **Plant filter**: Now shows all 31 plants

### 3. **Motor Form**
When adding/editing motors:
- **Department dropdown**: 6 real departments
- **Plant dropdown**: All 31 plants
- Note: Currently shows all plants regardless of department (can be enhanced to filter plants by selected department)

### 4. **Tag Number Generation**
Motor tag numbers now use real department abbreviations:
- Olefin-1/2 → OLE-M-0001
- PolyOlefin-3 → POL-M-0001
- Utility&Offsite → UTI-M-0001

## Files Updated

### 1. script.js
**Updated:**
```javascript
// Old departments
const departments = ['Production', 'Utilities', 'Maintenance', 'Warehouse'];
const plants = ['Plant A', 'Plant B', 'Plant C', 'Plant D'];

// New departments and plants
const departments = ['Olefin-1/2', 'Olefin-3/4', 'PolyOlefin-1/2', 'PolyOlefin-3', 'PolyOlefin-4', 'Utility&Offsite'];
const plantsByDepartment = {
    'Olefin-1/2': ['EU1', 'EU2', 'OCU', 'BT'],
    'Olefin-3/4': ['EU3', 'EU4', 'BT3'],
    'PolyOlefin-1/2': ['PE1', 'PE2', 'PE3', 'PP1', 'PP2'],
    'PolyOlefin-3': ['PE4', 'PE5', 'PP3', 'PP4', 'PP5', 'PPC', 'PEC'],
    'PolyOlefin-4': ['PE6', 'PE7', 'LDPE', 'XL1', 'XL2'],
    'Utility&Offsite': ['UO1', 'UO2', 'UO3', 'UO4', 'MH1', 'MH2', 'MH3']
};
```

**Data Generation Logic:**
- Motors are assigned to a department
- Plants are selected only from that department's plant list
- Ensures realistic department-plant relationships

### 2. index.html (and mims-app.html)
**Updated all dropdown options:**
- Motor Registry filter dropdowns
- Motor form dropdowns
- All 6 departments listed
- All 31 plants listed

## Data Distribution

With 5,000 motors distributed across 6 departments:
- **Olefin-1/2**: ~833 motors across 4 plants
- **Olefin-3/4**: ~833 motors across 3 plants
- **PolyOlefin-1/2**: ~833 motors across 5 plants
- **PolyOlefin-3**: ~833 motors across 7 plants
- **PolyOlefin-4**: ~833 motors across 5 plants
- **Utility&Offsite**: ~833 motors across 7 plants

Distribution is random but realistic based on your actual structure.

## Usage Examples

### Example 1: Filter Motors by Department
1. Go to Motor Registry
2. Select "PolyOlefin-3" from Department filter
3. See all motors in that department
4. Further filter by specific plant (PE4, PE5, PP3, etc.)

### Example 2: View Department Distribution
1. Use filters to select each department
2. Check motor count for each
3. Identify which departments have most motors
4. Plan maintenance accordingly

### Example 3: Plant-Specific Reports
1. Filter by specific plant (e.g., "EU1")
2. See all motors in that plant
3. Export to Excel for plant-specific maintenance planning

## Motor Database Implications

The Motor Database / Interchangeable module now shows:
- Motors grouped by specification (Power, Voltage, Speed, Frame, Zone)
- When viewing motors in a specification, you'll see:
  - Which departments use this motor type
  - Which plants have these motors
  - Distribution across your actual facility structure

This helps identify:
- **Standardization opportunities**: Which specs are used across multiple departments?
- **Spare parts strategy**: Stock parts for motors used in critical plants
- **Maintenance planning**: Schedule work based on plant locations

## Future Enhancement Options

### 1. **Smart Plant Filtering**
Update the form so plant dropdown shows only plants for selected department:
```javascript
// When department changes, update plant options
document.querySelector('[name="department"]').addEventListener('change', function() {
    const dept = this.value;
    const plantDropdown = document.querySelector('[name="plant"]');
    const plants = plantsByDepartment[dept] || [];
    
    // Update plant options
    plantDropdown.innerHTML = '<option value="">Select Plant</option>' + 
        plants.map(p => `<option value="${p}">${p}</option>`).join('');
});
```

### 2. **Department Dashboard**
Add a dashboard showing:
- Motor count per department
- Motor count per plant
- Department-level statistics
- Plant capacity metrics

### 3. **Plant Hierarchy View**
Create a visual tree showing:
```
Olefin-1/2
├── EU1 (208 motors)
├── EU2 (201 motors)
├── OCU (215 motors)
└── BT (209 motors)
```

### 4. **Cross-Department Analysis**
Compare motor specifications across departments:
- Which departments share similar motor types?
- Opportunities for bulk purchasing
- Standardization initiatives

## Deployment Instructions

### Update Your GitHub Repository

1. **Download Updated Files:**
   - index.html (or mims-app.html)
   - script.js

2. **Upload to GitHub:**
   ```bash
   git add index.html script.js
   git commit -m "Updated departments and plants with real organizational structure"
   git push origin main
   ```

3. **Wait 2-3 minutes** for GitHub Pages to rebuild

4. **Test at:** https://pratchton.github.io/mims/

## Testing Checklist

After deployment, verify:

- [ ] Motor Registry shows new department names
- [ ] All 6 departments appear in Department filter
- [ ] All 31 plants appear in Plant filter
- [ ] Department filter works correctly
- [ ] Plant filter works correctly
- [ ] Add Motor form shows correct departments
- [ ] Add Motor form shows correct plants
- [ ] Sample motors display correct dept/plant combinations
- [ ] Tag numbers show correct department abbreviations
- [ ] Motor Database still groups correctly
- [ ] View Motors modal shows correct dept/plant data
- [ ] Export functions work with new names

## Data Verification

To verify realistic data distribution:

1. **Check Department Coverage**
   - Filter by each department
   - Verify motors exist in each
   - Check counts are reasonable

2. **Check Plant Assignments**
   - Filter by department and plant
   - Verify plants belong to correct department
   - No orphaned combinations

3. **Check Motor Database**
   - View motors in any specification
   - Verify departments and plants are realistic
   - No "Plant A" or generic names remain

## Sample Motor Data After Update

**Example Motor:**
```
Equipment No: EQ-001234
Tag Number: POL-M-1234
Department: PolyOlefin-3
Plant: PE4
Power: 11 kW
Status: Active
```

**Before Update:**
```
Equipment No: EQ-001234
Tag Number: PRO-M-1234
Department: Production
Plant: Plant A
Power: 11 kW
Status: Active
```

## Benefits

✅ **Real Organization Structure** - Matches your actual facility
✅ **Accurate Planning** - Reports reflect real departments and plants
✅ **Better Communication** - Everyone uses same terminology
✅ **Easier Training** - New users see familiar names
✅ **Scalable** - Easy to add new plants as facility expands
✅ **Professional** - Shows attention to detail in POC

## Notes

- Current implementation randomly distributes motors across plants
- For production system, motors should be assigned based on actual locations
- Plant dropdown shows all plants (not filtered by department)
- Can be enhanced to filter plants dynamically based on department selection

## Support

If you need to:
- Add new departments or plants
- Change department/plant names
- Adjust motor distribution
- Implement smart plant filtering

The data structure is clearly defined in `script.js` and can be easily modified.

---

**Version:** 1.2.1  
**Date:** February 2026  
**Update:** Real Department & Plant Structure  
**Source:** Department_Plant.xlsx  
**Status:** Production Ready

Your MIMS application now reflects your actual organizational structure! 🎉
