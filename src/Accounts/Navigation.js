import React from 'react';
import { connect } from 'react-redux';

import './Navigation.scss';

const Navigation = ({ accounts, dispatch }) => {
  const renderLi = () => {
    let result = [];
    accounts.forEach((v, k) => {
      const li = (<li
        className='accounts-navigation__li'
        key={`li-${k}`}
      >
        {v.get('name')}
      </li>);
      result.push(li);
    });
    return result;
  };
  return (
    <div className='accounts-navigation__container'>
      <div className='accounts-navigation__title'>
        All Accounts
      </div>
      <ul className='accounts-navigation__ul'>
        {renderLi()}
      </ul>
    </div>
  );
}

export default connect(state => ({
  accounts: state.accounts,
}))(Navigation);
