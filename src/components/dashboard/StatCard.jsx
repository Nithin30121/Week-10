export default function StatCard({ title, value, unit, theme }) {
  return (
    <div className={`stat-card ${theme}`}>
      <div className="stat-top">
        <span>{title}</span>
      </div>
      <div className="stat-value">
        {value} <small>{unit}</small>
      </div>
    </div>
  );
}
