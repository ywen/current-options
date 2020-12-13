const metaFields = ['symbol', 'quantity', 'purchasePrice', 'openDate'];
const inferredFields = [
  'stockSymbol',
  'expirationDate',
  'optionType',
  'strike',
  'moneyOccupied',
  'purchasePrice',
  'potentialGain',
  'potentialLose',
];

const fields = {
  metaFields,
  inferredFields,
};

export default fields;
