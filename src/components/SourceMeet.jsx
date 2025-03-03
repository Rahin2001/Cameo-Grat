import React, { useState, useRef } from "react";
import { FaVideo, FaDesktop, FaPhoneSlash } from "react-icons/fa";
import "./SourceMeet.css";

const SourceMeet = () => {
  const [isCallActive, setIsCallActive] = useState(false);
  const localVideoRef = useRef(null);
  const remoteVideoRef = useRef(null);

  const startCall = () => {
    setIsCallActive(true);
    // Video stream logic (WebRTC or external API can be used here)
  };

  const endCall = () => {
    setIsCallActive(false);
    // Stop video stream logic
  };

  const shareScreen = () => {
    navigator.mediaDevices.getDisplayMedia({ video: true })
      .then(stream => {
        if (localVideoRef.current) {
          localVideoRef.current.srcObject = stream;
        }
      })
      .catch(error => console.error("Error sharing screen:", error));
  };

  return (
    <div className="source-meet-container">
      <h2 className="title">SourceMeet - Video Call & Screen Share</h2>
      <div className="video-container">
        <video ref={localVideoRef} autoPlay playsInline className="video-box" />
        <video ref={remoteVideoRef} autoPlay playsInline className="video-box remote" />
      </div>
      <div className="controls">
        {!isCallActive ? (
          <button className="call-btn" onClick={startCall}><FaVideo /> Start Call</button>
        ) : (
          <>
            <button className="screen-share-btn" onClick={shareScreen}><FaDesktop /> Share Screen</button>
            <button className="end-call-btn" onClick={endCall}><FaPhoneSlash /> End Call</button>
          </>
        )}
      </div>
    </div>
  );
};

export default SourceMeet;