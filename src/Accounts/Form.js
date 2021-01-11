import React from 'react';
import { connect } from 'react-redux';
import TextField from '../commons/TextField';
import Modal from '../commons/Modal';
import saveAccount from './save';

const Form = ({ open, dispatch, data }) => {
  const save = () => {
    saveAccount({ data });
    dispatch({ type: 'CLOSE_ADD_ACCOUNT_MODAL' });
  };

  const closeModal = ({dispatch}) => dispatch({ type: 'CLOSE_ADD_ACCOUNT_MODAL' });
  const changeValue = ({ dispatch, value, key}) => (
    dispatch({ type: 'ADD_ACCOUNT_VALUE_CHANGED', value, key })
  );

  return (
    <Modal
      open={open}
      closePopup={closeModal}
      dispatch={dispatch}
    >
      <div className='modal__form'>
        <TextField changeValue={changeValue} data={data} name='name' />
        <button onClick={save} className='modal__save'>Save</button>
      </div>
    </Modal>
  );
};

export default connect(state => ({
  open: state.accountModalOpen,
  data: state.addAccountData,
}))(Form);
