import given from 'given2';

import { getDateByName } from './timeFilterNames';

describe('.getDateByName', () => {
  beforeEach(() => {
    jest.spyOn(global.Date, 'now').mockImplementationOnce(() =>
      given.now.valueOf()
    );
  });
  given('now', () => new Date('2021-03-14T11:01:58.135Z'));
  given('today', () => new Date(given.now.setHours(0, 0, 0, 0)));

  given('thisWeek', () => (
    new Date(new Date('2021-03-08T11:01:58.135Z').setHours(0, 0, 0, 0))
  ));

  given('thisMonth', () => (
    new Date(new Date('2021-03-01T11:01:58.135Z').setHours(0, 0, 0, 0))
  ));

  given('thisYear', () => (
    new Date(new Date('2021-01-01T11:01:58.135Z').setHours(0, 0, 0, 0))
  ));

  const itReturnsCorrectlyTimeGiven = ({ dayName }) => {
    describe(`when the name is ${dayName}`, () => {
      it(`returns the start of ${dayName}`, () => {
        const result = getDateByName({ name: dayName });
        expect(result).toEqual(given[dayName]);
      });
    });
  };

  itReturnsCorrectlyTimeGiven({ dayName: 'today'});
  itReturnsCorrectlyTimeGiven({ dayName: 'thisWeek'});
  itReturnsCorrectlyTimeGiven({ dayName: 'thisMonth'});
  itReturnsCorrectlyTimeGiven({ dayName: 'thisYear'});
});
