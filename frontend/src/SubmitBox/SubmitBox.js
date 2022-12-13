import "./SubmitBox.css";
import SendMessage from "../ApiConnectors/Messages";
import { message } from "../Message/message";
import React from "react";

const SubmitBox = () => {
    const [subtext, setSubtext] = React.useState("submit box");
    const [author, setAuthor] = React.useState("anon");
    const handleSubmit = () => {
        let mes = new message(subtext, author);
        let toSend = mes.makeMessage();
        SendMessage(toSend);
    };
    return (
        <div className="SubmitBox">
            <form onSubmit={handleSubmit}>
                <div className="author">
                    <label for="author">Author:</label>
                    <input
                        id="author"
                        type={"text"}
                        onChange={(e) => setAuthor(e.target.value)}
                    ></input>
                </div>
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
