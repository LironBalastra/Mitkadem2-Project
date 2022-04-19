import React, { useEffect, useState } from "react";
export default function Contact(props) {

    const [selected, setSelected] = useState("");

    const clickHandler = () => {
        props.setActiveContact(props.index);
    };

    useEffect(() => {
        if (props.activeContact === props.index) setSelected("active");
        else setSelected("");
    }, [props.activeContact])
    var timeleft = 7 * props.index;
    var lastmessage = props.messages.at(-1);
    var curcontacts = props.users[props.user].contacts;
    var lastmessage;
    if (typeof (curcontacts) !== 'undefined' && curcontacts != null) {
        curcontacts.map(contact => {
            if (contact.nickname === props.name) {
                lastmessage = contact.messages.at(-1);
            }
        })

    }
    if (typeof (lastmessage) !== 'undefined' && lastmessage != null) {
        if (lastmessage.type === "pic")
            var content = "image";
        if (lastmessage.type === "msg")
            var content = lastmessage.content;
        if (lastmessage.type === "vid")
            var content = "video";
        if (lastmessage.type === "aud")
            var content = "audio";
        var time = lastmessage.time;
    }
    return (
        <li class={"clearfix " + selected} onClick={clickHandler}>
            <img src={props.image} alt="avatar" />
            <div class="about">
                <div class="name">{props.name}</div>
                <div class="status"> <i></i> {content} : {time}</div>
            </div>
        </li>
    )
}
