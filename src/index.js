import React from 'react';
import ReactDOM from 'react-dom';
/* import './index.css'; */
import Profile from './social-profile/Profile';
import StatisticApp from './statistics/StatisticApp';

ReactDOM.render(
  <React.StrictMode>
    <Profile />
    <StatisticApp />
  </React.StrictMode>,
  document.getElementById('root'),
);
