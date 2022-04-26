import React, { useState } from "react";
import "../style/ChatScreen.css";
const DisplayMessages = (props) => {
  {
    const messages = props.messages;

    return messages.map((message) => {
      if (message.sendby === "1") {
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
              <div class="message-data text-right float-right"></div>
              <div class="message other-message float-right">
                {" "}
                <img src={message.content} width="500" height="300"></img>
              </div>
            </li>
          );
        else if (message.type === "vid")
          return (
            <li class="clearfix float-up">
              <div class="message-header float-right">{message.time}</div>
              <div class="message-data text-right float-right"></div>
              <div class="message other-message float-right">
                {" "}
                <video width="500" height="300" controls>
                  <source src={message.content} type="video/mp4"></source>
                </video>
              </div>
            </li>
          );
        else if (message.type === "aud") {
          return (
            <li class="clearfix float-up">
              <div class="message-header float-right">{message.time}</div>
              <div class="message-data text-right float-right"></div>
              <div class="message other-message float-right">
                {" "}
                <audio controls className="audio-player">
                  <source src={message.content} type="audio/mpeg" />
                </audio>
              </div>
            </li>
          );
        }
      } else {
        //Left
        if (message.type === "msg") {
          return (
            <li class="clearfix float-up">
              <div class="message-header float-left">{message.time}</div>
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
              <div class="message-header float-left">{message.time}</div>
              <div class="message-data text-right float-left"></div>
              <div class="message other-message float-left">
                {" "}
                <img src={message.content} width="300" height="200"></img>
              </div>
            </li>
          );
        else if (message.type === "vid")
          return (
            <li class="clearfix float-up">
              <div class="message-header float-left">{message.time}</div>
              <div class="message-data text-right float-left"></div>
              <div class="message other-message float-left">
                {" "}
                <video width="500" height="300" controls>
                  <source src={message.content} type="video/mp4"></source>
                </video>
              </div>
            </li>
          );
        else if (message.type === "aud")
          return (
            <li class="clearfix float-up">
              <div class="message-header float-left">{message.time}</div>
              <div class="message-data text-right float-left"></div>
              <div class="message other-message float-left">
                {" "}
                <video width="500" height="300" controls>
                  <source src={message.content} type="video/mp4"></source>
                </video>
              </div>
            </li>
          );
      }
    });
  }
};
export default DisplayMessages;
