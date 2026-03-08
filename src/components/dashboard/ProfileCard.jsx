import { useAuth } from "../../context/AuthContext";

export default function ProfileCard() {
  const { user } = useAuth();

  return (
    <div className="panel profile-card">
      <div className="profile-avatar">{user?.name?.[0] || "P"}</div>
      <h3>{user?.email}</h3>

      <div className="profile-grid">
        <div>
          <span>Weight</span>
          <strong>{user?.weight} kg</strong>
        </div>
        <div>
          <span>Height</span>
          <strong>{user?.height} cm</strong>
        </div>
        <div>
          <span>Goal</span>
          <strong>{user?.goal} kg</strong>
        </div>
      </div>
    </div>
  );
}
