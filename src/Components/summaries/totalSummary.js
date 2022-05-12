import React, { useState, useEffect } from 'react';
import Express from './../../fetchExpress';
import TableSummary from './tableSummary';
import CheckboxSummary from './checkboxSummary';

function TotalSummary() {
    const [tableSkills, setTableSkills] = useState([]);
    const [checkboxSkills, setCheckboxSkilss] = useState([]);
    const [subjective, setSubjective] = useState({});
    const [text, setText] = useState('');

    useEffect(() => {
        Express.getTotalTableSkills().then(tables => setTableSkills(tables));
        Express.getTotalCheckboxSkills().then(checkboxes => setCheckboxSkilss(checkboxes));
        Express.getTotalTextbox().then(textbox => setSubjective(textbox));
    }, []);

    const handleSave = () => {
        const newTextbox = {
            text: text,
        };

        Express.createTotalTextbox(newTextbox).then(textBox => Express.getTotalTextbox().then(textbox => setSubjective(textbox)));
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
                <button onClick={() => Express.udpateTotalTextbox(updatedTextbox)}>Update</button>
            </div> 
    };

    return (
        <div>
            Total Summary, it takes 10,000 hours to become a pro!

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
};

export default TotalSummary;