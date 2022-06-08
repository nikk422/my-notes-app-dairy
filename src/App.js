import {Routes,Route} from "react-router-dom";
import HomePage from "./pagess/Home-page/Home";
import "./App.css";
import "../src/pagess/Styless/main.css"
import Navbar from "./Componants/Navbar/Navbar";
import Notes from "./pagess/Notes/Note";
import Archive from "./pagess/Archive/Archive";
import Trash from "./pagess/Trash/Trash";
import Lables from "./pagess/Lables/Lables";
import FilterNotes from "./Componants/FilterNotes/FilterNotes";
import Login from "./pagess/Authentication/Login/login";
import Signup from "./pagess/Authentication/Signup/SignUp";
import RequireAuth from "../src/PrivateAuth/RequireAuth";

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/archive" element={<Archive/>}/>
      <Route path="/trash" element={<Trash/>}/>
      <Route path="/lables" element={<Lables/>}/>
      <Route path="/filter" element={<FilterNotes/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="signup" element={<Signup/>}/>
      <Route
          path="/notes"
          element={
            <RequireAuth>
              <Notes />
            </RequireAuth>
          }
        />
    </Routes>
    </div>
  );
}

export default App;
