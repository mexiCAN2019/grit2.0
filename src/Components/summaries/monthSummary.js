import React, { useState, useEffect } from 'react';
import Express from './../../fetchExpress';
import TableSummary from './tableSummary';
import CheckboxSummary from './checkboxSummary';
import { useParams } from 'react-router-dom';

function MonthSummary() {
    const [tableSkills, setTableSkills] = useState([]);
    const [checkboxSkills, setCheckboxSkilss] = useState([]);
    const [subjective, setSubjective] = useState({});
    const [text, setText] = useState('');

    const { year, monthAndMonthID } = useParams();
    const monthID = monthAndMonthID.replace(/^\D+/g, '');

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

export default MonthSummary;