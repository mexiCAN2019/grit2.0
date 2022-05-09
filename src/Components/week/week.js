import React, { useState, useEffect } from 'react';
import FormList from './formList';
import Textbox from './textbox';
import Express from './../../fetchExpress';

function Week({ match: { params: { year, weekID, monthAndMonthID }}}) {
    const [tables, setTables] = useState([]);
    const [checkboxes, setCheckBoxes] = useState([]);
    const [textboxes, setTextboxes] = useState([]);
    const [skillName, setSkillName] = useState('');
    const [form, setForm] = useState('');
    const [monthID, setMonthID] = useState(monthAndMonthID.replace(/^\D+/g, ''));

    useEffect(() => {
        Express.getTables(year, weekID).then(tables => setTables(tables));
        Express.getCheckboxes(year, weekID).then(checkboxes => setCheckBoxes(checkboxes));
        Express.getTextboxes(year, weekID).then(textboxes => setTextboxes(textboxes));
    }, []);

    const handleActivityChange = (e) => {
        setSkillName(e.target.value);
    };

    const handleFormChange = (e) => {
        setForm(e.target.value);
    };

    const onAdd = () => {
        if(skillName){
            switch(form){
                case 'table':
                    let newTable = {
                        skillName: skillName.toUpperCase(),
                        weekID: weekID,
                        monthID: monthID,
                        year: year,
                    };
                    Express.createTable(year, newTable).then(responseOk => {
                        if(responseOk){
                            Express.getTables(year, weekID).then(tables => setTables(tables));
                        }
                    });
                    break;
                case 'checkbox':
                    const newCheckbox = {
                        skillName: skillName.toUpperCase(),
                        weekID: weekID,
                        monthID: monthID,
                        year: year,
                        monday: 0,
                        tuesday: 0,
                        wednesday: 0,
                        thursday: 0,
                        friday: 0,
                        saturday: 0,
                        sunday: 0
                    };
                    Express.createCheckbox(year, newCheckbox).then(responseOk => {
                        if(responseOk){
                            Express.getCheckboxes(year, weekID).then(checkboxes => setCheckBoxes(checkboxes));
                        }
                    });
                    break;
                case 'textbox':
                    const newTextbox = {
                        text: null,
                        skillName: skillName.toUpperCase(),
                        weekID: weekID,
                        monthID: monthID,
                        year: year
                    }
                    Express.createTextbox(year, newTextbox).then(responseOk => {
                        if(responseOk) {
                            Express.getTextboxes(year, weekID).then(textboxes => setTextboxes(textboxes));
                        }
                    });
                    break;
                default:
                    return;
            };
        }
        
    };

    const deleteForm = (form, activity) => {
        switch(form){
            case 'table':
                if(window.confirm('Are you sure you want to delete table?')){
                    Express.deleteTable(year, activity.id);
                    alert('Table deleted!');
                    setTables(currentTable => {
                        return currentTable.filter(table => table.id !== activity.id)
                    });
                } 
                break;
            case 'checkbox':
                Express.deleteCheckbox(year, activity.id);
                setCheckBoxes(currentCheckbox => {
                    return currentCheckbox.filter(checkbox => checkbox.id !== activity.id)
                });
                break;
            case 'textbox':
                Express.deleteTextbox(year, activity.id);
                setTextboxes(currentTextboxes => {
                    return currentTextboxes.filter(textbox => textbox.id !== activity.id)
                });
                break;
        };
    };


    const renderDropdown = () => {
        return (
            <div className="dropdown">
                <div style={{display: "flex", alignItems: "center"}}>
                    <label style={{marginRight: "10px"}}>Name of Skill</label>
                    <input className="newSkillName" type="text" name="title" onChange={handleActivityChange}></input>
                </div>
                <div>
                    <label >Choose Type</label>
                    <select name="form" style={{marginLeft: "10px", fontSize: "large", border: "black 2px solid"}} onChange={handleFormChange} >
                        <option></option>
                        <option value="table">Hours & Min</option>
                        <option value="checkbox">Checkbox</option>
                        <option value="textbox">Text Box</option>
                    </select>
                </div>
                <button className="formAddButton" onClick={onAdd}>Add</button>
            </div>
        );
    };

    return (
        <div>
            <h1>This Week</h1>
            {renderDropdown()}

            <FormList tables={tables}
                      checkboxes={checkboxes}
                      textboxes={textboxes}
                      year={year}
                      onDelete={deleteForm} />
        </div>

    )
}

export default Week;