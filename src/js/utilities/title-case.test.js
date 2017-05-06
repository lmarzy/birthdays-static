import { expect } from 'chai';

import titleCase from './title-case';

const testCases = [
  {
    input: 'test one',
    expect: 'Test One'
  },
  {
    input: 'testTwo',
    expect: 'Testtwo'
  },
  {
    input: 123,
    expect: null
  }
];

describe('Convert to title case', () => {
  testCases.forEach(testCase => {
    it(`Expect ${testCase.input} to return ${testCase.expect}`, () => {
      expect(titleCase(testCase.input)).to.equal(testCase.expect);
    });
  });
});
