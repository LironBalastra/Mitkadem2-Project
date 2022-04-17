import React from 'react'
import {users} from "./Chat_data"
import AddNewContact from "./modals/AddNewContact";
export default function LeftBar() {
    
  return (
    <div id="plist" class="people-list">
    <div class="clearfix">
        <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="avatar" width={40} height={40} />
        <div class="about float-left">
            <div class="name">Amit Cohen</div>
            <div class="status"> <i class="fa fa-circle online"></i></div>
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
        <li class="clearfix">
            <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="avatar" />
            <div class="about">
                <div class="name">Vincent Porter</div>
                <div class="status"> <i class="fa fa-circle offline"></i> left 7 mins ago </div>
            </div>
        </li>
        <li class="clearfix active">
            <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="avatar" />
            <div class="about">
                <div class="name">Aiden Chavez</div>
                <div class="status"> <i class="fa fa-circle online"></i> online </div>
            </div>
        </li>
        <li class="clearfix">
            <img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="avatar" />
            <div class="about">
                <div class="name">Mike Thomas</div>
                <div class="status"> <i class="fa fa-circle online"></i> online </div>
            </div>
        </li>
        <li class="clearfix">
            <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="avatar" />
            <div class="about">
                <div class="name">Christian Kelly</div>
                <div class="status"> <i class="fa fa-circle offline"></i> left 10 hours ago </div>
            </div>
        </li>
        <li class="clearfix">
            <img src="https://bootdey.com/img/Content/avatar/avatar8.png" alt="avatar" />
            <div class="about">
                <div class="name">Monica Ward</div>
                <div class="status"> <i class="fa fa-circle online"></i> online </div>
            </div>
        </li>
        <li class="clearfix">
            <img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="avatar" />
            <div class="about">
                <div class="name">Dean Henry</div>
                <div class="status"> <i class="fa fa-circle offline"></i> offline since Oct 28 </div>
            </div>
        </li>
    </ul>
</div>
  )
}
