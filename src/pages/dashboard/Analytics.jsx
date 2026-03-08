import ActivityTrendChart from "../../components/dashboard/ActivityTrendChart";
import { trendData } from "../../data/mockData";

export default function Analytics() {
  return (
    <div className="module-page">
      <ActivityTrendChart data={trendData} />

      <div className="analytics-cards">
        <div className="panel">
          <h3>Performance Summary</h3>
          <p>Consistency score: 84%</p>
          <p>Diet adherence: 79%</p>
          <p>Workout completion: 87%</p>
        </div>

        <div className="panel">
          <h3>Recommendations</h3>
          <p>Increase sleep duration by 30 minutes.</p>
          <p>Improve hydration in the early morning window.</p>
          <p>Maintain 4–5 active workouts per week.</p>
        </div>
      </div>
    </div>
  );
}
