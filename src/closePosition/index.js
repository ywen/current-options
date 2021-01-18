import React from 'react';
import { connect } from 'react-redux';
import Modal from '../commons/Modal';

import modelField from '../position/model';
import TextField from '../commons/TextField';

import closePosition from '../position/close';

import './index.scss';

const Form = ({ dispatch, closeModal }) => {
  const { isOpen, position, data, allFilled } = closeModal;

  const name = position ? position.symbol : null;
  if(!position) {
    return false;
  }
  const changeValue = ({ dispatch, value, key}) => (
    dispatch({ type: 'CLOSE_POSITION_VALUE_CHANGED', value, key })
  );

  const textFields = () => {
    return modelField.closingFormFields.map(field => {
      return <TextField changeValue={changeValue} data={data} name={field} key={field} />
    })
  };
  const close = () => {
    dispatch({type: 'CLOSE_CLOSE_MODAL' });
  };

  const save = () => {
    close();
    closePosition({ position, closedData: data });
  };

  return (
    <Modal open={isOpen} closePopup={close} >
      <div className='modal__form'>
        <div className='modal__position-title'>{name}</div>
        {textFields()}
        <button onClick={save} disabled={!allFilled} className='modal__save'>Save</button>
      </div>
    </Modal>
  );
};

export default connect(state => ({
  closeModal: state.closeModal,
  data: state.closePositionFormData,
}))(Form);
