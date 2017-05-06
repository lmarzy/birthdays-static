import { expect } from 'chai';

import calcAge from './calc-age';

const testCases = [
  {
    input: '2006-01-23T00:00:00.000Z',
    expect: 11
  },
  {
    input: 123,
    expect: null
  }
];

describe('Cacculage Age', () => {
  testCases.forEach(testCase => {
    it(`Expect ${testCase.input} to return ${testCase.expect}`, () => {
      expect(calcAge(testCase.input)).to.equal(testCase.expect);
    });
  });
});
