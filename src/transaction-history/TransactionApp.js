import TransactionList from './TransactionList';
import transactions from './transactions.json';

function TransactionApp() {
  return (
    <div>
      <TransactionList items={transactions} />
    </div>
  );
}

export default TransactionApp;
