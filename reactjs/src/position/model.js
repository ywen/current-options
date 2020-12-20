const metaFields = ['symbol', 'quantity', 'purchasePrice', 'openDate'];
const inferredFields = [
  'stockSymbol',
  'expirationDate',
  'optionType',
  'strike',
  'moneyOccupied',
  'potentialGain',
  'potentialLose',
];

const closeFields = ['closePrice', 'closeDate']

const fields = {
  closeFields,
  metaFields,
  inferredFields,
};

export default fields;
