import React, { useState } from "react";
import "../style/ChatScreen.css";
import LeftBar from "./LeftBar";
import AddNewContact from "./modals/AddNewContact";
import SendAudio from "./modals/SendAudio";
import SendPhoto from "./modals/SendPhoto";
import SendVideo from "./modals/SendVideo";
import { users } from "./Chat_data";
import { useEffect } from "react";
import ReactDOM from 'react-dom';
function ChatScreen() {
	const user = "amit";
	const [contactList, setcontactList] = useState(users[user].contacts);
	const [activeContact, setActiveContact] = useState(1);
	const [messages, setmessages] = useState([]);
	var Chatwith = users[user].contacts[activeContact].nickname;
	var Picturewith = users[user].contacts[activeContact].picture;
	useEffect(() => {
		setmessages(users[user].contacts[activeContact].messages);
		Chatwith = users[user].contacts[activeContact].nickname;
		Picturewith = users[user].contacts[activeContact].picture;
	}, [activeContact])


	return (
		<><link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" /><div class="container">
			<div class="row clearfix">
				<div class="col-lg-12 wide">
					<div class="card chat-app">
						<div id="plist" class="people-list">
							<LeftBar contactList={contactList} setcontactList={setcontactList} setActiveContact={setActiveContact} activeContact={activeContact} /> </div>
						<div class="chat">
							{/*comment*/}
							<div class="chat-header clearfix">
								<div class="row">
									<div class="col-lg-6">
										<a href="javascript:void(0);" data-toggle="modal" data-target="#view_info">
											<img src={Picturewith} alt="avatar" />
										</a>
										<div class="chat-about">
											<h5 class="m-b-0">{Chatwith}</h5>
										</div>
									</div>
									<div class="col-lg-6 hidden-sm text-right">
										<button id="Photobutton" type="button" onClick={SendPhoto}>
											<a href="javascript:void(0);" class="btn btn-outline-secondary"><i class="fa fa-camera"></i></a>
										</button>
										<div id="PhotoModal" class="modal">
											<div class="modal-content">
												<span class="close">&times;</span>
												<h5 class="modal-title">Send Photo</h5>
												<div class="mb-3">
													<input class="form-control" type="file" id="formFile" />
												</div>
												<input class="btn btn-primary" type="button" value="Send"></input>
											</div>
										</div>
										<button id="Videobutton" type="button" onClick={SendVideo}>
											<a href="javascript:void(0);" class="btn btn-outline-primary"><i class="fa fa-youtube-play"></i></a>
										</button>
										<div id="VideoModal" class="modal">
											<div class="modal-content">
												<span class="close">&times;</span>
												<h5 class="modal-title">Send Video</h5>
												<div class="mb-3">
													<input class="form-control" type="file" id="formFile" />
												</div>
												<input class="btn btn-primary" type="button" value="Send"></input>
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
										{messages.map(message => {
											return <li class="clearfix float-up">
												<div class="message-data text-right">
												</div>
												<div class="message other-message float-right"> {message.content}</div>
											</li>
										})}
									</ul>
							</div>
							<div class="chat-message clearfix">
								<div class="input-group mb-0">
									<div class="input-group-prepend">
										<span class="input-group-text"><i class="fa fa-send"></i></span>
									</div>
									<input type="text" class="form-control" placeholder="Enter text here..." />
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
