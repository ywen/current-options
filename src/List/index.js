import React  from 'react';
import { connect } from 'react-redux';
import { Popup } from 'reactjs-popup';

import getSortedPositions from '../position/getSortedPositions';
import deletePosition from '../position/delete';

import modelField from '../position/model';
import TableRenderer from '../commons/tableRenderer';

import TotalSummarySection from '../commons/TotalSummarySection';

import './index.scss';

const actionButtons = ({ position, dispatch }) => {
  return (
    <div
      key= {`buttons-${position.get('id')}`}
      className='list__buttons'
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
    </div>
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
  return (
    <Popup
      trigger={open => (
        <tr className='list__tr' key={`list__tr--${s.get('id')}`}>
          { fieldTds }
        </tr>
      )}
      position='bottom left'
      on={['hover', 'focus']}
      key={`popup-${s.get('id')}`}
    >
      {actionButtons({ position: s, dispatch })}
    </Popup>
  )
};

const List = ({ positions, sortConditions, dispatch }) => {
  const fields = modelField.metaFields.concat(modelField.inferredFields);
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
