import StatisticList from './StatisticList';
import Section from './Section';
import data from './data.json';

function StatisticApp() {
  return (
    <div>
      <Section title="Upload stats">
        <StatisticList items={data} />
      </Section>
    </div>
  );
}

export default StatisticApp;
