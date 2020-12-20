import React from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';

import modelField from '../position/model';
import TextField from '../commons/TextField';

const Form = ({ dispatch, closeModal }) => {
  const isOpen = closeModal.get('isOpen');
  const position = closeModal.get('position');
  const data = closeModal.get('data');

  const changeValue = ({ dispatch, value, key}) => (
    dispatch({ type: 'CLOSE_POSITION_VALUE_CHANGED', value, key })
  );

  const textFields = () => {
    return modelField.closeFields.map(field => {
      return <TextField changeValue={changeValue} data={data} name={field} key={field} />
    })
  };
  const close = () => {
    dispatch({type: 'CLOSE_CLOSE_MODAL' });
  };

  const save = () => {
    close();
  };

  return (
    <Modal
      isOpen={isOpen}
      shouldCloseOnOverlayClick={true}
      ariaHideApp={false}
      onRequestClose={() => close({ dispatch })}
      overlayClassName='modal__overlay'
    >
      <div className='modal__form'>
        {textFields()}
        <button onClick={save} className='modal__save'>Save</button>
      </div>
    </Modal>
  );
};

export default connect(state => ({
  closeModal: state.closeModal,
  data: state.closePositionFormData,
}))(Form);
