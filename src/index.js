import React from 'react';
import ReactDOM from 'react-dom';
import 'modern-normalize/modern-normalize.css';
import './index.css';
import Profile from './social-profile/Profile';
import StatisticApp from './statistics/StatisticApp';
import FriendApp from './friend-list/FriendApp';
import TransactionApp from './transaction-history/TransactionApp';

ReactDOM.render(
  <React.StrictMode>
    <Profile />
    <StatisticApp />
    <FriendApp />
    <TransactionApp />
  </React.StrictMode>,
  document.getElementById('root'),
);
