import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FaGlobe, FaUsers, FaSignOutAlt, FaChevronDown, FaChevronRight, FaHome, FaClipboardList, FaBookOpen, FaSignInAlt, FaInfoCircle, FaImages, FaDownload } from "react-icons/fa";
import "./Sidebar.css";

function Sidebar() {
  const [openWebsite, setOpenWebsite] = useState(false);

  return (
    <div className="sidebar">
      <h2 className="sidebar-logo">Admin Panel</h2>

      <div className="sidebar-menu">

        <button className="menu-btn" onClick={() => setOpenWebsite(!openWebsite)}>
          <span>
            <FaGlobe className="menu-icon" />
            Website Management
          </span>

          {openWebsite ? <FaChevronDown /> : <FaChevronRight />}
        </button>

        {openWebsite && (
          <div className="submenu">

            <NavLink to="/home">
              <FaHome />
              Home
            </NavLink>

            <NavLink to="/answer-key">
              <FaClipboardList />
              Answer Key
            </NavLink>

            <NavLink to="/exam">
              <FaBookOpen />
              Exam
            </NavLink>

            <NavLink to="/login-page">
              <FaSignInAlt />
              Login
            </NavLink>

            <NavLink to="/about">
              <FaInfoCircle />
              About
            </NavLink>

            <NavLink to="/gallery">
              <FaImages />
              Gallery
            </NavLink>

            <NavLink to="/download">
              <FaDownload />
              Download
            </NavLink>

          </div>
        )}

        <NavLink to="/users" className="menu-link">
          <FaUsers className="menu-icon" />
          Users
        </NavLink>

        <NavLink to="/" className="menu-link">
          <FaSignOutAlt className="menu-icon" />
          Logout
        </NavLink>

      </div>
    </div>
  );
}

export default Sidebar;