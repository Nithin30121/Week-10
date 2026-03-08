import { useState } from "react";

export default function FastingForm({ onAdd }) {
  const [form, setForm] = useState({
    plan: "",
    start: "",
    end: "",
    status: "Active",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.plan || !form.start || !form.end) {
      setError("Please complete all fasting fields.");
      return;
    }

    setError("");
    onAdd(form);
    setForm({ plan: "", start: "", end: "", status: "Active" });
  };

  return (
    <form className="module-form" onSubmit={handleSubmit}>
      <h3>Create Fasting Plan</h3>
      <div className="grid-4">
        <input name="plan" placeholder="Plan (e.g. 16:8)" value={form.plan} onChange={handleChange} />
        <input name="start" type="time" value={form.start} onChange={handleChange} />
        <input name="end" type="time" value={form.end} onChange={handleChange} />
        <input name="status" value={form.status} onChange={handleChange} />
      </div>
      {error && <div className="form-error">{error}</div>}
      <button type="submit">Save Plan</button>
    </form>
  );
}
