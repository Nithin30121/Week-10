import { useState } from "react";
import ActivityForm from "../../components/forms/ActivityForm";
import { activitiesSeed } from "../../data/mockData";

export default function Activities() {
  const [activities, setActivities] = useState(activitiesSeed);

  const handleAdd = (item) => {
    setActivities((prev) => [item, ...prev]);
  };

  return (
    <div className="module-page">
      <ActivityForm onAdd={handleAdd} />

      <div className="panel">
        <div className="panel-header">
          <h3>Activity History</h3>
        </div>

        <table className="data-table">
          <thead>
            <tr>
              <th>Activity</th>
              <th>Duration</th>
              <th>Calories</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {activities.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.duration} min</td>
                <td>{item.calories}</td>
                <td>{item.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
