import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import Home from "../WebsiteManagement/Home/Home";
import HeroSection from "../WebsiteManagement/Home/HeroSeaction/HeroSection";
import {
  BsPersonCircle,
  BsGlobe,
  BsPeople,
  BsBoxArrowRight,
  BsChevronDown,
  BsChevronRight,
  BsHouseDoor,
  BsFileEarmarkText,
  BsBook,
  BsInfoCircle,
  BsImages,
  BsDownload,
  BsBuilding,
  BsMortarboard,
} from "react-icons/bs";

import "./Dashboard.css";
import AboutSection from "../WebsiteManagement/Home/AboutSeaction/AboutSeaction";
import Footer from "../WebsiteManagement/Home/Footer/Footer";

function Dashboard() {
  const [showWebsiteMenu, setShowWebsiteMenu] = useState(false);
  const location = useLocation();

  return (
    <div className="dashboard-layout">
      {/* ================= Sidebar ================= */}
      <aside className="sidebar">
        <div className="admin-profile">
          <BsPersonCircle className="admin-icon" />
          <div className="admin-details">
            <h3>Admin</h3>
            <p>Administrator</p>
          </div>
        </div>

        <ul className="sidebar-menu">
          {/* Website Management */}
          <li>
            <button className="menu-item menu-button" onClick={() => setShowWebsiteMenu(!showWebsiteMenu)}>
              <div className="menu-left">
                <BsGlobe />
                <span>Website Management</span>
              </div>
              {showWebsiteMenu ? <BsChevronDown /> : <BsChevronRight />}
            </button>
          </li>

          {/* Student */}
          <li>
            <NavLink to="/student" className={({ isActive }) => isActive ? "menu-item active" : "menu-item"}>
              <div className="menu-left">
                <BsPeople />
                <span>Student</span>
              </div>
            </NavLink>
          </li>

          {/* Coordinator */}
          <li>
            <NavLink to="/coordinator" className={({ isActive }) => isActive ? "menu-item active" : "menu-item"}>
              <div className="menu-left">
                <BsBuilding />
                <span>Coordinator</span>
              </div>
            </NavLink>
          </li>

          {/* School */}
          <li>
            <NavLink to="/school" className={({ isActive }) => isActive ? "menu-item active" : "menu-item"}>
              <div className="menu-left">
                <BsMortarboard />
                <span>School</span>
              </div>
            </NavLink>
          </li>

          {/* Logout */}
          <li>
            <NavLink to="/" className="menu-item">
              <div className="menu-left">
                <BsBoxArrowRight />
                <span>Logout</span>
              </div>
            </NavLink>
          </li>
        </ul>
      </aside>

      {/* ================= Website Sidebar ================= */}
      {showWebsiteMenu && (
        <aside className="sub-sidebar">
          <h3>Website</h3>

          <NavLink to="/website-management/home" className={({ isActive }) => isActive ? "sub-menu-item active" : "sub-menu-item"}>
            <BsHouseDoor />
            <span>Home</span>
          </NavLink>

          <NavLink to="/website-management/answer-key" className={({ isActive }) => isActive ? "sub-menu-item active" : "sub-menu-item"}>
            <BsFileEarmarkText />
            <span>Answer Key</span>
          </NavLink>

          <NavLink to="/website-management/exam" className={({ isActive }) => isActive ? "sub-menu-item active" : "sub-menu-item"}>
            <BsBook />
            <span>Exam</span>
          </NavLink>

          <NavLink to="/website-management/about" className={({ isActive }) => isActive ? "sub-menu-item active" : "sub-menu-item"}>
            <BsInfoCircle />
            <span>About</span>
          </NavLink>

          <NavLink to="/website-management/gallery" className={({ isActive }) => isActive ? "sub-menu-item active" : "sub-menu-item"}>
            <BsImages />
            <span>Gallery</span>
          </NavLink>

          <NavLink to="/website-management/download" className={({ isActive }) => isActive ? "sub-menu-item active" : "sub-menu-item"}>
            <BsDownload />
            <span>Download</span>
          </NavLink>
        </aside>
      )}

      {/* ================= Main ================= */}
      <div className={showWebsiteMenu ? "main-content expanded" : "main-content"}>
        {/* Topbar */}
        <header className="topbar">
          <div className="dashboard-title">MY DASHBOARD</div>

          <nav className="nav-links">
            <NavLink to="/t1">T1</NavLink>
            <NavLink to="/t2">T2</NavLink>
            <NavLink to="/t3">T3</NavLink>
            <NavLink to="/settings">Settings</NavLink>
          </nav>

          <div className="profile-icon">
            <BsPersonCircle />
          </div>
        </header>

        {/* ================= Content ================= */}
        <main className="dashboard-content">
          {/* Dashboard Welcome */}
          {location.pathname === "/dashboard" && (
            <div className="welcome-box">
              <h1>Welcome to Sankalp Dashboard</h1>
              <p>Manage your complete website from the admin panel.</p>
            </div>
          )}

          {/* Website Home */}
          {location.pathname === "/website-management/home" && <Home />}

          {/* Hero Section */}
          {location.pathname === "/website-management/home/hero" && <HeroSection />}

          {/* Future Sections */}
          {/* {location.pathname === "/website-management/home/services" && <Services />} */}
          {/* {location.pathname === "/website-management/home/guide" && <Guide />} */}
          {location.pathname === "/website-management/home/about" && <AboutSection/>}
          {/* {location.pathname === "/website-management/home/features-contact" && <Features />} */}
          {location.pathname === "/website-management/home/footer" && <Footer/>}
        </main>
      </div>
    </div>
  );
}

export default Dashboard;