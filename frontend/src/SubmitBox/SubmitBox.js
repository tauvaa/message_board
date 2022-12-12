import "./SubmitBox.css";
import SendMessage from "../ApiConnectors/Messages";
import { message } from "../Message/message";
import React from "react";

const SubmitBox = () => {
    const [subtext, setSubtext] = React.useState("submit box");
    const handleSubmit = () => {
        let mes = new message(subtext);
        let toSend = mes.makeMessage();
        SendMessage(toSend);
    };
    return (
        <div className="SubmitBox">
            <form onSubmit={handleSubmit}>
                <textarea
                    onChange={(e) => setSubtext(e.target.value)}
                ></textarea>

                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
};

export { SubmitBox };
