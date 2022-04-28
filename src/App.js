import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navigate, useNavigate } from "react-router-dom";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import ChatScreen from "./components/ChatScreen";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route exact path="/chat" element={<ChatScreen />} />
    </Routes>
  );
}
export default App;
