import React, { useState } from "react";
import Sidebar from "./Sidebar";
import VideoGrid from "./VideoGrid";
import "./CameoHome.css";

function CameoHome() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="cameo-container">
      <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      <div className={`main-content ${isSidebarOpen ? "expanded" : ""}`}>
        {/* ❌ Removed Navbar */}
        <VideoGrid />
      </div>
    </div>
  );
}

export default CameoHome;
