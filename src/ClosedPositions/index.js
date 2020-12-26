import { connect } from 'react-redux';

import getSummary from './getClosedPositionsSummary';
import TableRenderer from '../commons/tableRenderer';
import TotalSummarySection from '../commons/TotalSummarySection';

import getProfitClasses from './getProfitClasses';

import './index.scss';

const ClosedPositions = ({ summary, dispatch, sortConditions }) => {
  const renderIndividual = ({s}) => {
    const profit = s.get('profit');
    return (
      <tr className='closedStockSummary__tr' key={`closedStockSummary__tr--${s.get('stockSymbol')}`}>
        <td className='closedStockSummary__td' key='closedStockSummary__td--stock'>{s.get('stockSymbol')}</td>
        <td className='closedStockSummary__td' key='closedStockSummary__td--avgTurnOverDays'>{`${s.get('avgTurnOverDays')} days`}</td>
        <td className={getProfitClasses({ profit })} key='closedStockSummary__td--profit'>{`$ ${profit}`}</td>
        <td className='closedStockSummary__td' key='closedStockSummary__td--profit'>{`$ ${s.get('profitPerTurnoverDay')}`}</td>
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
      'stockSymbol',
      'avgTurnOverDays',
      'profit',
      'profitPerTurnoverDay',
      'profitToPotential',
      'profitToOccupied',
    ],
  });

  return (
    <div className='closedStockSummary__container'>
      <table className='closedStockSummary__table'>
        { tableRenderer.renderTableHeaders() }
        { tableRenderer.renderTbody() }
      </table>
      <TotalSummarySection
        list={summary}
        use='summaryFormat'
        hasProfit={true}
        prefix='closedStockSummary'
      />
    </div>
  );
};

export default connect(state => ({
  summary: getSummary(state),
  sortConditions: state.sortClosedStockSummary,
}))(ClosedPositions);
