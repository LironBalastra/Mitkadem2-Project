import React from "react";
import { submitMessage } from "./sendMessage";
function SendPhoto(activeContact, user, setmessages) {
    const el = document.getElementById("photoFile");
    const reader = new FileReader();
    const file = el.files[0];
    reader.onload = handleReaderLoad;
    reader.readAsDataURL(file);
    function handleReaderLoad(e) {
        var filePayload = e.target.result;
        submitMessage(activeContact, user, setmessages, "2", filePayload);
    }
}
export default SendPhoto