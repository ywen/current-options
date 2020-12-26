const getProfitClasses = ({ profit }) => {
  const profitClass = ['closedStockSummary__td']
  if ( profit > 0) {
    profitClass.push('closedStockSummary__td--positive');
  } else {
    profitClass.push('closedStockSummary__td--negative');
  }
  return profitClass.join(' ');
};

export default getProfitClasses;
