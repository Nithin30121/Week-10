import StatCard from "../../components/dashboard/StatCard";
import ActivityTrendChart from "../../components/dashboard/ActivityTrendChart";
import ProfileCard from "../../components/dashboard/ProfileCard";
import JournalList from "../../components/dashboard/JournalList";
import { journals, stats, trendData } from "../../data/mockData";

export default function Overview() {
  return (
    <div className="overview-grid">
      <section className="overview-main">
        <div className="stats-grid">
          {stats.map((item) => (
            <StatCard key={item.title} {...item} />
          ))}
        </div>

        <ActivityTrendChart data={trendData} />
      </section>

      <aside className="overview-side">
        <ProfileCard />
        <JournalList journals={journals} />
      </aside>
    </div>
  );
}
