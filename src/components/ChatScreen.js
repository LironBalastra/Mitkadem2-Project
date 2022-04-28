import React, { useState } from "react";
import "../style/ChatScreen.css";
import LeftBar from "./LeftBar";
import SendPhoto from "./SendPhoto";
import { users } from "./Chat_data";
import { useEffect } from "react";
import ReactDOM from "react-dom";
import { RecordAudio, stopRecord } from "./RecordAudio";
import {
  submitMessage,
  handleSubmitChange,
  activeMessage,
} from "./sendMessage";
import DisplayMessages from "./DisplayMessages";
import { useNavigate } from "react-router-dom";
import SendVideo from "./SendVideo";
import existingUsers from "./usersInfo";
import isRefresh from "./refreshGlobal";
function ChatScreen() {
  if (isRefresh.refresh) {
    window.location.href = "/";
    return;
  }
  const user = existingUsers[0];
  const [contactList, setcontactList] = useState(users[user].contacts);
  const [activeContact, setActiveContact] = useState(0);
  const [messages, setmessages] = useState([]);
  var Chatwith = "";
  var Picturewith = "";
  if (users[user].contacts.length != 0) {
    Chatwith = users[user].contacts[activeContact].nickname;
    Picturewith = users[user].contacts[activeContact].picture;
    if (Picturewith === "") Picturewith = "/avatar.jpg";
    useEffect(() => {
      setmessages(users[user].contacts[activeContact].messages);
      Chatwith = users[user].contacts[activeContact].nickname;
      Picturewith = users[user].contacts[activeContact].picture;
    }, [activeContact, messages]);
  }

  function DisableBtn(flag) {
    document.getElementById("sendAudioBtn").disabled = flag;
  }

  return (
    <div>
      <link
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        rel="stylesheet"
      />
      <div className="container">
        <div className="row clearfix">
          <div className="col-lg-12 wide">
            <div className="card chat-app">
              <div id="plist" className="people-list">
                <LeftBar
                  contactList={contactList}
                  setcontactList={setcontactList}
                  setActiveContact={setActiveContact}
                  activeContact={activeContact}
                  user={user}
                  users={users}
                  messages={messages}
                />{" "}
              </div>
              <div className="chat">
                {/*comment*/}
                <div className="chat-header clearfix">
                  <div className="row">
                    <div className="col-lg-6">
                      <a
                        href="javascript:void(0);"
                        data-toggle="modal"
                        data-target="#view_info"
                      >
                        <img src={Picturewith} />
                      </a>
                      <div className="chat-about">
                        <h5 className="m-b-0">{Chatwith}</h5>
                      </div>
                    </div>
                    <div className="col-lg-6 hidden-sm text-right">
                      <button
                        id="Photobutton"
                        type="button"
                        class="btn btn-secondary"
                        data-toggle="modal"
                        data-target="#PhotoModal"
                        onClick={() => {
                          document.getElementById("photoFile").value = "";
                          document.getElementById("sendImgBtn").disabled = true;
                        }}
                      >
                        <i className="fa fa-camera"></i>
                      </button>

                      <div
                        class="modal fade"
                        id="PhotoModal"
                        data-backdrop="static"
                        tabindex="-1"
                        role="dialog"
                        aria-labelledby="PhotoModalLabel"
                        aria-hidden="true"
                      >
                        <div class="modal-dialog" role="document">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h5 class="modal-title" id="PhotoModalLabel">
                                Send Photo
                              </h5>
                              <button
                                type="button"
                                class="btn-close"
                                data-dismiss="modal"
                                aria-label="Close"
                              ></button>
                            </div>
                            <div className="mb-3">
                              <input
                                className="form-control"
                                type="file"
                                id="photoFile"
                                accept="image/*"
                                onChange={() => {
                                  document.getElementById(
                                    "sendImgBtn"
                                  ).disabled = false;
                                }}
                              />
                            </div>
                            <input
                              id="sendImgBtn"
                              data-dismiss="modal"
                              className="btn btn-secondary"
                              type="button"
                              value="Send"
                              onClick={() =>
                                SendPhoto(activeContact, user, setmessages)
                              }
                            ></input>
                          </div>
                        </div>
                      </div>

                      <button
                        id="Videobutton"
                        type="button"
                        class="btn btn-secondary"
                        data-toggle="modal"
                        data-target="#VideoModal"
                        onClick={() => {
                          document.getElementById("videoFile").value = "";
                          document.getElementById(
                            "sendVideoBtn"
                          ).disabled = true;
                        }}
                      >
                        <i className="fa fa-youtube-play"></i>
                      </button>

                      <div
                        class="modal fade"
                        id="VideoModal"
                        data-backdrop="static"
                        tabindex="-1"
                        role="dialog"
                        aria-labelledby="VideoModalLabel"
                        aria-hidden="true"
                      >
                        <div class="modal-dialog" role="document">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h5 class="modal-title" id="VideoModalLabel">
                                Send Video
                              </h5>
                              <button
                                type="button"
                                class="btn-close"
                                data-dismiss="modal"
                                aria-label="Close"
                              ></button>
                            </div>
                            <div className="mb-3">
                              <input
                                className="form-control"
                                type="file"
                                id="videoFile"
                                accept="video/*"
                                onChange={() => {
                                  document.getElementById(
                                    "sendVideoBtn"
                                  ).disabled = false;
                                }}
                              />
                            </div>
                            <input
                              id="sendVideoBtn"
                              data-dismiss="modal"
                              className="btn btn-secondary"
                              type="button"
                              value="Send"
                              onClick={() =>
                                SendVideo(activeContact, user, setmessages)
                              }
                            ></input>
                          </div>
                        </div>
                      </div>

                      <button
                        id="Audiobutton"
                        type="button"
                        class="btn btn-secondary"
                        data-toggle="modal"
                        data-target="#AudioModal"
                        onClick={() => DisableBtn(true)}
                      >
                        <i className="fa fa-microphone"></i>
                      </button>

                      <div
                        class="modal fade"
                        id="AudioModal"
                        data-backdrop="static"
                        tabindex="-1"
                        role="dialog"
                        aria-labelledby="AudioModalLabel"
                        aria-hidden="true"
                      >
                        <div class="modal-dialog" role="document">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h5 class="modal-title" id="AudioModalLabel">
                                Send Record
                              </h5>
                              <button
                                type="button"
                                class="btn-close"
                                data-dismiss="modal"
                                aria-label="Close"
                              ></button>
                            </div>
                            <div className="mb-3">
                              <button
                                id="Audiobutton"
                                className="float-center"
                                type="button"
                                onClick={() => {
                                  {
                                    DisableBtn(false);
                                  }
                                  RecordAudio();
                                }}
                              >
                                <a
                                  href="javascript:void(0);"
                                  className="bi bi-record-circle"
                                >
                                  <i className="fa fa-microphone"></i>
                                </a>
                              </button>
                            </div>
                            <input
                              data-dismiss="modal"
                              className="btn btn-secondary"
                              type="button"
                              id="sendAudioBtn"
                              value="Send"
                              onClick={() => {
                                stopRecord(activeContact, user, setmessages);
                              }}
                            ></input>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="chat-history scroller">
                  <ul className="m-b-0">
                    <DisplayMessages messages={messages} user={user} />
                  </ul>
                </div>
                <div className="chat-message clearfix">
                  <div className="input-group mb-0">
                    <div className="input-group-prepend">
                      <span
                        className="input-group-text"
                        onClick={() =>
                          submitMessage(activeContact, user, setmessages, "1")
                        }
                      >
                        <i className="fa fa-send"></i>
                      </span>
                    </div>
                    <input
                      id="submitbox"
                      type="text"
                      onChange={handleSubmitChange}
                      className="form-control"
                      placeholder="Enter text here..."
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ChatScreen;
