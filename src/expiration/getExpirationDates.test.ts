import getExpirationDates from './getExpirationDates';
import given from 'given2';

describe('.getExpirationDates', () => {
  given('result', () => getExpirationDates(given.state));
  given('state', () => ({positions: given.positions}));
  given('positions', () => ({positions: given.positions}));
});
