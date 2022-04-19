import { render } from "@testing-library/react";
import React from "react";
import "../style/ChatScreen.css";
import { users } from "./Chat_data";
import ChatScreen from "./ChatScreen";
var activeMessage;
function submitMessage(activeContact, user, setmessages, num) {
        if (num === "1") {
                var today = new Date();
                var curtime = today.getHours() + ":" + today.getMinutes();
                const chatWith = users[user].contacts[activeContact].username;
                users[user].contacts[activeContact].messages.push({ time: curtime, type: "msg", content: activeMessage, sendby: user });
                setmessages([...users[user].contacts[activeContact].messages]);
                document.getElementById('submitbox').value = '';
        }
}
function handleSubmitChange(event) {
        activeMessage = event.target.value;
}


export { submitMessage, handleSubmitChange, activeMessage }