import Modal from 'react-modal';
import './Modal.scss';

const Component = ({ children, addModalOpen, closeModal, dispatch }) => {
  return (
    <Modal
      isOpen={addModalOpen}
      shouldCloseOnOverlayClick={true}
      ariaHideApp={false}
      onRequestClose={() => closeModal({ dispatch })}
      overlayClassName='modal__overlay'
    >
      {children}
    </Modal>
  )
}

export default Component;
