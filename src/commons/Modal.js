import { Popup } from 'reactjs-popup';
import './Modal.scss';

const Component = ({ children, open, closePopup, dispatch }) => {
  return (
    <Popup
      open={open}
      closeOnDocumentClick
      onClose={() => closePopup({ dispatch })}
      modal
    >
      {children}
    </Popup>
  )
}

export default Component;
