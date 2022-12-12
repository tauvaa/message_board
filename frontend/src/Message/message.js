import "./message.css";
class message {
    constructor(message = "", author = "anon") {
        this.message = message;
        this.author = author;
    }
    makeMessage() {
        return { message: this.message, author: this.author };
    }
}

const MesssageBoxMessage = (props) => {
    const { author, message } = props;

    return (
        <div className="boxBoarder">
            <div className="MessageBoxMessage">
                <div>{author}</div>
                <div>{message}</div>
            </div>
        </div>
    );
};
export { message, MesssageBoxMessage };
