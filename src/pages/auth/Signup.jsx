import { Link, useNavigate } from "react-router-dom";
import SignupForm from "../../components/forms/SignupForm";
import { useAuth } from "../../context/AuthContext";

export default function Signup() {
  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleSignup = (formData) => {
    const result = signup(formData);
    if (result.success) navigate("/dashboard");
  };

  return (
    <div className="auth-page">
      <div className="auth-panel wide">
        <SignupForm onSubmit={handleSignup} />
        <p className="auth-switch">
          Already registered? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}
