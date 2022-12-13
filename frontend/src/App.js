import "./App.css";
import React from "react";
import { ForumPage } from "./ForumPage/ForumPage";

import { BrowserRouter, Routes, Route } from "react-router-dom";
const World = () => {
    return <div>World!</div>;
};

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
