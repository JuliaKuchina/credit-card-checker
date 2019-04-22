import { trancateToCardType } from './trancateToCardType';

jest.mock('./stringFunctions', () => ({
  getLengthOfCardNumber: jest.fn()
    .mockReturnValueOnce(15)
    .mockReturnValueOnce(16)
    .mockReturnValueOnce(13),
}));

describe('validateCard', () => {
  it('should return string with length === 15', () => {
    expect(trancateToCardType('111111111111111111111111', 'amex')).toHaveLength(15);
  });
  it('should return string with length === 16', () => {
    expect(trancateToCardType('111111111111111111111111', 'amex')).toEqual('1111111111111111');
  });
  it('should return string with length === 13', () => {
    expect(trancateToCardType('111111111111111111111111', 'amex')).toHaveLength(13);
  });
});