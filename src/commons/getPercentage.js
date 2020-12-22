const getPercentage = ({ dividend, divisor }) => {
  return `% ${(dividend / divisor * 100).toFixed(2)}`
};

export default getPercentage;
