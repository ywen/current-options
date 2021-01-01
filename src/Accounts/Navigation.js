import React from 'react';
import { connect } from 'react-redux';

import './Navigation.scss';

const Navigation = ({ accounts, currentAccountId, dispatch }) => {
  const onClick = ({ accountId }) => {
    dispatch({ type: 'CHANGE_CURRENT_ACCOUNT', accountId });
  };

  const getLiClasses = ({ accountId }) => {
    const result = ['accounts-navigation__li'];
    if (accountId === currentAccountId ) {
      result.push('accounts-navigation__li--current');
    }
    return result.join(' ');
  };

  const renderLi = () => {
    let result = [];
    accounts.forEach((v, k) => {
      const li = (<li
        className={getLiClasses({ accountId: k })}
        onClick={() => onClick({ accountId: k })}
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
  currentAccountId: state.currentAccountId,
}))(Navigation);