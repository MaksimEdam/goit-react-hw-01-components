import PropTypes from 'prop-types';
import s from './FriendList.module.css';

function Friend({ items }) {
  return (
    <ul className={s.friendList}>
      {items.map(item => (
        <li className={s.item} key={item.id}>
          <span
            className={s.status + ' ' + (item.isOnline ? s.online : s.offline)}
          ></span>
          <img
            className={s.avatar}
            src={item.avatar}
            alt={item.name}
            width="48"
          />
          <p className={s.name}>{item.name}</p>
        </li>
      ))}
    </ul>
  );
}
Friend.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
export default Friend;
