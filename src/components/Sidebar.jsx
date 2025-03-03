import React from "react";
import { Link } from "react-router-dom";
import { Home, Globe, User, Video, MessageSquare } from "lucide-react";
import "./Sidebar.css";

function Sidebar({ isSidebarOpen, setIsSidebarOpen }) {
  return (
    <div
      className={`sidebar ${isSidebarOpen ? "open" : "closed"}`}
      onMouseEnter={() => setIsSidebarOpen(true)}
      onMouseLeave={() => setIsSidebarOpen(false)}
    >
      <div className="sidebar-header">
        {isSidebarOpen ? (
          <h2 className="sidebar-text">CameoGrat</h2>
        ) : (
          <img src="src/circular_logo.png" alt="CameoGrat Logo" className="sidebar-logo" />
        )}
      </div>

      <ul className="sidebar-menu">
        <li>
          <Link to="/" className="sidebar-link">
            <Home size={24} />
            {isSidebarOpen && <span>Home</span>}
          </Link>
        </li>
        <li>
          <Link to="/source-world" className="sidebar-link">
            <Globe size={24} />
            {isSidebarOpen && <span>Source World</span>}
          </Link>
        </li>
        <li>
          <Link to="/channel" className="sidebar-link">
            <User size={24} />
            {isSidebarOpen && <span>Channel</span>}
          </Link>
        </li>
        <li>
          <Link to="/source-meet" className="sidebar-link">
            <Video size={24} />
            {isSidebarOpen && <span>Source Meet</span>}
          </Link>
        </li>
        <li>
          <Link to="/pro-post" className="sidebar-link">
            <MessageSquare size={24} />
            {isSidebarOpen && <span>Pro Post</span>}
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
