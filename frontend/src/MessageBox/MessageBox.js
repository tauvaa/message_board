import "./MessageBox.css";
import React from "react";
import { GetMessages } from "../ApiConnectors/Messages";
import { MesssageBoxMessage } from "../Message/message";

const MessageBox = () => {
    const [messages, setMessages] = React.useState([]);
    React.useEffect(() => {
        const fetchData = () => {
            GetMessages((res) => {
                setMessages(res.data.messages);
            });
        };
        fetchData();
    }, []);
    const messageData = messages.map((x, i) => {
        return (
            <div>
                <MesssageBoxMessage
                    author={x.author}
                    message={x.message}
                    key={i}
                />
            </div>
        );
    });

    return (
        <div className="MessageBox">
            Message Box
            {messageData}
        </div>
    );
};

export { MessageBox };
