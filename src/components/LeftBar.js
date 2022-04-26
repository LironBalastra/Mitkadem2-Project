import React, { useState } from "react";
import { users } from "./Chat_data";
import Contact from "./Contact";
import { handleContactChange, AddContact } from "./AddNewContact";
import existingUsers from "./usersInfo";
export default function LeftBar(props) {
  const currentusername = existingUsers[0];
  const [selectedUser, setSelectedUser] = useState("");
  var stam;
  return (
    <div>
      <div className="clearfix">
        <img src={props.users[props.user].picture} width={40} height={40} />
        <div className="about float-left">
          <div className="name">{props.users[props.user].nickname}</div>
          <div className="status">
            {" "}
            <i></i>
          </div>
        </div>

        <button
          id="addnewcontact"
          type="button"
          className="btn btn-secondary float-right"
          data-toggle="modal"
          data-target="#newContactModal"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="bi bi-person-plus-fill"
            viewBox="0 0 16 16"
          >
            <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path>
            <path
              fillRule="evenodd"
              d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"
            ></path>
          </svg>
        </button>

        <div
          class="modal fade"
          id="newContactModal"
          data-backdrop="static"
          tabindex="-1"
          role="dialog"
          aria-labelledby="newContactModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="newContactModalLabel">
                  Add new contact
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <br />

              <div className="select-user-container center">
                <select onChange={handleContactChange} valu="">
                  {Object.keys(users).map((username) =>
                    currentusername != username ? (
                      <option value={users[username].nickname}>
                        {users[username].nickname}
                      </option>
                    ) : (
                      (stam = 1)
                    )
                  )}
                </select>
              </div>
              <input
                className="btn btn-secondary center"
                type="button"
                value="Add"
                onClick={() =>
                  AddContact(props.user, props.users, props.setcontactList)
                }
              ></input>
            </div>
          </div>
        </div>
      </div>
      <ul className="list-unstyled chat-list mt-2 mb-0" key={props.user}>
        {props.contactList.map((contact, index) => {
          //   console.log("------ user: ", props.user);
          //   console.log("------ index: ", index);
          //   console.log("--------------------------------------");
          return (
            <Contact
              setActiveContact={props.setActiveContact}
              activeContact={props.activeContact}
              setmessages={props.setmessages}
              index={index}
              name={contact.nickname}
              image={contact.picture}
              messages={props.messages}
              user={props.user}
              users={props.users}
            />
          );
        })}
      </ul>
    </div>
  );
}
