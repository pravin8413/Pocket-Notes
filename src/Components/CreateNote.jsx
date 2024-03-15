import React, { useState } from 'react';
import { useNoteContext } from './NoteContext';
import "./CreateNote.css";

export default function CreateNote() {

    const [groupName, setGroupName] = useState("");
    const [bgColor, setBgColor] = useState("");
    const {groupTitles, setGroupTitles} = useNoteContext();
    
    const handleChange = (e) => {
        setGroupName(e.target.value);
    }

    const handleClick = (e) => {

        if (!groupName) {
            alert("Enter a Group Name");
            return;
        }
        if (!bgColor) {
            alert("Please Selecct Note Color");
            return;
        }
        const hide = document.getElementById("root-container");
        hide.style.display = "none";

        const newGroup = { name: groupName, color: bgColor };
        const updatedGroupNames = [...groupTitles, newGroup];
        setGroupTitles(updatedGroupNames);
        localStorage.setItem("groupTitles", JSON.stringify(updatedGroupNames));

        setGroupName(""); // Clear the input field
        setBgColor("");   // Clear the bgColor field

    }
    const handleColor = (e) => {
        const div = e.target;
        setBgColor(getComputedStyle(div).backgroundColor);
    }

    

    return (
        <div className='root-container' id='root-container'>
            <h3>Create New group</h3>
            <div className='groupName-card'>
                <label htmlFor="group-name">Group Name</label>
                <input type='text' id='group-name'
                    className='group-name-text'
                    value={groupName}
                    onChange={handleChange}
                    placeholder='Enter group Name....' />
            </div>
            <div className='color-input'>
                <span>Choose Color</span>
                <div className='colors-input'>
                    <div className={`color-input-1 color ${bgColor === "rgb(179, 139, 250)" ? `highlight` : null
                        }`} onClick={handleColor}></div>
                    <div className={`color-input-2 color ${bgColor === "rgb(255, 121, 242)" ? `highlight` : null
                        }`} onClick={handleColor}></div>
                    <div className={`color-input-3 color ${bgColor === "rgb(67, 230, 252)" ? `highlight` : null
                        }`} onClick={handleColor}></div>
                    <div className={`color-input-4 color ${bgColor === "rgb(241, 149, 118)" ? `highlight` : null
                        }`} onClick={handleColor}></div>
                    <div className={`color-input-5 color ${bgColor === "rgb(0, 71, 255)" ? `highlight` : null
                        }`} onClick={handleColor}></div>
                    <div className={`color-input-6 color ${bgColor === "rgb(102, 145, 255)" ? `highlight` : null
                        }`} onClick={handleColor}></div>
                </div>

            </div>
            <button id='create-btn' className='create-button' onClick={handleClick}>
                Create
            </button>

        </div>
    )
}