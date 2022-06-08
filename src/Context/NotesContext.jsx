import { createContext, useContext, useReducer } from "react";
import {noteReducer} from "../Reducer/notesReducer";
const NotesContext = createContext();

const NotesProvider = ({ children }) => {
  const [notes, noteDispatch] = useReducer(noteReducer, {
    Addnotes: [],
    Archive: [],
    Trash: [],
    Lable: [],
  });

  return (
    <NotesContext.Provider value={{ notes, noteDispatch }}>
      {children}
    </NotesContext.Provider>
  );
  };

  


const useNotes = () => useContext(NotesContext);

export { useNotes, NotesProvider };
