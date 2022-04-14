import React, { useState } from "react";
import "../style/Login.css";
import { Link, useNavigate } from "react-router-dom";
import existingUsers from "./usersInfo";
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPaswword] = useState("");
  const navigate = useNavigate();

  function isUserExists() {
    for (var existsUsername in existingUsers) {
      if (username == existsUsername) {
        return true;
      }
    }
    return false;
  }

  function checkUserDetails(event) {
    var flag = false;
    const emptyFields = !username || !password;
    if (emptyFields) {
      createAlart("Please fill all the fields.", "emptyField");
    } else if (!isUserExists()) {
      createAlart("Username or Password is incorrect.", "detasilsError");
    } else {
      const correctPassword = password == existingUsers[username].password;
      if (!correctPassword) {
        createAlart("Username or Password is incorrect.", "detasilsError");
      }
      //success
      else {
        flag = true;
        createAlart("log in!", "detasilsError");
      }
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
      navigate("/./chat");
    }
  };

  return (
    <div className="sign-container">
      <h3 className="text-white">Login</h3>
      <div className="container-content">
        <br />
        <form>
          <div className="form-group mb-2">
            <input
              type="terxt"
              className="form-control"
              id="username"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group mb-2">
            <input
              type="password"
              id="password"
              className="form-control"
              placeholder="Password"
              onChange={(e) => setPaswword(e.target.value)}
            />
          </div>
          <br></br>
          <button
            type="submit"
            className="form-button mb-4"
            onClick={submitValue}
          >
            Login
          </button>
          <div className="text-white text-c">
            Do not have an account?
            <br />
            <nav>
              {" "}
              <Link to="/signup" className="text-white">
                {" "}
                Sign Up{" "}
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
export default Login;
