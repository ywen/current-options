import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './index.scss';

import Tab from './Tab';

const Tabs = ({ currentTab, dispatch }) => {
  return (
    <ul className='tab__container'>
      <Tab isCurrent={currentTab==='/list'} name='List View' link='/list' key='list'/>
      <Tab isCurrent={currentTab==='/expiration'} name='Expiration View' link='/expiration' key='expiration'/>
    </ul>
  );
};

export default connect(state => ({
  currentTab: state.currentTab,
}))(Tabs);
