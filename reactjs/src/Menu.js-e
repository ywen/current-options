import React from 'react';
import { connect } from 'react-redux';
import './Menu.scss';
import openModal from './add-position/openModal';

const Menu = ({ dispatch }) => {
  return (
    <div className='menu-container'>
      <button className='menu-item menu-item__add-position' onClick={() => openModal({ dispatch })}>
        Add a Position
      </button>
    </div>
  )
};

export default connect(state => ({}))(Menu);
