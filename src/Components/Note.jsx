import React from 'react';
import './Note.css';
import { useNoteContext } from './NoteContext';

const Note = () => {
    const {displayNotes} = useNoteContext();
    return (
        <div>
             {displayNotes.length > 0 ? (
                displayNotes.map((item, index) => (
                    <div className='note-item' key={index}>
                        <div className='note-text-container'>
                            <div className='note-text'>{item.note}</div>
                        </div>
                        <div className='date-time'>
                            <div className='date'>{item.date}</div>
                            <p>.</p>
                            <div className='time'>{item.time}</div>
                        </div>
                    </div>
                ))
            ) : (
                <p></p>
            )
            } 

        </div>
    );
}
export default Note;