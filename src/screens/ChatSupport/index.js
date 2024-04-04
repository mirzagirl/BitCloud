// ChatSupport.jsx
import React, { useState } from "react";
import "./ChatSupport.module.sass";
import { useDispatch, useSelector } from "react-redux";
import { openChatSupport } from "../../redux-saga/redux/settings"

const ChatSupport = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const {
    chatOpen,
  } = useSelector((state) => state.settings);

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText.trim() !== "") {
      setMessages([...messages, { text: inputText, sender: "user" }]);
      setInputText("");
    }
  };

  const toggleChatDrawer = () => {
    setIsOpen(!isOpen);
    dispatch(openChatSupport(!chatOpen));
  };

  return (
    <div className={`chat-support-container ${chatOpen ? "open" : ""}`}>
      <button className="toggle-button" onClick={toggleChatDrawer}>
        {chatOpen ? "Close Chat" : "Open Chat"}
      </button>
      <div className="chat-window">
        {/* Chat Messages */}
        <div className="chat-messages">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`message ${message.sender === "user" ? "user" : "support"}`}
            >
              {message.text}
            </div>
          ))}
        </div>
        {/* Message Input */}
        <form className="message-input" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Type your message..."
            value={inputText}
            onChange={handleInputChange}
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default ChatSupport;
