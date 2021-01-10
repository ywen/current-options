import given from 'given2';

import { getDateByName } from './timeFilterNames';

describe('.getDateByName', () => {
  beforeEach(() => {
    jest.spyOn(global.Date, 'now').mockImplementationOnce(() =>
      given.now.valueOf()
    );
  });

  const itReturnsCorrectlyTimeGiven = ({ dayName }) => {
    describe(`when the name is ${dayName}`, () => {
      it(`returns the start of ${dayName}`, () => {
        const result = getDateByName({ name: dayName });
        expect(result).toEqual(given[dayName]);
      });
    });
  };

  describe('a regular month', () => {
    given('now', () => new Date('2021-03-14T11:01:58.135Z'));
    given('today', () => ({
      startDate: new Date(given.now.setHours(0, 0, 0, 0)),
      endDate: new Date(given.now.setHours(23, 59, 59, 999)),
    }));

    given('thisWeek', () => {
      const startDay = new Date('2021-03-08T11:01:58.135Z');
      const endDay = new Date('2021-03-14T11:01:58.135Z');
      return {
        startDate: new Date(startDay.setHours(0, 0, 0, 0)),
        endDate: new Date(endDay.setHours(23, 59, 59, 999)),
      };
    });

    given('thisMonth', () => {
      const startDay = new Date('2021-03-01T11:01:58.135Z');
      const endDay = new Date('2021-03-31T11:01:58.135Z');
      return {
        startDate: new Date(startDay.setHours(0, 0, 0, 0)),
        endDate: new Date(endDay.setHours(23, 59, 59, 999)),
      };
    });

    given('thisYear', () => {
      const startDay = new Date('2021-01-01T11:01:58.135Z');
      const endDay = new Date('2021-12-31T11:01:58.135Z');
      return {
        startDate: new Date(startDay.setHours(0, 0, 0, 0)),
        endDate: new Date(endDay.setHours(23, 59, 59, 999)),
      };
    });

    itReturnsCorrectlyTimeGiven({ dayName: 'today'});
    itReturnsCorrectlyTimeGiven({ dayName: 'thisWeek'});
    itReturnsCorrectlyTimeGiven({ dayName: 'thisMonth'});
    itReturnsCorrectlyTimeGiven({ dayName: 'thisYear'});
  });

  describe('with some irregular month', () => {
    given('now', () => new Date('2021-02-25T11:01:58.135Z'));
    given('today', () => ({
      startDate: new Date(given.now.setHours(0, 0, 0, 0)),
      endDate: new Date(given.now.setHours(23, 59, 59, 999)),
    }));

    given('thisWeek', () => {
      const startDay = new Date('2021-02-22T11:01:58.135Z');
      const endDay = new Date('2021-02-28T11:01:58.135Z');
      return {
        startDate: new Date(startDay.setHours(0, 0, 0, 0)),
        endDate: new Date(endDay.setHours(23, 59, 59, 999)),
      };
    });

    given('thisMonth', () => {
      const startDay = new Date('2021-02-01T11:01:58.135Z');
      const endDay = new Date('2021-02-28T11:01:58.135Z');
      return {
        startDate: new Date(startDay.setHours(0, 0, 0, 0)),
        endDate: new Date(endDay.setHours(23, 59, 59, 999)),
      };
    });

    given('thisYear', () => {
      const startDay = new Date('2021-01-01T11:01:58.135Z');
      const endDay = new Date('2021-12-31T11:01:58.135Z');
      return {
        startDate: new Date(startDay.setHours(0, 0, 0, 0)),
        endDate: new Date(endDay.setHours(23, 59, 59, 999)),
      };
    });

    itReturnsCorrectlyTimeGiven({ dayName: 'today'});
    itReturnsCorrectlyTimeGiven({ dayName: 'thisWeek'});
    itReturnsCorrectlyTimeGiven({ dayName: 'thisMonth'});
    itReturnsCorrectlyTimeGiven({ dayName: 'thisYear'});
  });

  describe('with cross month', () => {
    given('now', () => new Date('2021-03-30T11:01:58.135Z'));
    given('today', () => ({
      startDate: new Date(given.now.setHours(0, 0, 0, 0)),
      endDate: new Date(given.now.setHours(23, 59, 59, 999)),
    }));

    given('thisWeek', () => {
      const startDay = new Date('2021-03-29T11:01:58.135Z');
      const endDay = new Date('2021-04-04T11:01:58.135Z');
      return {
        startDate: new Date(startDay.setHours(0, 0, 0, 0)),
        endDate: new Date(endDay.setHours(23, 59, 59, 999)),
      };
    });

    given('thisMonth', () => {
      const startDay = new Date('2021-03-01T11:01:58.135Z');
      const endDay = new Date('2021-03-31T11:01:58.135Z');
      return {
        startDate: new Date(startDay.setHours(0, 0, 0, 0)),
        endDate: new Date(endDay.setHours(23, 59, 59, 999)),
      };
    });

    given('thisYear', () => {
      const startDay = new Date('2021-01-01T11:01:58.135Z');
      const endDay = new Date('2021-12-31T11:01:58.135Z');
      return {
        startDate: new Date(startDay.setHours(0, 0, 0, 0)),
        endDate: new Date(endDay.setHours(23, 59, 59, 999)),
      };
    });

    itReturnsCorrectlyTimeGiven({ dayName: 'today'});
    itReturnsCorrectlyTimeGiven({ dayName: 'thisWeek'});
    itReturnsCorrectlyTimeGiven({ dayName: 'thisMonth'});
    itReturnsCorrectlyTimeGiven({ dayName: 'thisYear'});
  });
});
