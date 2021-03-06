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
        original.moneyOccupied = -(matches[4] * quantity * 100);
        const isSell = Number(quantity) < 0;
        if (purchasePrice && isSell) {
          original.potentialGain = Math.abs(purchasePrice * 100 * quantity).toFixed(0);
          original.potentialLose = 'unlimited';
        }
        if (purchasePrice && !isSell) {
          original.potentialLoss = Math.abs(purchasePrice * 100 * quantity).toFixed(0);
          original.potentialGain = -original.potentialLoss;
        }
        if (closingPrice) {
          const profit = ((purchasePrice - Number(closingPrice))*(-quantity)*100).toFixed(2);
          original.profit = profit;
        }
      }
    }
  }
  return original;
};

export default fillInferredValues;
