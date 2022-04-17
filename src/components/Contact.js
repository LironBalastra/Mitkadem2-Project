import React from 'react'
import "../style/ChatScreen.css";
export default function Contact(props) {
  return (
    <li className="clearfix">
    <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="avatar" />
    <div className="about">
        <div className="name">{props.name}</div>
        <div className="status"> <i className="fa fa-circle offline"></i>{props.date} </div>
    </div>
</li>
  )
}
