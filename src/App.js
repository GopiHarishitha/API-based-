import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Weather from "./weather-app/Weather";
import Food from "./Food/Food";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <div className="app row">
        <div
          className={`button-container ${isSidebarOpen ? "col-2" : "col-1"} ${
            isSidebarOpen ? "open" : "closed"
          }`}
        >
          <button className="toggle-button" onClick={toggleSidebar}>
            {isSidebarOpen ? "Close" : "Open"}
          </button>
          <Link to="/weather" className="nav-button">
            Weather
          </Link>
          <Link to="/food" className="nav-button">
            Food
          </Link>
        </div>
        <div className={`${isSidebarOpen ? "col-10" : "col-11"}`}>
          <Routes>
            <Route path="/weather" element={<Weather />} />
            <Route path="/food" element={<Food />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
