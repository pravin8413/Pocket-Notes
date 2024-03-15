import React, { useState } from 'react';
import './SideBar.css';
import NodeList from './NodeList';
import CreateNote from './CreateNote';
import { useNoteContext } from "./NoteContext";

export default function SideBar() {

    const [isCreateNoteVisible, setCreateNoteVisible] = useState(false);
    const {groupTitles} = useNoteContext();

    if(isCreateNoteVisible){

    }

    const showCreateNote = () => {
        setCreateNoteVisible(!isCreateNoteVisible);       
    }
    
    return (
        <div className={`sidebar-container ${isCreateNoteVisible?'blurred-background':''} `}>
            <h2>Pocket Notes</h2> 
            <div className='note-list'>
                {
                    groupTitles.map((groupTitle,index)=>{

                        return <NodeList key={index} title={groupTitle.name} bgcolor={groupTitle.color} />
                    })
                }
            </div>
            <button className='create-note-button' onClick={showCreateNote}>
                +
            </button>
            {isCreateNoteVisible?<CreateNote/>:"Pravin"}
        </div>
    )
}
