import isSellFunc from './isSell';

const fillInferredValues = ({original}) => {
  const { quantity, purchasePrice, closingPrice, symbol } = original;
  if (symbol && purchasePrice && quantity) {
    const matches = symbol.match(/-([A-Z]+)+([0-9^.]+)([P|C])([0-9,.]+)/)
    if (matches) {
      original.stockSymbol = matches[1];
      original.expirationDate = matches[2];
      original.optionType = matches[3];
      original.strike = matches[4];
      if(quantity) {
        original.moneyOccupied = Math.abs(matches[4] * quantity * 100);
        const isSell = isSellFunc({ position: original });
        if (purchasePrice && isSell) {
          original.potentialGain = Math.abs(purchasePrice * 100 * quantity).toFixed(0);
          original.potentialLose = 'unlimited';
        }
        if (purchasePrice && !isSell) {
          original.potentialGain = 'unlimited';
          original.potentialGain = Math.abs(purchasePrice * 100 * quantity).toFixed(0);
        }
        if (closingPrice && isSell) {
          const profit = ((purchasePrice - Number(closingPrice))*(-quantity)*100).toFixed(2);
          original.profit = profit;
        }
      }
    }
  }
  return original;
};

export default fillInferredValues;
