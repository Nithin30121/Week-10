import { useAuth } from "../../context/AuthContext";

export default function Settings() {
  const { user } = useAuth();

  return (
    <div className="module-page">
      <div className="panel">
        <div className="panel-header">
          <h3>Profile Settings</h3>
        </div>

        <div className="settings-grid">
          <div><strong>Name:</strong> {user?.name}</div>
          <div><strong>Email:</strong> {user?.email}</div>
          <div><strong>Age:</strong> {user?.age}</div>
          <div><strong>Country:</strong> {user?.country}</div>
          <div><strong>Weight:</strong> {user?.weight} kg</div>
          <div><strong>Height:</strong> {user?.height} cm</div>
          <div><strong>Goal:</strong> {user?.goal} kg</div>
        </div>
      </div>

      <div className="panel">
        <h3>Deployment Notes</h3>
        <p>This SPA is structured for production build, routing, form validation, and deployment.</p>
        <p>Next step: run npm run build and deploy to Vercel or Netlify.</p>
      </div>
    </div>
  );
}
