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
    var timeleft = 10 * props.index + props.index;
    return (
        <li class={"clearfix " + selected} onClick={clickHandler}>
            <img src={props.image} alt="avatar" />
            <div class="about">
                <div class="name">{props.name}</div>
                <div class="status"> <i></i> left {timeleft} mins ago </div>
            </div>
        </li>
    )
}
