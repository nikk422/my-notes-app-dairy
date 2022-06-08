import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import {BrowserRouter} from "react-router-dom";
import {AuthProvider} from "./Context/Auth-context";
import {NotesProvider} from "./Context/NotesContext";


// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter>
  <AuthProvider>
  <NotesProvider>
    <App />
    </NotesProvider>
    </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
