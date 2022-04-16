import React from "react";
import { Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import ChatScreen from "./components/ChatScreen";
function App() {
  return (
    <Routes>
      <Route path="/" element={<ChatScreen/>} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/chat" element={<Login />} />
    </Routes>
  );
}
export default App;
