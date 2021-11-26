import FriendListItem from './FriendListItem';
import friend from './friends.json';
function FriendApp() {
  return (
    <div>
      <FriendListItem items={friend} />
    </div>
  );
}

export default FriendApp;
