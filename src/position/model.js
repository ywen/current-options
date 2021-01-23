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
const closingFormFields = closedFields.concat('quantity');

const displayInferredFields = metaFields.concat(['stockSymbol', 'expirationDate', 'strike', 'moneyOccupied', 'potentialGain']);

const displayClosedPositionsFields = metaFields.concat(['stockSymbol', 'profit']).concat(closedFields);

const isClosed = ({ data }) => data && data.hasOwnProperty('closedDate');
const isNewRecord = ({ data }) => data && !data.hasOwnProperty('id');

const fields = {
  closedFields,
  closingFormFields,
  metaFields,
  displayInferredFields,
  displayClosedPositionsFields,
  inferredFields,
  isClosed,
  isNewRecord,
};

export default fields;
