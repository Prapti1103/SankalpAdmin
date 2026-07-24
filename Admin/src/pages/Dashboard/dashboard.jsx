import { NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
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
  BsTelephone,
  BsClipboardCheck,
  BsMegaphone,
  BsAward,
  BsTrophy,
  BsChatQuote,
} from "react-icons/bs";

import "./Dashboard.css";
import AboutSection from "../WebsiteManagement/Home/AboutSeaction/AboutSeaction";
import Footer from "../WebsiteManagement/Home/Footer/Footer";
// import Features from "../WebsiteManagement/Home/Features/Features";
import Guide from "../WebsiteManagement/Home/Guide/Guide";
import Faculty from "../WebsiteManagement/Faculty/Faculty";
import Testimonial from "../WebsiteManagement/Testimonial/Testimonial";
import Topper from "../WebsiteManagement/Topper/Topper";
import Award from "../WebsiteManagement/Award/Award";
import Student from "../StudentRegistration/Student";
// import Coordinator from "../Coordinator/Coordinator";
import Contact from "../Contact Us/Contact";
import School from "../School/School";
import District from "../District/District";
import Taluka from "../Taluka/Taluka";
import ExamCentre from "../ExamCenter/ExamCentre";
import CentreCoordinator from "../CentreCoordinator/CentreCoordinator";
import Announcement from "../Announcement/Announcement";
import Course from "../WebsiteManagement/Course/Course";
import Gallery from "../WebsiteManagement/Gallery/Gallery";
import SankalpExam from "../SankalpExam/SankalpExam";
import Service from "../WebsiteManagement/Home/Service/Service";
import CTA from "../WebsiteManagement/Home/CTA/CTA";

function Dashboard() {
  const [showWebsiteMenu, setShowWebsiteMenu] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.startsWith("/website-management")) {
      setShowWebsiteMenu(true);
    } else {
      setShowWebsiteMenu(false);
    }
  }, [location.pathname]);

  return (
    <div className="dashboard-layout">
      {/* ================= Main Left Sidebar ================= */}
      <aside className="sidebar">
        <div className="admin-profile">
          <BsPersonCircle className="admin-icon" />
          <div className="admin-details">
            <h3>Admin</h3>
           
          </div>
        </div>

        <ul className="sidebar-menu">
          {/* Main Dashboard */}
          <li>
            <NavLink
              to="/dashboard"
              end
              className={({ isActive }) => (isActive ? "menu-item active" : "menu-item")}
              onClick={() => setShowWebsiteMenu(false)}
            >
              <div className="menu-left">
                <BsHouseDoor />
                <span>Main Dashboard</span>
              </div>
            </NavLink>
          </li>

          {/* Website Management Toggle Button */}
          <li>
            <button
              className={`menu-item menu-button ${location.pathname.startsWith("/website-management") ? "active" : ""}`}
              onClick={() => setShowWebsiteMenu(!showWebsiteMenu)}
            >
              <div className="menu-left">
                <BsGlobe />
                <span>Website </span>
              </div>
              {showWebsiteMenu ? <BsChevronDown /> : <BsChevronRight />}
            </button>
          </li>

          {/* Student */}
          <li>
            <NavLink to="/students" onClick={() => setShowWebsiteMenu(false)} className={({ isActive }) => (isActive ? "menu-item active" : "menu-item")}>
              <div className="menu-left">
                <BsPeople />
                <span>Student</span>
              </div>
            </NavLink>
          </li>

          {/* Coordinator */}
          <li>
            <NavLink to="/district" onClick={() => setShowWebsiteMenu(false)} className={({ isActive }) => (isActive ? "menu-item active" : "menu-item")}>
              <div className="menu-left">
                <BsBuilding />
                <span>Destrict</span>
              </div>
            </NavLink>
          </li>

          {/* School */}
          <li>
            <NavLink to="/school" onClick={() => setShowWebsiteMenu(false)} className={({ isActive }) => (isActive ? "menu-item active" : "menu-item")}>
              <div className="menu-left">
                <BsMortarboard />
                <span>School</span>
              </div>
            </NavLink>
          </li>

          {/* Contact US */}
          <li>
            <NavLink to="/contact" onClick={() => setShowWebsiteMenu(false)} className={({ isActive }) => (isActive ? "menu-item active" : "menu-item")}>
              <div className="menu-left">
                <BsTelephone />
                <span>Contact Us</span>
              </div>
            </NavLink>
          </li>

          {/* Test Series */}
          <li>
            <NavLink to="/sankalp-exam" onClick={() => setShowWebsiteMenu(false)} className={({ isActive }) => (isActive ? "menu-item active" : "menu-item")}>
              <div className="menu-left">
                <BsClipboardCheck />
                <span>Sankalp Exam</span>
              </div>
            </NavLink>
          </li>

          {/* Announcement */}
          <li>
            <NavLink to="/announcement" onClick={() => setShowWebsiteMenu(false)} className={({ isActive }) => (isActive ? "menu-item active" : "menu-item")}>
              <div className="menu-left">
                <BsMegaphone />
                <span>Announcement</span>
              </div>
            </NavLink>
          </li>

          {/* Logout */}
          <li>
            <NavLink to="/" onClick={() => setShowWebsiteMenu(false)} className={({ isActive }) => (isActive ? "menu-item active" : "menu-item")}>
              <div className="menu-left">
                <BsBoxArrowRight />
                <span>Logout</span>
              </div>
            </NavLink>
          </li>
        </ul>
      </aside>

      {/* ================= Right Section Panel ================= */}
      <div className="main-content">
        {/* Topbar continuous header */}
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

        {/* Workspace Layout Content Area */}
        <div className="workspace-container">
          
          {/* Website Hover Expandable Sub-Sidebar */}
          {showWebsiteMenu && (
            <aside className="sub-sidebar">
              {/* <div className="sub-sidebar-header">
                <BsGlobe className="header-icon" />
                <span className="text-label header-title">Website</span>
              </div> */}

              <NavLink to="/website-management/home" className={({ isActive }) => (isActive ? "sub-menu-item active" : "sub-menu-item")}>
                <BsHouseDoor />
                <span className="text-label">Home</span>
              </NavLink>

              {/* <NavLink to="/website-management/answer-key" className={({ isActive }) => (isActive ? "sub-menu-item active" : "sub-menu-item")}>
                <BsFileEarmarkText />
                <span className="text-label">Answer Key</span>
              </NavLink> */}

              {/* <NavLink to="/website-management/exam" className={({ isActive }) => (isActive ? "sub-menu-item active" : "sub-menu-item")}>
                <BsBook />
                <span className="text-label">Exam</span>
              </NavLink> */}

              <NavLink to="/website-management/gallery" className={({ isActive }) => (isActive ? "sub-menu-item active" : "sub-menu-item")}>
                <BsImages />
                <span className="text-label">Gallery</span>
              </NavLink>

              {/* <NavLink to="/website-management/download" className={({ isActive }) => (isActive ? "sub-menu-item active" : "sub-menu-item")}>
                <BsDownload />
                <span className="text-label">Download</span>
              </NavLink> */}

              <NavLink to="/website-management/award" className={({ isActive }) => (isActive ? "sub-menu-item active" : "sub-menu-item")}>
                <BsAward />
                <span className="text-label">Award</span>
              </NavLink>

              <NavLink to="/website-management/faculty" className={({ isActive }) => (isActive ? "sub-menu-item active" : "sub-menu-item")}>
                <BsPeople />
                <span className="text-label">Faculty</span>
              </NavLink>

              <NavLink to="/website-management/topper" className={({ isActive }) => (isActive ? "sub-menu-item active" : "sub-menu-item")}>
                <BsTrophy />
                <span className="text-label">Topper</span>
              </NavLink>

              <NavLink to="/website-management/testimonial" className={({ isActive }) => (isActive ? "sub-menu-item active" : "sub-menu-item")}>
                <BsChatQuote />
                <span className="text-label">Testimonial</span>
              </NavLink>

              <NavLink to="/website-management/courses" className={({ isActive }) => (isActive ? "sub-menu-item active" : "sub-menu-item")}>
                <BsBook />
                <span className="text-label">Courses</span>
              </NavLink>
            </aside>
          )}

          {/* Dynamic Component View Panel */}
          <div className="dashboard-view">
            {location.pathname === "/dashboard" && (
              <div className="welcome-box">
                <h1>Welcome to Sankalp Dashboard</h1>
                <p>Manage your complete website from the admin panel.</p>
              </div>
            )}

            {/* Website Home Sections path routing */}
            {/* Website Home Sections path routing */}
            {/* {location.pathname === "/website-management" } */}
            {location.pathname === "/website-management/home" && <Home />}
            {location.pathname === "/website-management/home/hero" && <HeroSection />}
            {location.pathname === "/website-management/home/guide" && <Guide />}
            {location.pathname === "/website-management/home/services" && <Service/>}
            {location.pathname === "/website-management/home/about" && <AboutSection />}
            {location.pathname === "/website-management/home/cta" && <CTA/>}
            {location.pathname === "/website-management/home/footer" && <Footer />}

            {/* faculty seaction */}
            {location.pathname === "/website-management/faculty" && <Faculty/>}

            {/* testimonial Seaction */}
            {location.pathname === "/website-management/testimonial" && <Testimonial/>}

            {/* Topper Seaction */}
            {location.pathname === "/website-management/topper" && <Topper/>}

            {/* Award seeaction */}
            {location.pathname === "/website-management/award" && <Award/>}

            {/* Student section main heading */}
            {location.pathname === "/students" && <Student/>}

            {/* Coordinator Seaction */}
            {location.pathname === "/district" && <District/>}

              {/* Taluka */}
{location.pathname.startsWith("/district/") &&
 location.pathname.includes("/taluka") &&
 !location.pathname.includes("/exam-centre") && (
  <Taluka/>
)}

{/* Exam Centre */}
{location.pathname.includes("/exam-centre") &&
 !location.pathname.includes("/coordinator") && (
  <ExamCentre/>
)}

{/* Centre Coordinator */}
{location.pathname.includes("/coordinator") && (
  <CentreCoordinator/>
)}

            
            {/* Contact Seaction */}
            {location.pathname === "/contact" && <Contact/>}

            {/* School Seaction */}
            {location.pathname === "/school" && <School/>}


            {location.pathname === "/announcement" && <Announcement/>}


            {location.pathname === "/website-management/courses" && <Course/>}


            {location.pathname === "/website-management/gallery" && <Gallery/>}


            {location.pathname === "/sankalp-exam" && <SankalpExam/>}



          </div>

        </div>
      </div>
    </div>
  );
}

export default Dashboard;