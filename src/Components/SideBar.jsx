import React, { useState } from 'react';
import './SideBar.css';
import NodeList from './NodeList';
import CreateNote from './CreateNote';
import { useNoteContext } from "./NoteContext";

export default function SideBar() {

   
    const {groupTitles,isCreateNoteVisible, setCreateNoteVisible} = useNoteContext();

    if(isCreateNoteVisible){

    }

    const showCreateNote = () => {
        setCreateNoteVisible(true);       
    }
    
    return (
        <div>
        <div className={`sidebar-container ${isCreateNoteVisible?'blurred-background':''} `} onClick={()=>
            isCreateNoteVisible && setCreateNoteVisible(false)}>
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
            

        </div>
        {isCreateNoteVisible?<CreateNote/>:""}
        </div>
    )
}
