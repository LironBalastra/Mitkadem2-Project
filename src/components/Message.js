import React from 'react'
import { useState } from 'react'
import "../style/Message.css";
export default function Message(props) {

    return (
        <li className="clearfix">
            <div className="message-data text-right">
                <span className="message-data-time">{props.time}</span>
                <img src={props.image} alt="avatar" />
            </div>
            <div className="message other-message float-right"> {props.text}</div>
        </li>
    )
}
