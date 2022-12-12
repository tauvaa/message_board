import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { MessageBox } from "./MessageBox/MessageBox";
import { SubmitBox } from "./SubmitBox/SubmitBox";

function App() {
    return (
        <div className="App">
            <MessageBox />
            <SubmitBox />
        </div>
    );
}

export default App;
