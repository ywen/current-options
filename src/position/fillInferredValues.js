const fillInferredValues = ({original}) => {
  let result = original;
  const quantity = original.get('quantity');
  const purchasePrice = original.get('purchasePrice');
  const closingPrice = original.get('closingPrice');
  const symbol = original.get('symbol');
  const matches = symbol.match(/-([A-Z]+)+([0-9^.]+)([P|C])([0-9,.]+)/)
  if (matches) {
    result = result.set('stockSymbol', matches[1]);
    result = result.set('expirationDate', matches[2]);
    result = result.set('optionType', matches[3]);
    result = result.set('strike', matches[4]);
    if(quantity) {
      result = result.set('moneyOccupied', Math.abs(matches[4] * quantity * 100));
      const isSell = Number(quantity) < 0;
      if (purchasePrice && isSell) {
        result = result.set('potentialGain', Math.abs(purchasePrice * 100 * quantity).toFixed(0));
        result = result.set('potentialLose', 'unlimited');
      }
      if (purchasePrice && !isSell) {
        result = result.set('potentialGain', 'unlimited');
        result = result.set('potentialGain', Math.abs(purchasePrice * 100 * quantity).toFixed(0));
      }
      if (closingPrice && isSell) {
        result = result.set('profit', (purchasePrice - Number(closingPrice))*(-quantity)*100);
      }
    }
  }
  return result;
};

export default fillInferredValues;
