import "./App.css";
import React from "react";
import { ForumPage } from "./ForumPage/ForumPage";

import { BrowserRouter, Routes, Route } from "react-router-dom";
const Hello = () => {
    return <div>hello!</div>;
};
const World = () => {
    return <div>World!</div>;
};

// <div className="App">
// <MessageBox />
// <SubmitBox />
// </div>
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ForumPage />} />

                <Route path="world" element={<World />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
