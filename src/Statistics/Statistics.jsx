import PropTypes from 'prop-types';
import s from './Statistics.module.css';

function Statistics({ title, stats }) {
  function randomColor() {
    let allowed = 'ABCDEF0123456789',
      S = '#';
    while (S.length < 7) {
      S += allowed.charAt(Math.floor(Math.random() * 16 + 1));
    }
    return S;
  }
  return (
    <section className={s.statistics}>
      <h2 className={s.title}>{title}</h2>
      <ul className={s.statList}>
        {stats.map(stat => (
          <li
            className={s.item}
            style={{ backgroundColor: randomColor() }}
            key={stat.id}
          >
            <span className={s.label}>{stat.label}</span>
            <span className={s.percentage}>{stat.percentage + '%'}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
Statistics.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
export default Statistics;
