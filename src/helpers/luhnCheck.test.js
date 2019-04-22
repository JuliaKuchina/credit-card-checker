import { luhnCheck } from './luhnCheck';

describe('luhnCheck', () => {
  it('should return true ', () => {
    expect(luhnCheck('')).toEqual(true);
  });
  it('should return false ', () => {
    expect(luhnCheck('1111')).toEqual(false);
  });
  it('should return true when value 4111111111111111', () => {
    expect(luhnCheck('4111111111111111')).toEqual(true);
  });
  it('should return false ', () => {
    expect(luhnCheck('4111111111111')).toEqual(false);
  });
  it('should return true when value 4012888888881881', () => {
    expect(luhnCheck('4012888888881881')).toEqual(true);
  });
  it('should return true when value = 378282246310005 ', () => {
    expect(luhnCheck('378282246310005')).toEqual(true);
  });
  it('should return true when value = 6011111111111117 ', () => {
    expect(luhnCheck('6011111111111117')).toEqual(true);
  });
  it('should return true when value = 5105105105105100 ', () => {
    expect(luhnCheck('5105105105105100')).toEqual(true);
  });
  it('should return true when value = 5105105105105106 ', () => {
    expect(luhnCheck('5105105105105106')).toEqual(false);
  });
  it('should return true when value = 9111111111111111 ', () => {
    expect(luhnCheck('9111111111111111')).toEqual(false);
  });
});