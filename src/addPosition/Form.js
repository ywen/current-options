import React from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import closeModal from './closeModal';
import TextField from '../commons/TextField';
import Row from './Row';
import '../commons/Modal.scss';
import changeValue from './changeValue';
import savePosition from '../position/save';
import modelField from '../position/model';

const textFields = ({ data }) => {
  return modelField.metaFields.map(field => {
    return <TextField changeValue={changeValue} data={data} name={field} key={field} />
  })
};

const displayRows = () => {
  const fields = modelField.metaFields.concat(modelField.inferredFields);
  return fields.map(field => {
    return <Row name={field} key={`row-${field}`} />;
  });
};

const Form = ({ addModalOpen, dispatch, data }) => {
  const save = () => {
    savePosition({ data });
  };

  return (
    <Modal
      isOpen={addModalOpen}
      shouldCloseOnOverlayClick={true}
      ariaHideApp={false}
      onRequestClose={() => closeModal({ dispatch })}
      overlayClassName='modal__overlay'
    >
      <div className='modal__form'>
        {textFields({ data })}
        <button onClick={save} className='modal__save'>Save</button>
      </div>
      <div className='modal__information'>
        {displayRows()}
      </div>
    </Modal>
  );
};

export default connect(state => ({
  addModalOpen: state.addModalOpen,
  data: state.addPositionFormData,
}))(Form);
