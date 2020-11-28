import React from 'react';
import { connect } from 'react-redux';
import './Menu.scss';
import openModal from './addPosition/openModal';

const Menu = ({ dispatch }) => {
  return (
    <div className='menu-container'>
      <button className='menu-item menu-item__addPosition' onClick={() => openModal({ dispatch })}>
        Add a Position
      </button>
    </div>
  )
};

export default connect(state => ({}))(Menu);
