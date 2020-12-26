import getDaysDifference from '../commons/getDaysDifference';
const getAvgTurnOverDays = ({ list }) => {
  const turnOverDays = list.reduce((result, p) => {
    if(p.get('closedDate')) {
      result = result === null ? 0 : result;
      return result + getDaysDifference({ day1: p.get('openDate'), day2: p.get('closedDate')});
    } else {
      return null;
    }
  }, null);
  return turnOverDays === null ? null : Math.floor(turnOverDays/list.count());
};

export default getAvgTurnOverDays;
