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

const displayInferredFields = metaFields.concat(['stockSymbol', 'expirationDate', 'strike', 'moneyOccupied', 'potentialGain']);

const closedFields = ['closingPrice', 'closedDate']

const fields = {
  closedFields,
  metaFields,
  displayInferredFields,
  inferredFields,
};

export default fields;
