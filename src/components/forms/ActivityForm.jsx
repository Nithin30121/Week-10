import { useState } from "react";

export default function ActivityForm({ onAdd }) {
  const [form, setForm] = useState({
    name: "",
    duration: "",
    calories: "",
    date: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.duration || !form.calories || !form.date) {
      setError("Please complete all activity fields.");
      return;
    }

    setError("");
    onAdd({
      ...form,
      duration: Number(form.duration),
      calories: Number(form.calories),
    });

    setForm({ name: "", duration: "", calories: "", date: "" });
  };

  return (
    <form className="module-form" onSubmit={handleSubmit}>
      <h3>Add Activity</h3>
      <div className="grid-4">
        <input name="name" placeholder="Activity name" value={form.name} onChange={handleChange} />
        <input
          name="duration"
          type="number"
          placeholder="Duration (min)"
          value={form.duration}
          onChange={handleChange}
        />
        <input
          name="calories"
          type="number"
          placeholder="Calories burned"
          value={form.calories}
          onChange={handleChange}
        />
        <input name="date" type="date" value={form.date} onChange={handleChange} />
      </div>
      {error && <div className="form-error">{error}</div>}
      <button type="submit">Save Activity</button>
    </form>
  );
}
