import React from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import closeModal from './closeModal';
import TextField from '../commons/TextField';
import Row from './Row';
import './Modal.scss';
import changeValue from './changeValue';

const Form = ({ addModalOpen, dispatch, data }) => {
  return (
    <Modal
      isOpen={addModalOpen}
      shouldCloseOnOverlayClick={true}
      ariaHideApp={false}
      onRequestClose={() => closeModal({ dispatch })}
      overlayClassName='add-position__overlay'
    >
      <div className='add-position__form'>
        <TextField changeValue={changeValue} data={data} name='symbol' key='symbol' />
        <TextField changeValue={changeValue} data={data} name='quantity' key='quantity' />
        <TextField changeValue={changeValue} data={data} name='strike' key='strike' />
        <TextField changeValue={changeValue} data={data} name='purchasePrice' key='purchasePrice' />
        <TextField changeValue={changeValue} data={data} name='openDate' key='openDate' />
      </div>
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
  data: state.addPositionFormData,
}))(Form);
