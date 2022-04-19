import React, { useState } from "react";
import "../style/ChatScreen.css";
import LeftBar from "./LeftBar";
import SendAudio from "./modals/SendAudio";
import SendPhoto from "./SendPhoto";
import SendVideoModal from "./modals/SendVideoModal";
import { users } from "./Chat_data";
import { useEffect } from "react";
import ReactDOM from 'react-dom';
import { submitMessage, handleSubmitChange, activeMessage } from "./sendMessage";
import SendPhotoModal from "./modals/SendPhotoModal";
import DisplayMessages from "./DisplayMessages";
import SendVideo from "./SendVideo";
import existingUsers from "./usersInfo";
function ChatScreen() {
	const user = existingUsers[0];
	const [contactList, setcontactList] = useState(users[user].contacts);
	const [activeContact, setActiveContact] = useState(0);
	const [messages, setmessages] = useState([]);
	var Chatwith = users[user].contacts[activeContact].nickname;
	var Picturewith = users[user].contacts[activeContact].picture;
	if (Picturewith === "")
		Picturewith = "/avatar.jpg";
	useEffect(() => {
		setmessages(users[user].contacts[activeContact].messages);
		Chatwith = users[user].contacts[activeContact].nickname;
		Picturewith = users[user].contacts[activeContact].picture;
	}, [activeContact, messages])
	return (
		<><link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" /><div class="container">
			<div class="row clearfix">
				<div class="col-lg-12 wide">
					<div class="card chat-app">
						<div id="plist" class="people-list">
							<LeftBar contactList={contactList} setcontactList={setcontactList} setActiveContact={setActiveContact} activeContact={activeContact} user={user} users={users} messages={messages} /> </div>
						<div class="chat">
							{/*comment*/}
							<div class="chat-header clearfix">
								<div class="row">
									<div class="col-lg-6">
										<a href="javascript:void(0);" data-toggle="modal" data-target="#view_info">
											<img src={Picturewith} />
										</a>
										<div class="chat-about">
											<h5 class="m-b-0">{Chatwith}</h5>
										</div>
									</div>
									<div class="col-lg-6 hidden-sm text-right">
										<button id="Photobutton" type="button" onClick={SendPhotoModal}>
											<a href="javascript:void(0);" class="btn btn-outline-secondary"><i class="fa fa-camera"></i></a>
										</button>
										<div id="PhotoModal" class="modal">
											<div class="modal-content">
												<span class="close">&times;</span>
												<h5 class="modal-title">Send Photo</h5>
												<div class="mb-3">
													<input class="form-control" type="file" id="photoFile" />
												</div>
												<input class="btn btn-primary" type="button" value="Send" onClick={() => SendPhoto(activeContact, user, setmessages)}></input>
											</div>
										</div>
										<button id="Videobutton" type="button" onClick={SendVideoModal}>
											<a href="javascript:void(0);" class="btn btn-outline-primary"><i class="fa fa-youtube-play"></i></a>
										</button>
										<div id="VideoModal" class="modal">
											<div class="modal-content">
												<span class="close">&times;</span>
												<h5 class="modal-title">Send Video</h5>
												<div class="mb-3">
													<input class="form-control" type="file" id="videoFile" />
												</div>
												<input class="btn btn-primary" type="button" value="Send" onClick={() => SendVideo(activeContact, user, setmessages)}></input>
											</div>
										</div>
										<button id="Audiobutton" type="button" onClick={SendAudio}>
											<a href="javascript:void(0);" class="btn btn-outline-success"><i class="fa fa-microphone"></i></a>
										</button>
										<div id="AudioModal" class="modal">
											<div class="modal-content">
												<span class="close">&times;</span>
												<h5 class="modal-title">Send Record</h5>
												<div class="mb-3">
													<input class="form-control" type="file" id="formFile" />
												</div>
												<input class="btn btn-primary" type="button" value="Send"></input>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="chat-history scroller">
								<ul class="m-b-0">
									<DisplayMessages messages={messages} user={user} />
								</ul>
							</div>
							<div class="chat-message clearfix">
								<div class="input-group mb-0">
									<div class="input-group-prepend">
										<span class="input-group-text" onClick={() => submitMessage(activeContact, user, setmessages, "1")}><i class="fa fa-send"></i></span>
									</div>
									<input id='submitbox' type="text" onChange={handleSubmitChange} class="form-control" placeholder="Enter text here..." />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div></>
	);
}
export default ChatScreen;
