import "./ForumPage.css";
import React from "react";
import { MessageBox } from "../MessageBox/MessageBox";
import { SubmitBox } from "../SubmitBox/SubmitBox";
const ForumPage = () => {
    return (
        <div className="Forum">
            <MessageBox />
            <SubmitBox />
        </div>
    );
};

export { ForumPage };
