import Statistic from './Statistic';
import './statistic.css';
function StatisticList({ items }) {
  return (
    <ul className="stat-list">
      {items.map(item => (
        <Statistic
          key={item.id}
          label={item.label}
          percentage={item.percentage}
        />
      ))}
    </ul>
  );
}

export default StatisticList;
