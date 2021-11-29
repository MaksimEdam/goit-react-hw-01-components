import user from '../data/user.json';
import transactions from '../data/transactions.json';
/* import data from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json'; */
import Profile from '../Profile/Profile';
/* import Statistics from '../Statistics/Statistics';
import FriendList from '../Friendlist/FriendList';
import TransactionHistory from '../Transactionhistory/TransactionHistory'; */
import TransactionHistory from '../TransactionHistory/TransactionHistory';

function App() {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
