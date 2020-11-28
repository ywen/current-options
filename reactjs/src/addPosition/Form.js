import React from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import closeModal from './closeModal';
import TextField from './TextField';
import Row from './Row';
import './Modal.scss';

const Form = ({ addModalOpen, dispatch, addPositionFormData }) => {
  return (
    <Modal
      isOpen={addModalOpen}
      shouldCloseOnOverlayClick={true}
      ariaHideApp={false}
      onRequestClose={() => closeModal({ dispatch })}
      overlayClassName='add-position__overlay'
    >
      <form className='add-position__form'>
        <TextField name='symbol' key='symbol' />
        <TextField name='quantity' key='quantity' />
        <TextField name='strike' key='strike' />
        <TextField name='purchasePrice' key='purchasePrice' />
        <TextField name='openDate' key='openDate' />
      </form>
      <div className='add-position__information'>
        <Row name='symbol' key='symbol' />
        <Row name='stockSymbol' key='stockSymbol' />
        <Row name='expirationDate' key='expirationDate' />
        <Row name='optionType' key='optionType' />
        <Row name='quantity' key='quantity' />
        <Row name='strike' key='strike' />
        <Row name='moneyOccupied' key='moneyOccupied' />
        <Row name='purchasePrice' key='purchasePrice' />
        <Row name='potentialGain' key='potentialGain' />
        <Row name='potentialLose' key='potentialLose' />
        <Row name='openDate' key='openDate' />
      </div>
    </Modal>
  );
};

export default connect(state => ({
  addModalOpen: state.addModalOpen,
  addPositionFormData: state.addPositionFormData,
}))(Form);
