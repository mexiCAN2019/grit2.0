import React, { useState } from 'react';
import Express from './../../fetchExpress'

function Textbox({ activity, onDelete }) {
    const [text, setText] = useState(activity.text);
    const [skillName, setSkillName] = useState(activity.skillName);


    const handleSaveChanges = () => {
        const updatedTextbox = {
            text: text,
            skillName: skillName.toUpperCase(), 
            id: activity.id
        };
        Express.updateTextbox(activity.year, updatedTextbox)
    };

    return (
        <div>
            <input className="skillName" type="text" defaultValue={skillName} onChange={(e) => setSkillName(e.target.value)}></input>
            <button onClick={() => onDelete('textbox', activity)}>Delete</button>
            <button onClick={handleSaveChanges}>Save Changes</button>
            <br></br>
            <textarea className="textarea" onChange={(e) => setText(e.target.value)}>{text}</textarea>
        </div>
    )
}

export default Textbox;