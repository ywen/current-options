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

const closedFields = ['closingPrice', 'closedDate']

const displayInferredFields = metaFields.concat(['stockSymbol', 'expirationDate', 'strike', 'moneyOccupied', 'potentialGain']);

const displayClosedPositionsFields = metaFields.concat(['stockSymbol', 'strike']).concat(closedFields);

const fields = {
  closedFields,
  metaFields,
  displayInferredFields,
  displayClosedPositionsFields,
  inferredFields,
};

export default fields;
