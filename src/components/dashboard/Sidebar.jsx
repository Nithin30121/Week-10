import { NavLink } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function Sidebar() {
  const { logout } = useAuth();

  return (
    <aside className="sidebar">
      <div>
        <div className="brand">GOFIT Pro</div>

        <nav className="nav-links">
          <NavLink to="/dashboard" end>
            Overview
          </NavLink>
          <NavLink to="/dashboard/activities">Activities</NavLink>
          <NavLink to="/dashboard/diet">Diet</NavLink>
          <NavLink to="/dashboard/fasting">Fasting</NavLink>
          <NavLink to="/dashboard/analytics">Analytics</NavLink>
          <NavLink to="/dashboard/settings">Settings</NavLink>
        </nav>
      </div>

      <button className="logout-btn" onClick={logout}>
        Logout
      </button>
    </aside>
  );
}
