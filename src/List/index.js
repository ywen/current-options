import React  from 'react';
import { connect } from 'react-redux';
import { Popup } from 'reactjs-popup';

import getSortedPositions from 'position/getSortedPositions';
import deletePosition from 'position/delete';


import modelField from '../position/model';
import TableRenderer from '../commons/tableRenderer';

import TotalSummarySection from '../commons/TotalSummarySection';

import './index.scss';

const openUpdateModal = ({ position, dispatch }) => {
  dispatch({ type: 'OPEN_POSITION_FORM_MODAL', position });
};

const actionButtons = ({ position, dispatch }) => {
  return (
    <div
      key= {`buttons-${position.id}`}
      className='list__buttons'
    >
      <button
        className='list__action-button'
        key='list__update-button'
        onClick={ () => openUpdateModal({ position, dispatch }) }
      >
        Update
      </button>
      <button
        className='list__action-button'
        key='list__delete-button'
        onClick={ () => deletePosition({ position }) }
      >
       Delete
      </button>
    </div>
  );
};

const renderIndividual = ({s, dispatch}) => {
  const fields = modelField.displayInferredFields;
  const fieldTds = fields.map((field) => {
    return (
      <td key={`td-${s.id}-${field}`} className='list__td'>
        {s[field]}
      </td>
    );
  });
  const closeButton = (
    <td key={`td-${s.id}-closeButton`} className='list__td'>
      <button
        className='list__action-button'
        key='list__close-button'
        onClick={ () => dispatch({ type: 'OPEN_CLOSE_MODAL', position: s }) }
      >
        Close
      </button>
    </td>
  )
  return (
    <Popup
      trigger={open => (
        <tr className='list__tr' key={`list__tr--${s.id}`}>
          { fieldTds.concat([closeButton]) }
        </tr>
      )}
      position='bottom right'
      on={['hover', 'focus']}
      key={`popup-${s.id}`}
    >
      {actionButtons({ position: s, dispatch })}
    </Popup>
  )
};

const List = ({ positions, sortConditions, dispatch }) => {
  const fields = modelField.displayInferredFields.concat(['Close Button']);
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
    <div className='list__container authenticated__view-area'>
      <table className='list__table'>
        { tableRenderer.renderTableHeaders() }
        { tableRenderer.renderTbody() }
      </table>
      <TotalSummarySection
        list={positions}
        use='listFormat'
        prefix='list'
      />
    </div>
  )
};

export default connect(state => ({
  positions: getSortedPositions(state),
  sortConditions: state.sortConditions,
}))(List);
