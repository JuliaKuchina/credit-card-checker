import { numberConstructor } from './numberConstructor';

jest.mock('./', () => ({
  cleanInputText: jest.fn(),
  findCardType: jest.fn(),
  trancateToCardType: jest.fn(),
  formatText: jest.fn(),
  cleanInpuvalidateCardtText: jest.fn()
}));

describe('numberConstructor', () => {
  it('should return object { formattedNumber: "", type: "", valid: true } ', () => {
    expect(numberConstructor('')).toEqual({ formattedNumber: "", type: "", valid: true });
  });
  it('should return object { formattedNumber: "", type: "", valid: true } ', () => {
    expect(numberConstructor('skjfh aksefh dskfh')).toEqual({ formattedNumber: "", type: "", valid: true });
  });
  it('should return object { formattedNumber: "", type: "", valid: true } ', () => {
    expect(numberConstructor('3243423')).toEqual({ formattedNumber: "", type: "", valid: true });
  });
});