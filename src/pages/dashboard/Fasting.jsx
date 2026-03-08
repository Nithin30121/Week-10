import { useState } from "react";
import FastingForm from "../../components/forms/FastingForm";
import { fastingSeed } from "../../data/mockData";

export default function Fasting() {
  const [plans, setPlans] = useState(fastingSeed);

  const handleAdd = (item) => {
    setPlans((prev) => [item, ...prev]);
  };

  return (
    <div className="module-page">
      <FastingForm onAdd={handleAdd} />

      <div className="panel">
        <div className="panel-header">
          <h3>Fasting Plans</h3>
        </div>

        <table className="data-table">
          <thead>
            <tr>
              <th>Plan</th>
              <th>Start</th>
              <th>End</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {plans.map((item, index) => (
              <tr key={index}>
                <td>{item.plan}</td>
                <td>{item.start}</td>
                <td>{item.end}</td>
                <td>{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
