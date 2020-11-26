import React from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import closeModal from './closeModal';

const Form = ({ addModalOpen, dispatch }) => {
  return (
    <Modal
      isOpen={addModalOpen}
      shouldCloseOnOverlayClick={true}
      ariaHideApp={false}
      onRequestClose={() => closeModal({ dispatch })}
    >
      <div> test </div>
    </Modal>
  );
};

export default connect(state => ({
  addModalOpen: state.addModalOpen,
}))(Form);
