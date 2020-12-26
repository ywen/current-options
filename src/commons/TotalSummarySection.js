import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import makeTotalSummaryInfoSelector from '../position/makeTotalSummaryInfoSelector';

const TotalSummarySection = ({ use, list, prefix, hasProfit=false }) => {
  const getTotalSummary = useMemo(
    () => makeTotalSummaryInfoSelector({ use, hasProfit })(),
    [use, hasProfit],
  );

  const totalSummary = useSelector((state) => getTotalSummary(state, list));
  const renderProfit = () => {
    if(!hasProfit) {
      return false;
    }
    return ([
      <dt key='dt-avgTurnOverDays' className={`${prefix}__total-summary--dt`}>Avg Turnover Days:</dt>,
      <dd key='dd-avgTurnOverDays' className={`${prefix}__total-summary--dd`}>{`${totalSummary.get('avgTurnOverDays')} days`}</dd>,
      <dt key='dt-avgPerDayEarning' className={`${prefix}__total-summary--dt`}>Avg Earning Per Day:</dt>,
      <dd key='dd-avgPerDayEarning' className={`${prefix}__total-summary--dd`}>{`$ ${totalSummary.get('avgPerDayEarning')}`}</dd>,
      <dt key='dt-profit' className={`${prefix}__total-summary--dt`}>Total Profit:</dt>,
      <dd key='dd-profit' className={`${prefix}__total-summary--dd`}>{`$ ${totalSummary.get('totalProfit')}`}</dd>
    ]);
  };

  const renderNonProfit = () => {
    if(hasProfit) {
      return true;
    }
    return ([
      <dt key='dt-occupied' className={`${prefix}__total-summary--dt`}>Total Occupied:</dt>,
      <dd key='dd-occupied' className={`${prefix}__total-summary--dd`}>{`$ ${totalSummary.get('totalOccupied')}`}</dd>,
      <dt key='dt-potential' className={`${prefix}__total-summary--dt`}>Total Potential:</dt>,
      <dd key='dd-potential' className={`${prefix}__total-summary--dd`}>{`$ ${totalSummary.get('totalPotential')}`}</dd>,
    ]);
  };

  return (
    <dl className={`${prefix}__total-summary--dl`}>
      <dt key='dt-stocks' className={`${prefix}__total-summary--dt`}>Total Stocks:</dt>
      <dd key='dd-stocks' className={`${prefix}__total-summary--dd`}>{totalSummary.get('totalStocks')}</dd>
      {renderNonProfit()}
      {renderProfit()}
    </dl>
  );
}

export default TotalSummarySection;
