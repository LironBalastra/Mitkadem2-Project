import React from "react";
import { useState, Routes, Route } from "react";
import existingUsers from "./usersInfo";
import { Link, useNavigate } from "react-router-dom";
import { users } from "./Chat_data";
import existingContacts from "./contacts";
import isRefresh from "./refreshGlobal";

function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPaswword] = useState("");
  const [confirmPassword, SetConfirmPassword] = useState("");
  const [nickname, setNickname] = useState("");
  var userImageURL = ""; // date userImage url
  const navigate = useNavigate();

  function isUserExists() {
    for (var existsUsername in users) {
      if (username == existsUsername) {
        return true;
      }
    }
    return false;
  }

  function setImage(e) {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      userImageURL = reader.result;
    });

    reader.readAsDataURL(e.target.files[0]);
  }

  function checkUserDetails() {
    var flag = false;
    const emptyFields = !username || !nickname || !password || !confirmPassword;
    const passContainsNumbers = /\d/.test(password);
    var img = document.getElementById("userImg").files[0];
    if (emptyFields) {
      createAlart("Please fill all the fields.", "emptyField");
    } else if (img == "undefined" || img == null) {
      createAlart("Select image.", "emptyField");
    } else if (isUserExists()) {
      createAlart("User is already exists.", "userExists");
    } else if (!passContainsNumbers) {
      createAlart(
        "Password should contain at least one number.",
        "passwordError"
      );
    } else if (password.length < 8 || password.length > 20) {
      createAlart("Password should be 8-20 characters.", "passwordError");
    } else if (password != confirmPassword) {
      createAlart(
        "Password and confirm password should be same.",
        "passwordError"
      );
    } // success
    else {
      flag = true;
      isRefresh.refresh = false;
      var constContacts = {
        nickname: nickname,
        password: password,
        picture: userImageURL,
        contacts: [],
      };
      users[username] = constContacts;
      existingUsers[0] = username;
    }
    return flag;
  }

  function createAlart(mess) {
    var messTag = document.createElement("div");
    var text = document.createTextNode(mess);
    messTag.appendChild(text);
    messTag.classList.add("alert");
    messTag.classList.add("alert-primary");
    messTag.id = "alartMess";
    var element = document.getElementById("message");
    element.appendChild(messTag);
  }
  function removeAlart() {
    var alartElement = document.getElementById("alartMess");
    if (alartElement != null && typeof alartElement != "undefined") {
      alartElement.remove();
    }
  }

  const submitValue = (event) => {
    event.preventDefault();
    removeAlart();
    if (checkUserDetails()) {
      navigate("/./");
    }
  };

  return (
    <div className="sign-container">
      <h3 className="text-white">Sign Up</h3>
      <div className="container-content">
        <br />
        <form>
          <div className="form-group mb-2">
            <input
              type="text"
              className="form-control"
              id="username"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group mb-2">
            <input
              type="text"
              className="form-control"
              id="nickname"
              placeholder="Nickname"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
            />
          </div>
          <div className="form-group mb-2">
            <input
              type="password"
              id="password"
              className="form-control"
              placeholder="Password"
              value={password}
              onChange={(e) => setPaswword(e.target.value)}
            />
          </div>
          <div className="form-group mb-2">
            <input
              type="password"
              className="form-control"
              placeholder="Confirm Password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => SetConfirmPassword(e.target.value)}
            />
          </div>
          <div className="input-group text-white">
            <div className="input-group-prepend"></div>
            <div className="custom-file">
              <label className="custom-file-label">Select Image:</label>
              <input
                type="file"
                className="custom-file-input"
                id="userImg"
                onChange={setImage}
                accept="image/*"
              ></input>
            </div>
          </div>
          <br></br>
          <button
            onClick={submitValue}
            type="submit"
            className="form-button w-80 mb-4"
          >
            Sign Up
          </button>
          <div className="text-white text-c">
            Already Registered?
            <nav>
              {" "}
              <Link to="/" className="text-white">
                {" "}
                Click here to login{" "}
              </Link>
            </nav>
          </div>
          <br></br>
          <div id="message"></div>
        </form>
      </div>
    </div>
  );
}
export default SignUp;
