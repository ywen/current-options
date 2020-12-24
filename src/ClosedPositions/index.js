import { connect } from 'react-redux';

import getSummary from './getClosedPositionsSummary';
import TableRenderer from '../commons/tableRenderer';

import './index.scss';

const ClosedPositions = ({ summary, dispatch, sortConditions }) => {
  const renderIndividual = ({s}) => {
    const profit = s.get('profit');
    const profitClass = ['closedStockSummary__td']
    if ( profit > 0) {
      profitClass.push('closedStockSummary__td--positive');
    } else {
      profitClass.push('closedStockSummary__td--negative');
    }

    return (
      <tr className='closedStockSummary__tr' key={`closedStockSummary__tr--${s.get('stock')}`}>
        <td className='closedStockSummary__td' key='closedStockSummary__td--stock'>{s.get('stock')}</td>
        <td className='closedStockSummary__td' key='closedStockSummary__td--occupied'>{`$ ${s.get('occupied')}`}</td>
        <td className={profitClass.join(' ')} key='closedStockSummary__td--profit'>{`$ ${s.get('profit')}`}</td>
        <td className='closedStockSummary__td' key='closedStockSummary__td--profitToPotentialpotential'>{`% ${s.get('profitToPotential')}`}</td>
        <td className='closedStockSummary__td' key='closedStockSummary__td--profitToOccupied'>{`% ${s.get('profitToOccupied')}`}</td>
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
      'profit',
      'profitToPotential',
      'profitToOccupied',
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
