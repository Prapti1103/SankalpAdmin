import { NavLink } from "react-router-dom";
import {
  BsBell,
  BsPersonCircle,
  BsGlobe,
  BsPeople,
  BsBoxArrowRight,
  BsChevronDown,
} from "react-icons/bs";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard-layout">

      {/* Sidebar */}

      <aside className="sidebar">

        <div className="logo">
          <h2>Admin Panel</h2>
        </div>

        <ul className="sidebar-menu">

          <li>
            <NavLink to="/website-management" className={({ isActive }) => isActive ? "menu-item active" : "menu-item"}>

              <div className="menu-left">
                <BsGlobe />
                <span>Website Management</span>
              </div>

              <BsChevronDown />

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

      {/* Main */}

      <div className="main-content">

        {/* Navbar */}

        <header className="topbar">

          <div className="nav-links">

            <NavLink to="/t1" className={({ isActive }) => isActive ? "nav-active" : ""}>
              T1
            </NavLink>

            <NavLink to="/t2" className={({ isActive }) => isActive ? "nav-active" : ""}>
              T2
            </NavLink>

            <NavLink to="/t3" className={({ isActive }) => isActive ? "nav-active" : ""}>
              T3
            </NavLink>

            <NavLink to="/settings" className={({ isActive }) => isActive ? "nav-active" : ""}>
              Settings
            </NavLink>

          </div>

          <div className="top-icons">

            <BsBell />

            <BsPersonCircle />

          </div>

        </header>

        {/* Content */}

        <main className="dashboard-content">

          <div className="welcome-box">

            <h2>Welcome Admin 👋</h2>

            <p>Select an option from the sidebar or top navigation.</p>

          </div>

        </main>

      </div>

    </div>
  );
}

export default Dashboard;