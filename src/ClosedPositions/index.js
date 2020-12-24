import { connect } from 'react-redux';
import Immutable from 'immutable';

import getSummary from './getClosedPositionsSummary';
import TableRenderer from '../commons/tableRenderer';

import './index.scss';

const ClosedPositions = ({ summary, dispatch, sortConditions }) => {
  const renderIndividual = ({s}) => {
    return (
      <tr className='closedStockSummary__tr' key={`closedStockSummary__tr--${s.get('stock')}`}>
        <td className='closedStockSummary__td' key='closedStockSummary__td--stock'>{s.get('stock')}</td>
        <td className='closedStockSummary__td' key='closedStockSummary__td--occupied'>{`$ ${s.get('occupied')}`}</td>
        <td className='closedStockSummary__td' key='closedStockSummary__td--potential'>{`$ ${s.get('potential')}`}</td>
        <td className='closedStockSummary__td' key='closedStockSummary__td--profit'>{`$ ${s.get('profit')}`}</td>
      </tr>
    )
  };

  const tableRenderer = TableRenderer({
    sortConditions,
    sortConstant: 'SORT_CLOSED_STOCK_SUMMARY',
    dispatch,
    list: summary,
    prefix: 'byStock',
    renderIndividual,
    ths: [
      'stock',
      'occupied',
      'potential',
      'profit',
    ],
  });

  return (
    <div className='closedStockSummary__container'>
      <table className='closedStockSummary__table'>
        { tableRenderer.renderTableHeaders() }
        <tbody className='closedStockSummary__tbody'>
          { tableRenderer.renderTbody() }
        </tbody>
      </table>
    </div>
  );
};

export default connect(state => ({
  summary: getSummary(state),
  sortConditions: state.sortClosedStockSummary,
}))(ClosedPositions);
