export default function JournalList({ journals }) {
  return (
    <div className="panel">
      <div className="panel-header">
        <h3>Journals</h3>
      </div>

      <div className="journal-list">
        {journals.map((item, index) => (
          <div key={index} className="journal-item">
            <div>
              <strong>{item.title}</strong>
              <p>{item.details}</p>
            </div>
            <span>{item.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
