const metaFields = ['symbol', 'quantity', 'purchasePrice', 'openDate'];
const inferredFields = [
  'stockSymbol',
  'expirationDate',
  'optionType',
  'strike',
  'moneyOccupied',
  'potentialGain',
  'potentialLose',
  'account',
];

const closedFields = ['closingPrice', 'closedDate']

const fields = {
  closedFields,
  metaFields,
  inferredFields,
};

export default fields;
