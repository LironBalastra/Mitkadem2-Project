import React from "react";
import { submitMessage } from "./sendMessage";
function SendVideo(activeContact, user, setmessages) {
    const el = document.getElementById("videoFile");
    const reader = new FileReader();
    const file = el.files[0];
    reader.onload = handleReaderLoad;
    reader.readAsDataURL(file);
    function handleReaderLoad(e) {
        var filePayload = e.target.result;
        submitMessage(activeContact, user, setmessages, "3", filePayload);
    }
}
export default SendVideo