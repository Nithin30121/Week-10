import { useState } from "react";

export default function SignupForm({ onSubmit }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
    country: "India",
    weight: "",
    height: "",
    goal: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !form.name ||
      !form.email ||
      !form.password ||
      !form.age ||
      !form.weight ||
      !form.height ||
      !form.goal
    ) {
      setError("All fields are required.");
      return;
    }

    if (!form.email.includes("@")) {
      setError("Enter a valid email.");
      return;
    }

    if (form.password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    setError("");
    onSubmit({
      ...form,
      age: Number(form.age),
      weight: Number(form.weight),
      height: Number(form.height),
      goal: Number(form.goal),
    });
  };

  return (
    <form className="auth-form auth-form-lg" onSubmit={handleSubmit}>
      <h2>Create account</h2>
      <p>Set up your fitness profile and start tracking like a pro.</p>

      <div className="grid-2">
        <input name="name" placeholder="Full name" value={form.name} onChange={handleChange} />
        <input name="email" placeholder="Email" value={form.email} onChange={handleChange} />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
        />
        <input name="age" placeholder="Age" value={form.age} onChange={handleChange} />
        <input name="weight" placeholder="Weight (kg)" value={form.weight} onChange={handleChange} />
        <input name="height" placeholder="Height (cm)" value={form.height} onChange={handleChange} />
        <input name="goal" placeholder="Goal Weight (kg)" value={form.goal} onChange={handleChange} />
        <input name="country" placeholder="Country" value={form.country} onChange={handleChange} />
      </div>

      {error && <div className="form-error">{error}</div>}
      <button type="submit">Create Account</button>
    </form>
  );
}
