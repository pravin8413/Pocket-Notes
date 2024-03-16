import React from 'react';
import './NodeList.css';
import { useNoteContext } from './NoteContext';

export default function NodeList({ key,title, bgcolor }) {

    const nameInitials = title
        .split(" ")
        .map((word) => word
        .substring(0, 1))
        .join("")
        .toUpperCase();

        const { displayTitle, setDisplayTitle,setBcolor,setShow } = useNoteContext();
        
    const isClicked = displayTitle === title;

    const handleClick = ()=>{
        setDisplayTitle(title);
        setBcolor(bgcolor);
        setShow(true);

    }
    return (
        <div className={`note-title-list ${isClicked?'clicked':''}`} 
            onClick={handleClick}>
            <div className='logo' style={{backgroundColor:bgcolor}}>
                {nameInitials}
            </div>
            <div className='note-title'>{title}</div>

        </div>
    )
}
