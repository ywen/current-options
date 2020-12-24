import React from 'react';
import { connect } from 'react-redux';

import getSortedPositions from '../position/getSortedPositions';
import deletePosition from '../position/delete';

import modelField from '../position/model';
import TableRenderer from '../commons/tableRenderer';

import './index.scss';

const actionButtons = ({ position, dispatch }) => {
  return (
    <td
      key= {`close-button-${position.get('id')}`}
      className='list__td'
    >
      <button
        className='list__action-button'
        key='list__close-button'
        onClick={ () => dispatch({ type: 'OPEN_CLOSE_MODAL', position }) }
      >
        Close
      </button>
      <button
        className='list__action-button'
        key='list__delete-button'
        onClick={ () => deletePosition({ position }) }
      >
       Delete
      </button>
    </td>
  );
};

const renderIndividual = ({s, dispatch}) => {
  const fields = modelField.metaFields.concat(modelField.inferredFields);
  const fieldTds = fields.map((field) => {
    return (
      <td key={`td-${s.get('id')}-${field}`} className='list__td'>
        {s.get(field)}
      </td>
    );
  });
  const allTds = fieldTds.concat([actionButtons({ position: s, dispatch })]);
  return (
    <tr className='list__tr' key={`list__tr--${s.get('id')}`}>
      { allTds }
    </tr>
  )
};

const List = ({ positions, sortConditions, dispatch }) => {
  const fields = modelField.metaFields.concat(modelField.inferredFields).concat(['Actions']);
  const tableRenderer = TableRenderer({
    sortConditions,
    sortConstant: 'SORT',
    dispatch,
    list: positions,
    prefix: 'list',
    renderIndividual,
    ths: fields,
  });
  return (
    <div className='list__container'>
      <table className='list__table'>
        { tableRenderer.renderTableHeaders() }
        <tbody>
          { tableRenderer.renderTbody() }
        </tbody>
      </table>
    </div>
  )
};

export default connect(state => ({
  positions: getSortedPositions(state),
  sortConditions: state.sortConditions,
}))(List);
