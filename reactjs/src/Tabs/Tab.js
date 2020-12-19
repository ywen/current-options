import React from 'react';
import { connect } from 'react-redux';

import onClick from './onClick';

const Tab = ({ isCurrent, dispatch, name, link }) => {
  const extraClassName = isCurrent ? 'tab__link--current' : 'tab__link'
  return (
    <li className={`tab__link ${extraClassName}`} onClick={() => onClick({link, dispatch})}>{name}</li>
  )
};

export default connect(state => ({ }))(Tab);
