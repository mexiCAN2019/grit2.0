import React from 'react';

function CheckboxSummary({ skill }) {
    const {skillName, mondayTotal, tuesdayTotal, wednesdayTotal, thursdayTotal, fridayTotal, saturdayTotal, sundayTotal} = skill;

    const addTotal = () => {
        console.log(typeof mondayTotal)
        const total = parseInt(mondayTotal) + parseInt(tuesdayTotal) + parseInt(wednesdayTotal) + parseInt(thursdayTotal) + parseInt(fridayTotal) + parseInt(saturdayTotal) + parseInt(sundayTotal);
        return total
    }

    return (
        <div style={{display:'flex', justifyContent:'center'}}>
            <div>
                <h3><u>{skillName}</u></h3>
                <h4 style={{display: 'flex', justifyContent: 'center'}}>Total: {addTotal()}</h4>
            </div>
        </div>
    )
}

export default CheckboxSummary;