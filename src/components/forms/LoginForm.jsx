import { useState } from "react";

export default function LoginForm({ onSubmit, error }) {
  const [form, setForm] = useState({ email: "", password: "" });
  const [localError, setLocalError] = useState("");

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.email.includes("@")) {
      setLocalError("Enter a valid email address.");
      return;
    }

    if (form.password.length < 6) {
      setLocalError("Password must be at least 6 characters.");
      return;
    }

    setLocalError("");
    onSubmit(form);
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <h2>Welcome back</h2>
      <p>Login to access your professional fitness dashboard.</p>

      <input
        type="email"
        name="email"
        placeholder="Email address"
        value={form.email}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={form.password}
        onChange={handleChange}
      />

      {(localError || error) && <div className="form-error">{localError || error}</div>}

      <button type="submit">Login</button>
    </form>
  );
}
