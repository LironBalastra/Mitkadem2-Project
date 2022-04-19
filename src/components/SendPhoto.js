import React from "react";

function SendPhoto(props) {
    const el = document.getElementById("photoFile");
    const reader = new FileReader();
    reader.readAsDataURL(el.files[0]);
    reader.addEventListener("load", () =>{
        localStorage.setItem("recent-image" , reader.result);
    });
    const base64 = localStorage.getItem("recent-image");
    console.log(base64)
}

export default SendPhoto