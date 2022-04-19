import React from "react";
import { submitMessage } from "./sendMessage";
function SendPhoto(activeContact, user, setmessages) {
  const el = document.getElementById("photoFile");
  if (el != null && typeof el.files[0] === "object") {
    const reader = new FileReader();
    reader.readAsDataURL(el.files[0]);
    reader.addEventListener("load", () => {
      localStorage.setItem("recent-image", reader.result);
    });
    const base64 = localStorage.getItem("recent-image");
    submitMessage(activeContact, user, setmessages, "2", base64);
  }
}
export default SendPhoto;
