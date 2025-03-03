import React, { useState } from "react";
import "./Channel.css";

const developers = [
  {
    id: 1,
    name: "Amit Kumar",
    position: "Frontend Developer",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,
    name: "Priya Sharma",
    position: "Backend Developer",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    id: 3,
    name: "Rajesh Patel",
    position: "Full-Stack Developer",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    id: 4,
    name: "Neha Verma",
    position: "Data Scientist",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    id: 5,
    name: "Vikram Singh",
    position: "DevOps Engineer",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
];

function Channel() {
  const [selectedDev, setSelectedDev] = useState(null);
  const [messages, setMessages] = useState([]);
  const [messageCount, setMessageCount] = useState(0);
  const [newMessage, setNewMessage] = useState("");

  const sendMessage = () => {
    if (newMessage.trim() === "") return;
    setMessages([...messages, { sender: "You", text: newMessage }]);
    setNewMessage("");
    setMessageCount(messageCount + 1);
  };

  return (
    <div className="channel-container">
      {/* Developer List */}
      <div className="developer-list">
        <h2>Connect with IT Experts</h2>
        {developers.map((dev) => (
          <div
            key={dev.id}
            className={`developer-card ${selectedDev?.id === dev.id ? "selected" : ""}`}
            onClick={() => setSelectedDev(dev)}
          >
            <img src={dev.image} alt={dev.name} className="developer-image" />
            <div className="developer-info">
              <h3>{dev.name}</h3>
              <p>{dev.position}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Chat Section */}
      <div className="chat-section">
        {selectedDev ? (
          <>
            <div className="chat-header">
              <img src={selectedDev.image} alt={selectedDev.name} className="chat-avatar" />
              <h3>{selectedDev.name}</h3>
            </div>
            <div className="chat-messages">
              {messages.map((msg, index) => (
                <div key={index} className={`message ${msg.sender === "You" ? "sent" : "received"}`}>
                  <p>{msg.text}</p>
                </div>
              ))}
            </div>
            {messageCount < 20 ? (
              <div className="chat-input">
                <input
                  type="text"
                  placeholder="Type a message..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                />
                <button onClick={sendMessage}>Send</button>
              </div>
            ) : (
              <div className="payment-notice">
                <p>Free messages limit reached! Pay ₹25 to continue chatting.</p>
                <button className="pay-btn">Pay ₹25</button>
              </div>
            )}
          </>
        ) : (
          // Replace text with a video simulation
          <div className="video-placeholder">
            <video autoPlay loop muted>
              <source src="chat-simulation.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        )}
      </div>
    </div>
  );
}

export default Channel;
