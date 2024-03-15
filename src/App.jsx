import React from 'react';
import "./App.css";
import CreateNote from './Components/CreateNote';
import SideBar from './Components/SideBar';
import { NoteContextProvider } from './Components/NoteContext'
import Homepage from './Components/Homepage';

export default function App(){

  return (
    <>
   <NoteContextProvider>
    <SideBar/>
   
    <Homepage/>
    </NoteContextProvider>
    </>
  )
}