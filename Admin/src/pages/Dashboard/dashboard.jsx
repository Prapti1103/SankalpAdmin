import { NavLink } from "react-router-dom";
import {
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

            <NavLink
              to="/website-management"
              className={({ isActive }) =>
                isActive ? "menu-item active" : "menu-item"
              }
            >

              <div className="menu-left">

                <BsGlobe />

                <span>Website Management</span>

              </div>

              <BsChevronDown />

            </NavLink>

          </li>

          <li>

            <NavLink
              to="/users"
              className={({ isActive }) =>
                isActive ? "menu-item active" : "menu-item"
              }
            >

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

      {/* ================= Main Content ================= */}

      <div className="main-content">

        {/* ================= Navbar ================= */}

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

        {/* ================= Content ================= */}

        <main className="dashboard-content">

          <div className="welcome-box">

            <h1>Welcome to Sankalp Dashboard</h1>

            <p>
              Manage your complete website from the admin panel.
            </p>

          </div>

        </main>

      </div>

    </div>
  );
}

export default Dashboard;