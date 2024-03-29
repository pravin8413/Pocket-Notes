import React, { createContext, useContext, useState, useEffect } from 'react';

const NoteContext = createContext();

export function useNoteContext() {
  return useContext(NoteContext);
}

export function NoteContextProvider({ children }) {
  const [show,setShow]=useState(false);
  const[bcolor,setBcolor]=useState('');
  const [titles, setTitles] = useState([]);
  const [displayTitle, setDisplayTitle] = useState('');
  const [displayNotes,setDisplayNotes]=useState({});
  const [isCreateNoteVisible, setCreateNoteVisible] = useState(false);
  const [groupTitles, setGroupTitles] = useState(
    JSON.parse(localStorage.getItem("groupTitles")) || []
)

  const addTitle = ({groupName, bgColor}) => {
  
    setTitles((prevTitles) => [...prevTitles, { groupName, bgColor }]);
  };
  

  // useEffect(() => {

  //   const storedTitles = localStorage.getItem('noteTitles');
  //   if (storedTitles) {
      
  //     setTitles(JSON.parse(storedTitles));
  //   }
  // }, []);
  
  useEffect(() => {
    const storedNotes = localStorage.getItem(displayTitle);
    if (storedNotes) {
      setDisplayNotes(JSON.parse(storedNotes));
    } else {
      // If there are no stored notes for the current title, initialize displayNotes as an empty object.
      setDisplayNotes({});
    }
  }, [displayTitle]);
  
  
  
  

  return (
    <NoteContext.Provider value={{ titles,setTitles, addTitle, displayTitle, setDisplayTitle,displayNotes,setDisplayNotes,isCreateNoteVisible, setCreateNoteVisible,show,setShow,bcolor,setBcolor,groupTitles, setGroupTitles }}>
      {children}
    </NoteContext.Provider>
  );
}
