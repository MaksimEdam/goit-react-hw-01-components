import PropTypes from 'prop-types';
function Friend({ avatar, name, isOnline }) {
  return (
    <li className="item1">
      <span
        className="status"
        style={
          isOnline
            ? { backgroundColor: '#00cc00' }
            : { backgroundColor: '#ff0000' }
        }
      >
        {isOnline}
      </span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
}
Friend.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
export default Friend;
