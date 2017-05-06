import { expect } from 'chai';

import daysUntilNextBirthday from './days-until-next-birthday';

const testCases = [
  {
    input: 123,
    expect: null
  }
];

describe('Days until next Birthday', () => {
  testCases.forEach(testCase => {
    it(`Expect ${testCase.input} to return ${testCase.expect}`, () => {
      expect(daysUntilNextBirthday(testCase.input)).to.equal(testCase.expect);
    });
  });
});
