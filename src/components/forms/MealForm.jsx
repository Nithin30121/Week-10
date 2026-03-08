import { useState } from "react";

export default function MealForm({ onAdd }) {
  const [form, setForm] = useState({
    mealType: "",
    food: "",
    calories: "",
    protein: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.mealType || !form.food || !form.calories || !form.protein) {
      setError("Please complete all meal fields.");
      return;
    }

    setError("");
    onAdd({
      ...form,
      calories: Number(form.calories),
      protein: Number(form.protein),
    });

    setForm({ mealType: "", food: "", calories: "", protein: "" });
  };

  return (
    <form className="module-form" onSubmit={handleSubmit}>
      <h3>Log Meal</h3>
      <div className="grid-4">
        <input name="mealType" placeholder="Meal type" value={form.mealType} onChange={handleChange} />
        <input name="food" placeholder="Food name" value={form.food} onChange={handleChange} />
        <input
          name="calories"
          type="number"
          placeholder="Calories"
          value={form.calories}
          onChange={handleChange}
        />
        <input
          name="protein"
          type="number"
          placeholder="Protein (g)"
          value={form.protein}
          onChange={handleChange}
        />
      </div>
      {error && <div className="form-error">{error}</div>}
      <button type="submit">Save Meal</button>
    </form>
  );
}
