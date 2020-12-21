import React from 'react';
import { connect } from 'react-redux';

import getLabel from '../commons/getLabel';
import getSortedPositions from '../position/getSortedPositions';

import modelField from '../position/model';

import './index.scss';

const close = ({ position, dispatch }) => {
  return (
    <td
      key= {`close-button-${position.get('id')}`}
      className='list__td'
    >
      <button
        className='list__close-button'
        onClick={ () => dispatch({ type: 'OPEN_CLOSE_MODAL', position }) }
      >
        Close
      </button>
    </td>
  );
};

const renderTd = ({position, dispatch}) => {
  const fields = modelField.metaFields.concat(modelField.inferredFields);
  const fieldTds = fields.map((field) => {
    return (
      <td key={`td-${field}`} className='list__td'>
        {position.get(field)}
      </td>
    );
  });
  return fieldTds.concat([close({ position, dispatch })]);
};

const renderBody = ({ positions, dispatch }) => {
  if (positions.size === 0) {
    return false;
  }
  const r = positions.map((position, index) => {
    return <tr key={`position-tr-${index}`} className='list__tr'>{renderTd({position, dispatch})}</tr>
  });
  return r.toJS();
};

const sort = ({ field, dispatch }) => {
  dispatch({ type: 'SORT', field });
};

const renderHeaders = ({ dispatch }) => {
  const fields = modelField.metaFields.concat(modelField.inferredFields).concat(['Actions']);
  return fields.map((k) => {
    return (
      <th
        key={`th-${k}`}
        className='list__th'
        onClick={() => sort({field: k, dispatch})}
      >
        {getLabel({ name: k })}
      </th>
    );
  });
};

const List = ({ positions, dispatch }) => {
  return (
    <div className='list__container'>
      <table className='list__table'>
        <thead className='list__thead'>
          <tr>
            {renderHeaders({ dispatch })}
          </tr>
        </thead>
        <tbody>
          {renderBody({ positions, dispatch })}
        </tbody>
      </table>
    </div>
  )
};

export default connect(state => ({
  positions: getSortedPositions(state),
}))(List);
