import React, { useState } from "react";
import "../style/ChatScreen.css";
const DisplayMessages = (props) => {
  {
    const messages = props.messages;

    return messages.map((message) => {
      if (message.sendby === props.user) {
        // Right
        if (message.type === "msg") {
          return (
            <li class="clearfix float-up">
              <div class="message-header float-right">{message.time}</div>
              <br />
              <div class="message-data text-right"></div>
              <div class="message other-message float-right">
                {" "}
                {message.content}
              </div>
            </li>
          );
        } else if (message.type === "pic")
          return (
            <li class="clearfix float-up">
              <div class="message-header float-right">{message.time}</div>
              <br />
              <div class="message-data text-right float-right"></div>
              <div class="message other-message float-right">
                {" "}
                <img src={message.content} width="500" height="300"></img>
              </div>
            </li>
          );
      } else {
        //Left
        if (message.type === "msg") {
          return (
            <li class="clearfix float-up">
              <div class="message-header">{message.time}</div>
              <div class="message-data text-left" />
              <div class="message other-message float-left ">
                {" "}
                {message.content}
              </div>
            </li>
          );
        } else if (message.type === "pic")
          return (
            <li class="clearfix float-up">
              <div class="message-header">{message.time}</div>
              <div class="message-data text-right float-left"></div>
              <div class="message other-message float-left">
                {" "}
                <img
                  src="date:bas64{message.content}"
                  width="300"
                  height="200"
                ></img>
              </div>
            </li>
          );
      }
    });
  }
};
export default DisplayMessages;
