import Sidebar from "../../Componants/SideBar/SideBar";
import { useNotes } from "../../Context/NotesContext";

const Lables = () => {
  const {
    notes: { Lable },
    noteDispatch,
  } = useNotes();
  return (
    <div className="container">
      <div>
        <Sidebar />
      </div>
      <div className="output-contain">
        <section className="created-note-container">
          {Lable?.map((i) => (
            <div style={{ backgroundColor: i.Color }} className="created-note">
              <h4>Title : {i.Title}</h4>
              <hr></hr>
              <p dangerouslySetInnerHTML={{ __html: i.Value }}></p>
              <hr></hr>
              <h4>Lable : {i.NoteLable} </h4>
              <hr></hr>
              <div className="icon-container">
              <h3>{i.Date}</h3>
              <div>
                <i
                  onClick={() => {
                    noteDispatch({ type: "ADD_TO_TRASH", payload: i });
                    noteDispatch({ type: "REMOVE_FROM_LABLES", payload: i });
                  }}
                  className="fas fa-trash-alt note-icon"
                ></i>
                <i
                  onClick={() => {
                    noteDispatch({ type: "ADD_TO_ARCHIVE", payload: i });
                    noteDispatch({ type: "REMOVE_FROM_LABLES", payload: i });
                  }}
                  className="fa fa-archive note-icon"
                ></i>
              </div>
              <h3>Priority :- {i.Priority}</h3>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};
export default Lables;
