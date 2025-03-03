import React, { useState, useEffect, useRef } from "react";
import { Bell, Settings, ChevronDown, Search } from "lucide-react";
import "./Navbar.css";

function Navbar({ isSidebarOpen }) {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  // Function to toggle dropdown
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className={`navbar ${isSidebarOpen ? "expanded" : ""}`}>
      {/* Left - Logo or Title */}
      <div className="nav-left">
        <h1 className="nav-title">CameoGrat</h1>
      </div>

      {/* Center - Search Bar */}
      <div className="nav-center">
        <div className="search-container">
          <Search size={20} color="white" className="search-icon" />
          <input type="text" placeholder="Search..." className="search-box" />
        </div>
      </div>

      {/* Right - Icons and User Profile */}
      <div className="nav-right">
        <div className="icon-container">
          <Bell size={24} color="white" />
        </div>
        <div className="icon-container">
          <Settings size={24} color="white" />
        </div>

        {/* User Profile */}
        <div className="user-profile" onClick={toggleDropdown} ref={dropdownRef}>
          <img src="/user-avatar.png" alt="User" className="user-avatar" />
          <ChevronDown size={20} color="white" />

          {/* Dropdown Menu */}
          {showDropdown && (
            <div className="dropdown-menu">
              <p className="dropdown-item">Switch User</p>
              <p className="dropdown-item">Sign Out</p>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
