import React, { useState } from 'react';
import "./Homepage.css";
import { useNoteContext } from "./NoteContext";
import Note from "./Note"

const Homepage = () => {

    const { show, displayTitle, displayNotes, setDisplayNotes, bcolor } = useNoteContext();
    const nameInitals = (typeof displayTitle === 'string') ? displayTitle.split(" ")
        .map((word) => word.substring(0, 1))
        .join("")
        .toUpperCase() : '';

    const [date, setDate] = useState("");
    const [noteNamesParent, setNoteNamesParent] = useState(
        JSON.parse(localStorage.getItem(displayTitle)) || []
    );
    const [noteText, setNoteText] = useState("");
    const handleChange = (e) => {
        setNoteText(e.target.value);
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            e.preventDefault(); // Prevent the default form submission
            handleClick(); // Trigger the button click
        }
    };

    const handleClick = () => {
        if (!noteText) {
            return;
        }
        setDate(new Date());
        const newGroup = {
            note: noteText,
            date: date.toLocaleDateString(),
            time: date.toLocaleTimeString()
        }

        const existingData = JSON.parse(localStorage.getItem(displayTitle)) || [];
        const mergeData = [...existingData, newGroup];
        localStorage.setItem(displayTitle, JSON.stringify(mergeData));
        setNoteNamesParent(mergeData); 
        // Update the local state
        setDisplayNotes(mergeData); // Update the context state
        setNoteText("");
        setDate("");
       
    };

    return (
        <div className='root'>
            {
                show ? (
                    <div className='home-container'>
                        <div className='header-note'>
                            <div className="title-logo" style={{ backgroundColor: bcolor }}>
                                {nameInitals}
                            </div>
                            <div className="header-note-title">{displayTitle}</div>
                        </div>
                        <div className="notes-display">
                            <Note/>
                        </div>
                        <div className="type-container">
                            <textarea
                                id="note-text"
                                className="note-box"
                                required
                                placeholder="Enter your text here..........."
                                value={noteText}
                                onChange={handleChange}
                                onKeyPress={handleKeyPress}
                            />
                            <button className="send" onClick={handleClick}></button>
                        </div>
                    </div>
                ) :


                    (<div className="root-container">
                        <div className="img-container"></div>
                        <div className="txt-conatainer">
                            <p className="pn"> Pocket Notes</p>
                            <p className="info-txt">
                                Send and receive messages without keeping your phone online.
                                Use Pocket Notes on up to 4 linked devices and 1 mobile phone

                            </p>
                            <div className="footer-text">
                                <div className="lock-logo"></div>
                                <span className="endtext">end-to-end encrypted</span>
                            </div>
                        </div>
                    </div>
                    )}
        </div>
    )
}
export default Homepage;