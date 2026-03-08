import { useAuth } from "../../context/AuthContext";

export default function Topbar() {
  const { user } = useAuth();

  return (
    <header className="topbar">
      <div>
        <h1>Fitness Performance Platform</h1>
        <p>Track routines, nutrition, fasting, and performance from one place.</p>
      </div>

      <div className="user-badge">
        <div className="avatar">{user?.name?.[0] || "U"}</div>
        <div>
          <strong>{user?.email || "No email"}</strong>
        </div>
      </div>
    </header>
  );
}
