function Statistic({ label, percentage }) {
  function randomColor() {
    var allowed = 'ABCDEF0123456789',
      S = '#';

    while (S.length < 7) {
      S += allowed.charAt(Math.floor(Math.random() * 16 + 1));
    }
    return S;
  }
  return (
    <li className="item" style={{ backgroundColor: randomColor() }}>
      <span className="label">{label}</span>
      <span className="percentage">{percentage}%</span>
    </li>
  );
}

export default Statistic;
