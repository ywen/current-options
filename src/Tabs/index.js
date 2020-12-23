import React from 'react';
import { connect } from 'react-redux';

import './index.scss';

import Tab from './Tab';

const Tabs = ({ currentTab, dispatch }) => {
  return (
    <ul className='tab__container'>
      <Tab isCurrent={currentTab==='/list'} name='Current Options' link='/list' key='list'/>
      <Tab isCurrent={currentTab==='/expiration'} name='Expiration View' link='/expiration' key='expiration'/>
      <Tab isCurrent={currentTab==='/by_stock'} name='By Stock' link='/by_stock' key='by_stock'/>
    </ul>
  );
};

export default connect(state => ({
  currentTab: state.currentTab,
}))(Tabs);
