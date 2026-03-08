import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function ActivityTrendChart({ data }) {
  return (
    <div className="panel chart-panel">
      <div className="panel-header">
        <h3>Activity Statistics</h3>
        <span className="badge">Weekly</span>
      </div>

      <div className="chart-wrap">
        <ResponsiveContainer width="100%" height={320}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="4 4" />
            <XAxis dataKey="day" />
            <YAxis domain={[0, 100]} />
            <Tooltip />
            <Line type="monotone" dataKey="diet" stroke="#2563eb" strokeWidth={3} />
            <Line type="monotone" dataKey="workout" stroke="#ec4899" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
