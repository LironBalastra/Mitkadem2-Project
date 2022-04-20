import React from "react";
import { useState } from "react";
import { submitMessage } from "./sendMessage";
var audioUrl, mediaRecorder;
async function RecordAudio(num) {
    let stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    mediaRecorder = new MediaRecorder(stream);
    mediaRecorder.start();
    const audioChunks = [];
    mediaRecorder.addEventListener("dataavailable", event => {
        audioChunks.push(event.data);
    });
    mediaRecorder.addEventListener("stop", () => {
        const audioBlob = new Blob(audioChunks);
        audioUrl = URL.createObjectURL(audioBlob);
    });
}
async function stopRecord(activeContact, user, setmessages) {
    mediaRecorder.stop();
    setTimeout(() => {  submitMessage(activeContact, user, setmessages, "4", audioUrl); }, 1000);
}
export { RecordAudio, stopRecord }