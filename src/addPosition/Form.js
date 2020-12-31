import React from 'react';
import { connect } from 'react-redux';
import Modal from '../commons/Modal';
import closeModal from './closeModal';
import TextField from '../commons/TextField';
import Row from './Row';
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
      addModalOpen={addModalOpen}
      closeModal={closeModal}
      dispatch={dispatch}
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
  addModalOpen: state.addPositionModalOpen,
  data: state.addPositionFormData,
}))(Form);
