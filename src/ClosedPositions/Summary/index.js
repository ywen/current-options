import { connect } from 'react-redux';

import getSummary from './getClosedPositionsSummary';
import TableRenderer from 'commons/tableRenderer';
import TotalSummarySection from 'commons/TotalSummarySection';
import TimeSelect from '../TimeSelect';

import './index.scss';

const ClosedPositions = ({ summary, dispatch, sortConditions }) => {
  const tableRenderer = TableRenderer({
    sortConditions,
    sortConstant: 'SORT_CLOSED_STOCK_SUMMARY',
    dispatch,
    list: summary,
    prefix: 'byStock',
    ths: [
      'stockSymbol',
      'avgTurnOverDays',
      'profit',
      'profitPerTurnoverDay',
      'profitToOccupied',
      'profitToPotential',
    ],
  });

  return (
    <div className='closedStockSummary__container authenticated__view-area'>
      <TimeSelect />
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
