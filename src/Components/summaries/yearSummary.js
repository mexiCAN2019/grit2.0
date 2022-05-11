import React, { useState, useEffect } from 'react';
import Express from './../../fetchExpress';
import TableSummary from './tableSummary';
import CheckboxSummary from './checkboxSummary';

function YearSummary({match: {params: { year }}}) {
    const [tableSkills, setTableSkills] = useState([]);
    const [checkboxSkills, setCheckboxSkilss] = useState([]);
    const [subjective, setSubjective] = useState({});
    const [text, setText] = useState('');

    useEffect(() => {
        Express.getYearTableSkills(year).then(tables => setTableSkills(tables));
        Express.getYearCheckboxSkills(year).then(checkboxes => setCheckboxSkilss(checkboxes));
        Express.getYearSummaryTextbox(year).then(textbox => setSubjective(textbox));
    }, []);

    const handleSave = () => {
        const newTextbox = {
            skillName: 'Year Review',
            text: text,
            year: year
        };

        Express.createYearSummaryTextbox(year, newTextbox).then(textBox => Express.getYearSummaryTextbox(year).then(textbox => setSubjective(textbox)));
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
                <button onClick={() => Express.updateYearSummaryTextbox(year, updatedTextbox)}>Update</button>
            </div> 
        
    };

    return (
        <div>
            <h1>Year Review</h1>
            {tableSkills.map(skill => {
                return <TableSummary skill={skill} />
            })}
            {checkboxSkills.map(skill => {
                return <CheckboxSummary skill={skill} />
            })}
                <h3>Thoughts/Notes</h3>
                {renderSaveOrUpdateButtonTextarea()}

        </div>
    )
}

export default YearSummary;