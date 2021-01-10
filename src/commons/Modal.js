import { Popup } from 'reactjs-popup';
import './Modal.scss';

const Component = ({ children, addPopupOpen, closePopup, dispatch }) => {
  return (
    <Popup
      open={addPopupOpen}
      closeOnDocumentClick
      onClose={() => closePopup({ dispatch })}
      overlayClassName='modal__overlay'
    >
      {children}
    </Popup>
  )
}

export default Component;
