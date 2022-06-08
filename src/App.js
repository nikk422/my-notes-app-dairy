import "./App.css";
import "./pagess/Styless/main.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pagess/Home-page/Home";
import Navbar from "./Componants/Navbar/Navbar";
import FilterNotes from "./Componants/FilterNotes/FilterNotes";
import Login from "./pagess/Authentication/Login/login";
import Signup from "./pagess/Authentication/Signup/SignUp";
import RequireAuth from "../src/PrivateAuth/RequireAuth";
import Notes from "./pagess/Notes/Note";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/filter" element={<FilterNotes />} />
        <Route path="/login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
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
