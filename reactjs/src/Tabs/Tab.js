import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Tab = ({ isCurrent, dispatch, name, link }) => {
  return (
    <Link className='tab__link' to={link}>{name}</Link>
  )
};

export default connect(state => ({ }))(Tab);
