import { useState } from "react";
import MealForm from "../../components/forms/MealForm";
import { mealsSeed } from "../../data/mockData";

export default function Diet() {
  const [meals, setMeals] = useState(mealsSeed);

  const handleAdd = (item) => {
    setMeals((prev) => [item, ...prev]);
  };

  return (
    <div className="module-page">
      <MealForm onAdd={handleAdd} />

      <div className="panel">
        <div className="panel-header">
          <h3>Meal Log</h3>
        </div>

        <table className="data-table">
          <thead>
            <tr>
              <th>Meal Type</th>
              <th>Food</th>
              <th>Calories</th>
              <th>Protein</th>
            </tr>
          </thead>
          <tbody>
            {meals.map((item, index) => (
              <tr key={index}>
                <td>{item.mealType}</td>
                <td>{item.food}</td>
                <td>{item.calories}</td>
                <td>{item.protein} g</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
