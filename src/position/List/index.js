import React  from 'react';
import { connect } from 'react-redux';

import model from 'position/model';
import TableRenderer from 'commons/tableRenderer';
import TotalSummarySection from 'commons/TotalSummarySection';

import './index.scss';

const openUpdateModal = ({ position, dispatch }) => {
  dispatch({ type: 'OPEN_POSITION_FORM_MODAL', position });
};

const closeButton = ({ data, dispatch }) => {
  if (model.isClosed({ data })) return false;
  return (
    <button
      className='list__action-button'
      key='list__close-button'
      onClick={ () => dispatch({ type: 'OPEN_CLOSE_MODAL', position: data }) }
    >
      Close
    </button>
  )
}
const actions = ({ s, dispatch }) => (
  <td key={`td-${s.id}-actions`} className='list__td'>
    {closeButton({ data: s, dispatch })}
    <button
      className='list__action-button'
      key='list__update-button'
      onClick={ () => openUpdateModal({ position: s, dispatch }) }
    >
      Update
    </button>
  </td>
);

const List = ({ positions, fields, sortConditions, extra, dispatch }) => {
  const tableRenderer = TableRenderer({
    sortConditions,
    sortConstant: 'SORT',
    dispatch,
    list: positions,
    prefix: 'list',
    extra: { actions },
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

export default connect((state, props) => ({
  positions: props.getSortedPositions(state),
  sortConditions: state.sortConditions,
}))(List);
