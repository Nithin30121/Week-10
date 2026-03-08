import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import LoginForm from "../../components/forms/LoginForm";
import { useAuth } from "../../context/AuthContext";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleLogin = (form) => {
    const result = login(form.email, form.password);

    if (result.success) {
      navigate("/dashboard");
    } else {
      setError(result.message);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-panel">
        <LoginForm onSubmit={handleLogin} error={error} />
        <p className="auth-switch">
          No account? <Link to="/signup">Create one</Link>
        </p>
      </div>
    </div>
  );
}
