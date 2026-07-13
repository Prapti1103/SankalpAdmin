import { BsBell, BsPersonCircle, BsGlobe, BsPeople, BsBoxArrowRight, BsChevronDown } from "react-icons/bs";
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

          <li className="active">
            <div className="menu-item">
              <div className="menu-left">
                <BsGlobe />
                <span>Website Management</span>
              </div>

              <BsChevronDown />
            </div>
          </li>

          <li>
            <div className="menu-item">
              <div className="menu-left">
                <BsPeople />
                <span>Users</span>
              </div>
            </div>
          </li>

          <li>
            <div className="menu-item">
              <div className="menu-left">
                <BsBoxArrowRight />
                <span>Logout</span>
              </div>
            </div>
          </li>

        </ul>

      </aside>

      {/* Main Content */}

      <div className="main-content">

        {/* Navbar */}

        <header className="topbar">

          <div className="nav-links">

            <span>T1</span>

            <span>T2</span>

            <span>T3</span>

            <span>Settings</span>

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

            <p>
              Select an option from the left sidebar to manage your website.
            </p>

          </div>

        </main>

      </div>

    </div>
  );
}

export default Dashboard;