import { validateCard } from './validateCard';

jest.mock('./stringFunctions', () => ({
  validateFirstNumbers: jest.fn()
    .mockReturnValueOnce(true)
    .mockReturnValueOnce(true)
    .mockReturnValueOnce(false)
    .mockReturnValueOnce(false),

  validateNumberLength: jest.fn()
    .mockReturnValueOnce(true)
    .mockReturnValueOnce(true)
    .mockReturnValueOnce(false)
    .mockReturnValueOnce(false),
}));
jest.mock('./luhnCheck', () => ({
  luhnCheck: jest.fn()
    .mockReturnValueOnce(true)
    .mockReturnValueOnce(true)
    .mockReturnValueOnce(false),

}));

describe('validateCard', () => {
  it('should return false, when all checks is true', () => {
    expect(validateCard('')).toEqual(true);
  });
  it('should return true, when input is length is correct, and checkLength is true', () => {
    expect(validateCard('', true)).toEqual(true);
  });
  it('should return false, when input is length is wrong, and checkLength is true', () => {
    expect(validateCard('', true)).toEqual(false);
  });
  it('should return false, when all checks are false', () => {
    expect(validateCard('3245')).toEqual(false);
  });

});