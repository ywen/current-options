const getDaysDifference = ({ day1, day2 }) => {
  const d1 = new Date(day1);
  d1.setHours(0,0,0,0)
  const d2 = new Date(day2);
  d2.setHours(0,0,0,0)
  return Math.floor((d2 - d1)/1000/2600/24) + 1;
};

export default getDaysDifference;
