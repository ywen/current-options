import React from 'react';
import { connect } from 'react-redux';

import openAccountModal from './openModal';
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
    accounts.forEach((v) => {
      const li = (<li
        className={getLiClasses({ accountId: v.id })}
        onClick={() => onClick({ accountId: v.id })}
        key={`li-${v.id}`}
      >
        {v.name}
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
        <li className='accounts-navigation__li'>
          <button onClick={() => openAccountModal({ dispatch })}>
            Add Account
          </button>
        </li>
      </ul>
    </div>
  );
}

export default connect(state => ({
  accounts: state.accounts,
  currentAccountId: state.currentAccountId,
}))(Navigation);
