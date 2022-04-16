import React, { useState } from "react";
import "../style/ChatScreen.css";
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
						<div class="chat">
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
