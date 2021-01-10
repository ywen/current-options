const startOf = ({ day }) => new Date(day.setHours(0, 0, 0, 0));
const endOf = ({ day }) => new Date(day.setHours(23, 59, 59, 999));
const now = () => new Date(Date.now());
const today = () => {
  const day = now();
  return {
    startDate: startOf({ day }),
    endDate: endOf({ day }),
  }
};

const thisWeek = () => {
  const d = now();
  const weekDay = d.getDay();
  const diff = d.getDate() - weekDay + (weekDay === 0 ? -6 : 1);
  const weekStart = (d.setDate(diff));
  const sixDays = 6 * 24 * 60 * 60 * 1000;
  const endDay = new Date(weekStart + sixDays);
  const startDay = new Date(weekStart);
  return {
    startDate: startOf({ day: startDay }),
    endDate: endOf({ day: endDay }),
  }
};

const thisMonth = () => {
  const d = now();
  const startDay = new Date(d.getFullYear(), d.getMonth(), 1);
  const endDay = new Date(d.getFullYear(), d.getMonth() + 1, 0)
  return {
    startDate: startOf({ day: startDay }),
    endDate: endOf({ day: endDay }),
  }
};

const thisYear = () => {
  const d = now();
  const startDay = new Date(d.getFullYear(), 0, 1);
  const endDay = new Date(d.getFullYear(), 11, 31);
  return {
    startDate: startOf({ day: startDay }),
    endDate: endOf({ day: endDay }),
  }
};

const namesWithDate = {
  today,
  thisWeek,
  thisMonth,
  thisYear,
};

const names = Object.keys(namesWithDate);
const getDateByName = ({ name }) => namesWithDate[name]();

export {
  names,
  getDateByName,
};
