import React, { useEffect, useState } from "react";
export default function Contact(props) {

    const [selected,setSelected] = useState("");

    const clickHandler = () => {
        console.log("Clicked", props.index)
        props.setActiveContact(props.index);
    };
    
    useEffect(() => {
        if(props.activeContact===props.index) setSelected("active");
        else setSelected("");
    }, [props.activeContact])
    
    return (
        <li class={"clearfix " + selected} onClick = {clickHandler}>
            <img src={props.image} alt="avatar" />
            <div class="about">
                <div class="name">{props.name}</div>
                <div class="status"> <i class="fa fa-circle offline"></i> left 7 mins ago </div>
            </div>
        </li>
    )
}
