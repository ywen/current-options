import getDaysDifference from '../commons/getDaysDifference';
const getAvgTurnOverDays = ({ list }) => {
  const turnOverDays = list.reduce((result, p) => {
    if(p.closedDate) {
      result = result === null ? 0 : result;
      return result + getDaysDifference({ day1: p.openDate, day2: p.closedDate});
    } else {
      return null;
    }
  }, null);
  return turnOverDays === null ? null : Math.floor(turnOverDays/list.length);
};

export default getAvgTurnOverDays;
