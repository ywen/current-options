import produce from 'immer';

const fillInferredValues = ({original}) => (
  produce(original, draft => {
    const { quantity, purchasePrice, closingPrice, symbol } = draft;
    if (symbol && purchasePrice && quantity) {
      const matches = symbol.match(/-([A-Z]+)+([0-9^.]+)([P|C])([0-9,.]+)/)
      if (matches) {
        draft.stockSymbol = matches[1];
        draft.expirationDate = matches[2];
        draft.optionType = matches[3];
        draft.strike = matches[4];
        if(quantity) {
          draft.moneyOccupied = Math.abs(matches[4] * quantity * 100);
          const isSell = Number(quantity) < 0;
          if (purchasePrice && isSell) {
            draft.potentialGain = Math.abs(purchasePrice * 100 * quantity).toFixed(0);
            draft.potentialLose = 'unlimited';
          }
          if (purchasePrice && !isSell) {
            draft.potentialGain = 'unlimited';
            draft.potentialGain = Math.abs(purchasePrice * 100 * quantity).toFixed(0);
          }
          if (closingPrice && isSell) {
            const profit = ((purchasePrice - Number(closingPrice))*(-quantity)*100).toFixed(2);
            draft.profit = profit;
          }
        }
      }
    }
  })
);

export default fillInferredValues;
