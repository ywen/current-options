import React  from 'react';
import { connect } from 'react-redux';

import deletePosition from 'position/delete';

import TableRenderer from 'commons/tableRenderer';

import TotalSummarySection from 'commons/TotalSummarySection';

import './index.scss';

const openUpdateModal = ({ position, dispatch }) => {
  dispatch({ type: 'OPEN_POSITION_FORM_MODAL', position });
};

const actionButtons = ({ s, dispatch }) => {
  return (
    <div
      key= {`buttons-${s.id}`}
      className='list__buttons'
    >
      <button
        className='list__action-button'
        key='list__update-button'
        onClick={ () => openUpdateModal({ position: s, dispatch }) }
      >
        Update
      </button>
      <button
        className='list__action-button'
        key='list__delete-button'
        onClick={ () => deletePosition({ position: s }) }
      >
       Delete
      </button>
    </div>
  );
};

const List = ({ positions, fields, sortConditions, extra, dispatch }) => {
  const tableRenderer = TableRenderer({
    sortConditions,
    sortConstant: 'SORT',
    dispatch,
    list: positions,
    prefix: 'list',
    extra,
    ths: fields,
    actionButtons,
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

export default connect((state, props) => ({
  positions: props.getSortedPositions(state),
  sortConditions: state.sortConditions,
}))(List);
