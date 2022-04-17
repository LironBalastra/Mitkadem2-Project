import React, { useState } from "react";
import "../style/ChatScreen.css";
import LeftBar from "./LeftBar";
import AddNewContact from "./modals/AddNewContact";
import SendAudio from "./modals/SendAudio";
import SendPhoto from "./modals/SendPhoto";
import SendVideo from "./modals/SendVideo";
function ChatScreen() {

	return (
		<><link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" /><div class="container">
			<div class="row clearfix">
				<div class="col-lg-12">
					<div class="card chat-app">
						<LeftBar />
						<div class="chat">
						{/*comment*/}
							<div class="chat-header clearfix">
								<div class="row">
									<div class="col-lg-6">
										<a href="javascript:void(0);" data-toggle="modal" data-target="#view_info">
											<img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="avatar" />
										</a>
										<div class="chat-about">
											<h6 class="m-b-0">Aiden Chavez</h6>
											<small>Last seen: 2 hours ago</small>
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
							<div class="chat-history">
								<ul class="m-b-0">
									<li class="clearfix">
										<div class="message-data text-right">
											<span class="message-data-time">10:10 AM, Today</span>
											<img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="avatar" />
										</div>
										<div class="message other-message float-right"> Hi Aiden, how are you?How is the project coming along?</div>
									</li>
									<li class="clearfix">
										<div class="message-data">
											<span class="message-data-time">10:12 AM, Today</span>
										</div>
										<div class="message my-message">Are we meeting today?</div>
									</li>
									<li class="clearfix">
										<div class="message-data">
											<span class="message-data-time">10:15 AM, Today</span>
										</div>
										<div class="message my-message">Project has been already finished and I have results to show you.</div>
									</li>
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
