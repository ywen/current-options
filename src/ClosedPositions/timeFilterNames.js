const today = () => new Date(new Date(Date.now()).setHours(0, 0, 0, 0));
const thisWeek = () => {
  const d = today();
  const day = d.getDay();
  const diff = d.getDate() - day + (day == 0 ? -6 : 1);
  return new Date(d.setDate(diff));
};

const thisMonth = () => {
  const d = today();
  return new Date(d.getFullYear(), d.getMonth(), 1);
};

const thisYear = () => {
  const d = today();
  return new Date(d.getFullYear(), 0, 1);
};

const namesWithDate = {
  today,
  thisWeek,
  thisMonth,
  thisYear,
};

const names = ['thisYear', 'thisMonth', 'thisWeek', 'today'];
const getDateByName = ({ name }) => namesWithDate[name]();

export {
  names,
  getDateByName,
};
