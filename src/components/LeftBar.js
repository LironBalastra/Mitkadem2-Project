import React from 'react'
import { users } from "./Chat_data"
import Contact from './Contact';
import AddNewContact from "./modals/AddNewContact";
export default function LeftBar(props) {
    return (
        <>
        <div class="clearfix">
        <img src={props.users[props.user].picture} width={40} height={40} />
        <div class="about float-left">
            <div class="name">{props.users[props.user].nickname}</div>
            <div class="status"> <i></i></div>
        </div>
        <button id="addnewcontact" type="button" class="btn btn-primary float-right" onClick={AddNewContact}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                class="bi bi-person-plus-fill" viewBox="0 0 16 16">
                <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path>
                <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"></path>
            </svg></button>
        <div id="newContactModal" class="modal">
            <div class="modal-content">
                <span class="close">&times;</span>
                <h5 class="modal-title">Add new contact</h5>
                <input class="form-control" id="EnterContactBox" placeholder="Contact's name" />
                <input class="btn btn-primary" type="button" value="Add"></input>
            </div>
        </div>
        </div>
         <ul class="list-unstyled chat-list mt-2 mb-0">
                {props.contactList.map((contact,index) => {
                    return (<Contact setActiveContact = {props.setActiveContact} activeContact = {props.activeContact} setmessages = {props.setmessages} index = {index} name={contact.nickname} image={contact.picture} messages ={props.messages} user={props.user} users = {props.users}/>);
                }
                )}
            </ul></>
    )
}
