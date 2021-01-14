import React from 'react';
import { connect } from 'react-redux';
import Modal from 'commons/Modal';
import TextField from 'commons/TextField';
import Row from './Row';
import savePosition from '../save';
import modelField from '../model';

const changeValue = ({ dispatch, value, key}) => (
  dispatch({ type: 'ADD_POSITION_VALUE_CHANGED', value, key })
);

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

const Form = ({ dispatch, modalData, accounts }) => {
  const { open, data } = modalData;
  const closeModal = ({dispatch}) => dispatch({ type: 'CLOSE_POSITION_FORM_MODAL' });
  const save = () => {
    savePosition({ data });
    dispatch({ type: 'CLOSE_POSITION_FORM_MODAL' });
  };

  const renderOptions = () => {
    let result = [<option key='empty-option' value=''>Select Account</option>];
    accounts.forEach(v => {
      result.push(<option key={v.id} value={v.id}>{v['name']}</option>);
    });
    return result;
  };

  const accountIdChanged = (e) => {
    const value = e.target.selectedOptions[0].value;
    changeValue({ dispatch, key: 'accountId', value });
  };

  return (
    <Modal
      open={open}
      closePopup={closeModal}
      dispatch={dispatch}
    >
      <div className='modal__form'>
        {textFields({ data })}
        <div className='text-field__container'>
          <label
            className='text-field__label'
            htmlFor='accountId'
            key='accountId-label'
          >
            Account:
          </label>
          <select
            id='accountId'
            className='text-field__input text-field__input--accountId'
            onChange={accountIdChanged}
          >
            {renderOptions()}
          </select>
        </div>
        <button onClick={save} className='modal__save'>Save</button>
      </div>
      <div className='modal__information'>
        {displayRows()}
      </div>
    </Modal>
  );
};

export default connect(state => ({
  accounts: state.accounts,
}))(Form);
