import axios from "axios";
const URL = process.env.REACT_APP_API_URL
    ? process.env.REACT_APP_API_URL
    : "http://127.0.0.1:5000";

const SendMessage = (message) => {
    console.log("sending!");
    const url = `${URL}/message_add`;
    axios.post(url, message).then((e) => console.log(e));
};
export const GetMessages = (callback) => {
    console.log("getting");
    const url = `${URL}/retrieve_messages`;
    axios.get(url).then((res) => callback(res));
    // .catch((e) => console.log(e));
};

export default SendMessage;
