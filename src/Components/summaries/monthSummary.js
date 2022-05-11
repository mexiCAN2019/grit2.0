import React, { useState, useEffect } from 'react';
import Express from './../../fetchExpress';
import MonthTableSummary from './tableSummary';
import MonthCheckboxSummary from './checkboxSummary';

function MonthSummary({ match:{params: { monthAndMonthID, year }}}) {
    const [monthID, setMonthID] = useState(monthAndMonthID.replace(/^\D+/g, ''));
    const [tableSkills, setTableSkills] = useState([]);
    const [checkboxSkills, setCheckboxSkilss] = useState([]);
    const [subjective, setSubjective] = useState({});
    const [text, setText] = useState('');

    useEffect(() => {
        Express.getTableSkills(year, monthID).then(tables => setTableSkills(tables));
        Express.getCheckboxSkills(year, monthID).then(checkboxes => setCheckboxSkilss(checkboxes));
        Express.getMonthReviewTextbox(year, monthID).then(textbox => setSubjective(textbox));
    }, []);

    const handleSave = () => {
        const newTextbox = {
            year: year,
            text: text,
            monthID: monthID
        };

        Express.createMonthReviewTextbox(year, newTextbox).then(textBox => Express.getMonthReviewTextbox(year, monthID).then(textbox => setSubjective(textbox)));
    };

    const renderSaveOrUpdateButtonTextarea = () => {
        if(!subjective){
            return <div>
                    <textarea placeholder="Add comments" onChange={(e) => setText(e.target.value)} value={text} />
                    <br></br>
                    <button onClick={handleSave}>Save</button>
                </div>
        }
        const updatedTextbox = {
            id: subjective.id,
            text: text
        };
        return <div>
                <textarea placeholder="Add comments" onChange={(e) => setText(e.target.value)} defaultValue={subjective.text} value={text} />
                <br></br>
                <button onClick={() => Express.updateReviewTextbox(year, updatedTextbox)}>Update</button>
            </div> 
    };

    return (
        <div>
            Month Summary

            {tableSkills.map(skill => {
                return <MonthTableSummary skill={skill} />
            })}
            {checkboxSkills.map(skill => {
                return <MonthCheckboxSummary skill={skill} />
            })}

            <h3>Thoughts/Notes</h3>
                {renderSaveOrUpdateButtonTextarea()}
        </div>
    )
}

export default MonthSummary;