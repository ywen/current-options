import formatDate from './formatDate';

describe('formatDate', () => {
  it('returns formatted date string (No time)', () => {
    const date = new Date('2021-03-14T11:01:58.135Z');
    expect(formatDate({ date })).toBe('03/14/2021');
  });
});
