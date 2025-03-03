import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom"; 
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import CameoHome from "./components/CameoHome";
import SourceWorld from "./components/SourceWorld";
import Channel from "./components/Channel";
import SourceMeet from "./components/SourceMeet";

function Layout() {
  const location = useLocation();
  const showNavbar = location.pathname === "/"; // Show Navbar only on CameoHome
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Sidebar state

  return (
    <div className="app">
      <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />  
      <div className="main-content">
        {showNavbar && <Navbar />}
        <Routes>
          <Route path="/" element={<CameoHome />} />
          <Route path="/source-world" element={<SourceWorld />} />
          <Route path="/channel" element={<Channel />} />
          <Route path="/source-meet" element={<SourceMeet />} />
        </Routes>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
