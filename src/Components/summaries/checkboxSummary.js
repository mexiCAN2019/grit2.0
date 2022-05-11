import React from 'react';

function MonthCheckboxSummary({ skill }) {
    const {skillName, mondayTotal, tuesdayTotal, wednesdayTotal, thursdayTotal, fridayTotal, saturdayTotal, sundayTotal} = skill;

    const addTotal = () => {
        console.log(typeof mondayTotal)
        const total = parseInt(mondayTotal) + parseInt(tuesdayTotal) + parseInt(wednesdayTotal) + parseInt(thursdayTotal) + parseInt(fridayTotal) + parseInt(saturdayTotal) + parseInt(sundayTotal);
        return total
    }

    return (
        <div>
            <h3>{skillName}</h3>
            <h4>Total: {addTotal()}</h4>
        </div>
    )
}

export default MonthCheckboxSummary;