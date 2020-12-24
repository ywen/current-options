import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import makeTotalSummaryInfoSelector from '../position/makeTotalSummaryInfoSelector';

const TotalSummarySection = ({ use, list, prefix, hasProfit=false }) => {
  const getTotalSummary = useMemo(
    makeTotalSummaryInfoSelector({ use, hasProfit }),
    [use, hasProfit],
  );

  const totalSummary = useSelector((state) => getTotalSummary(state, list));
  const renderProfit = () => {
    if(!hasProfit) {
      return false;
    }
    return ([
      <dt className={`${prefix}__total-summary--dt`}>Total Profit:</dt>,
      <dd className={`${prefix}__total-summary--dd`}>{`$ ${totalSummary.get('totalProfit')}`}</dd>
    ]);
  };

  const renderNonProfit = () => {
    if(hasProfit) {
      return true;
    }
    return ([
      <dt className={`${prefix}__total-summary--dt`}>Total Occupied:</dt>,
      <dd className={`${prefix}__total-summary--dd`}>{`$ ${totalSummary.get('totalOccupied')}`}</dd>,
      <dt className={`${prefix}__total-summary--dt`}>Total Potential:</dt>,
      <dd className={`${prefix}__total-summary--dd`}>{`$ ${totalSummary.get('totalPotential')}`}</dd>,
    ]);
  };

  return (
    <dl className={`${prefix}__total-summary--dl`}>
      <dt className={`${prefix}__total-summary--dt`}>Total Stocks:</dt>
      <dd className={`${prefix}__total-summary--dd`}>{totalSummary.get('totalStocks')}</dd>
      {renderNonProfit()}
      {renderProfit()}
    </dl>
  );
}

export default TotalSummarySection;
