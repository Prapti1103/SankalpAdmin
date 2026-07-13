import { NavLink } from "react-router-dom";
import { useState } from "react";
import Home from "../WebsiteManagement/Home/Home";
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
  BsBoxArrowInRight,
  BsInfoCircle,
  BsImages,
  BsDownload,
} from "react-icons/bs";
import "./Dashboard.css";

function Dashboard() {

  const [showWebsiteMenu, setShowWebsiteMenu] = useState(false);

  const [selectedPage, setSelectedPage] = useState("dashboard");

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

          <li>

            <NavLink to="/website-management" className="menu-item">
                <button className="menu-item menu-button" onClick={() => setShowWebsiteMenu(!showWebsiteMenu)}>

              <div className="menu-left">

                <BsGlobe />

                <span>Website Management</span>

              </div>

              {showWebsiteMenu ? <BsChevronDown /> : <BsChevronRight />}

            </button>
            </NavLink>

          </li>

          <li>

            <NavLink to="/users" className={({ isActive }) => isActive ? "menu-item active" : "menu-item"}>

              <div className="menu-left">

                <BsPeople />

                <span>Users</span>

              </div>

            </NavLink>

          </li>

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

         <NavLink to="/website-management/home" onClick={() => setSelectedPage("home")}>

  <BsHouseDoor />

  <span>Home</span>

</NavLink>

          <NavLink to="/website-management/answer-key">

            <BsFileEarmarkText />

            <span>Answer Key</span>

          </NavLink>

          <NavLink to="/website-management/exam">

            <BsBook />

            <span>Exam</span>

          </NavLink>

          <NavLink to="/website-management/login">

            <BsBoxArrowInRight />

            <span>Login</span>

          </NavLink>

          <NavLink to="/website-management/about">

            <BsInfoCircle />

            <span>About</span>

          </NavLink>

          <NavLink to="/website-management/gallery">

            <BsImages />

            <span>Gallery</span>

          </NavLink>

          <NavLink to="/website-management/download">
 
            <BsDownload />

            <span>Download</span>

          </NavLink>

        </aside>

      )}

      {/* ================= Main ================= */}

      <div className={showWebsiteMenu ? "main-content expanded" : "main-content"}>

        <header className="topbar">

          <div className="dashboard-title">

            MY DASHBOARD

          </div>

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

                <main className="dashboard-content">

          {selectedPage === "home" ? (

            <Home />

          ) : (

            <div className="welcome-box">

              <h1>Welcome to Sankalp Dashboard</h1>

              <p>

                Manage your complete website from the admin panel.

              </p>

            </div>

          )}

        </main>

      </div>

    </div>

  );

}

export default Dashboard;