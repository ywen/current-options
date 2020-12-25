const getPercentage = ({ dividend, divisor }) => {
  return Number((dividend / divisor * 100).toFixed(2));
};

export default getPercentage;
