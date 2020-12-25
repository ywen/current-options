import React from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import onClick from './onClick';

const Tab = ({ isCurrent, dispatch, name, link }) => {
  const navigate = useNavigate();
  const extraClassName = isCurrent ? 'tab__link--current' : 'tab__link'
  return (
    <li className={`tab__link ${extraClassName}`} onClick={() => onClick({link, navigate, dispatch})}>{name}</li>
  )
};

export default connect(state => ({ }))(Tab);
