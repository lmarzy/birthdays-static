import { expect } from 'chai';

import formattedDate from './formatted-date';

const testCases = [
  {
    input: '2006-01-23T00:00:00.000Z',
    expect: '23 January 2006'
  },
  {
    input: 123,
    expect: null
  }
];

describe('Format Date', () => {
  testCases.forEach(testCase => {
    it(`Expect ${testCase.input} to return ${testCase.expect}`, () => {
      expect(formattedDate(testCase.input)).to.equal(testCase.expect);
    });
  });
});
