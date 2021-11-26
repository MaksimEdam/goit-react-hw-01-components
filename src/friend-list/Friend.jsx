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

export default Friend;
