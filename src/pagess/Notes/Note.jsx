import "./note.css";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import Sidebar from "../../Componants/SideBar/SideBar";
import FilterNotes from "../../Componants/FilterNotes/FilterNotes";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useNotes } from "../../Context/NotesContext";
import { useFilter } from "../../Context/Filter-Notes-context";

const formats = [
  "bold",
  "italic",
  "underline",
  "strike",
  "image",
  "list",
  "link",
  "clean",
  "video",
];
const modules = {
  toolbar: [
    ["bold", "italic", "underline", "strike"],
    [],
    [{ list: "ordered" }, { list: "bullet" }],
    [],
    ["image", "video", "link"],
    ["clean"],
  ],
};

const Notes = () => {
  const [notesValues, setNoteValue] = useState("");
  const [notesTitle, setNotesTitle] = useState("");
  const [color, setColor] = useState();
  const [notesLable, setNotesLable] = useState("");
  const [priority, setPriority] = useState("Low");
  const [sortDate, setSortDate] = useState(0);

  const getDate = (separator = "/") => {
    let newDate = new Date();
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

    let hr = newDate.getHours();
    let minute = newDate.getMinutes();
    let second = newDate.getSeconds();

    return `${year}${separator}${
      month < 10 ? `0${month}` : `${month}`
    }${separator}${date} ${hr}:${minute}:${second}`;
  };

  const {
    notes: { Addnotes },
    noteDispatch,
  } = useNotes();

  const {
    filterState: { byPriority, byDate },
  } = useFilter();

  const AllData = {
    Title: notesTitle,
    Value: notesValues,
    NoteLable: notesLable,
    id: uuid(),
    Color: color,
    Priority: priority,
    sortByDate: sortDate,
    Date: getDate(),
  };
  const clickHandler = () => {
    noteDispatch({ type: "ADD_NOTES", payload: AllData });
    setSortDate((prev) => prev + 1);
    setNotesTitle("");
    setNoteValue("");
    setNotesLable("");
    setPriority("");
  };

  const editNotes = (i) => {
    setNotesTitle(i.Title);
    setNotesLable(i.NoteLable);
    setColor(i.Color);
    setNoteValue(i.Value);
  };

  const FilteredNotes = () => {
    let sortedNotes = Addnotes;

    if (byPriority === "Low") {
      sortedNotes = sortedNotes.filter((i) => i.Priority === "Low");
    }
    if (byPriority === "High") {
      sortedNotes = sortedNotes.filter((i) => i.Priority === "High");
    }
    if (byDate === "Latest") {
      sortedNotes = sortedNotes.sort((a, b) => a.sortByDate - b.sortByDate);
    }
    if (byDate === "Oldest") {
      sortedNotes = sortedNotes.sort((a, b) => b.sortByDate - a.sortByDate);
    }
    return sortedNotes;
  };

  return (
    <div className="container">
      <div>
        <Sidebar />
      </div>
      <div className="react-not-contain">
        <div style={{ backgroundColor: color }} className="reactQuil-notee">
          <div className="quill">
            <input
              className="pri-input"
              value={notesTitle}
              onChange={(e) => {
                setNotesTitle(e.target.value);
              }}
              placeholder="Title"
            />
            <section className="quill-section">
              <ReactQuill
                className="textArea-notes"
                modules={modules}
                formats={formats}
                value={notesValues}
                onChange={setNoteValue}
                placeholder="take a note"
              />
            </section>
            <input
              className="pri-input"
              value={notesLable}
              onChange={(e) => {
                setNotesLable(e.target.value);
              }}
              placeholder="Lable"
            />
            <hr></hr>
            <div className="addNote-color">
              <input
                type="color"
                className="color-input"
                value={color}
                onChange={(e) => setColor(e.target.value)}
              />
              <div className="Priority-options">
                <label htmlFor="">Priority :- </label>
                <select onChange={(e) => setPriority(e.target.value)}>
                  <option value="Low">Low</option>
                  <option value="High">High</option>
                </select>
              </div>
              <button
                className="saveBtn"
                onClick={clickHandler}
                disabled={notesTitle === "" && notesValues === ""}
              >
                Save Note
              </button>
            </div>
          </div>
        </div>
        <section className="created-note-container">
          {FilteredNotes().map((i) => (
            <div style={{ backgroundColor: i.Color }} className="created-note">
              <h4 className="break-word">Title : {i.Title}</h4>
              <hr></hr>
              <p
                className="break-word"
                dangerouslySetInnerHTML={{ __html: i.Value }}
              ></p>
              <hr></hr>
              <h4 className="break-word">Lable : {i.NoteLable} </h4>
              <hr></hr>
              <div className="icon-container">
                <h3>{i.Date}</h3>
                <div>
                  <i
                    onClick={() => {
                      noteDispatch({ type: "ADD_TO_TRASH", payload: i });
                      noteDispatch({ type: "REMOVE_FROM_NOTES", payload: i });
                    }}
                    className="fas fa-trash-alt note-icon"
                  ></i>

                  <i
                    onClick={() => {
                      noteDispatch({ type: "ADD_TO_ARCHIVE", payload: i });
                      noteDispatch({ type: "REMOVE_FROM_NOTES", payload: i });
                    }}
                    className="fa fa-archive note-icon"
                  ></i>

                  <i
                    onClick={() => {
                      editNotes(i);
                      noteDispatch({ type: "REMOVE_FROM_NOTES", payload: i });
                    }}
                    className="fa fa-edit note-icon"
                  ></i>
                </div>
                <h3>Priority: - {i.Priority}</h3>
              </div>
            </div>
          ))}
        </section>
      </div>
      <div>
        <FilterNotes />
      </div>
    </div>
  );
};
export default Notes;
