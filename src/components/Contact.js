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
    var timeleft = 7*props.index;
    var lastmessage = props.messages.at(-1);
    console.log(lastmessage)
    /* var curcontacts = props.users[props.user].contacts;
    var lastmessage;
    if (typeof(curcontacts) !== 'undefined' && curcontacts != null) {
    curcontacts.map(contact =>{
        if(contact.nickname === props.name){
            lastmessage = contact.messages.at(-1);
        }
    })
    console.log(lastmessage)
    
    }
    if (typeof(lastmessage) !== 'undefined' && lastmessage != null) {
    var content = lastmessage.content;
    var time = lastmessage.time;}
    <div class="status"> <i></i> {content} : {time}</div>*/
    return (
        <li class={"clearfix " + selected} onClick={clickHandler}>
            <img src={props.image} alt="avatar" />
            <div class="about">
                <div class="name">{props.name}</div>
                <div class="status"> <i></i> {timeleft}</div>
            </div>
        </li>
    )
}
