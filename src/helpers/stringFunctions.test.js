import {
  validateFirstNumbers,
  findCardType,
  createNumber,
  validateNumberLength,
  formatText,
  cleanInputText,
  getLengthOfCardNumber
} from './stringFunctions';

describe('findCardType', () => {
  it('should return visa if "4111111111111111"', () => {
    expect(findCardType('4111111111111111')).toEqual('visa');
  });
  it('should return visa if "411"', () => {
    expect(findCardType('411')).toEqual('visa');
  });
  it('should return amex if "378282246310005"', () => {
    expect(findCardType('378282246310005')).toEqual('amex');
  });
  it('should return discover if "6011111111111117"', () => {
    expect(findCardType('6011111111111117')).toEqual('discover');
  });
  it('should return "" if "6111111111111117"', () => {
    expect(findCardType('6111111111111117')).toEqual('');
  });
  it('should return mastercard if "5105105105105100"', () => {
    expect(findCardType('5105105105105100')).toEqual('mastercard');
  });
  it('should return mastercard if "55"', () => {
    expect(findCardType('55')).toEqual('mastercard');
  });
  it('should return "" if "5"', () => {
    expect(findCardType('5')).toEqual('');
  });
  it('should return "" if "1111111"', () => {
    expect(findCardType('1111111')).toEqual('');
  });
 
});

describe('getLengthOfCardNumber', () => {
  it('should return 15 if "amex"', () => {
    expect(getLengthOfCardNumber('amex')).toEqual(15);
  });
  it('should return 16 if NOT "amex"', () => {
    expect(getLengthOfCardNumber('visa')).toEqual(16);
  });
});

describe('cleanInputText', () => {
  it('should return digits only correctly', () => {
    expect(cleanInputText('111sdf trh weerrr \n 1111111')).toEqual('1111111111');
  });
  it('should return digits only correctly', () => {
    expect(cleanInputText('')).toEqual('');
  });
  it('should return digits only correctly', () => {
    expect(cleanInputText('983475b93845b 3485 3458 ')).toEqual('9834759384534853458');
  });
  it('should return digits only correctly', () => {
    expect(cleanInputText('333')).toEqual('333');
  });
});

describe('formatText', () => {
  it('should return format text correctly', () => {
    expect(formatText('1111111111')).toEqual('1111 1111 11');
  });
  it('should return format text correctly', () => {
    expect(formatText('111')).toEqual('111');
  });
  it('should return format text correctly', () => {
    expect(formatText('')).toEqual('');
  });
  it('should return format text correctly', () => {
    expect(formatText('5105105105105106')).toEqual('5105 1051 0510 5106');
  });
});

describe('validateNumberLength', () => {
  it('should return false when card type is "amex" and length is 1', () => {
    expect(validateNumberLength('1', 'amex')).toEqual(false);
  });
  it('should return true when card type is "amex" and length is 15', () => {
    expect(validateNumberLength('378282246310005', 'amex')).toEqual(true);
  });
  it('should return true when card type is "visa" and length is 13', () => {
    expect(validateNumberLength('3782822463100', 'visa')).toEqual(true);
  });
  it('should return true when card type is "visa" and length is 16', () => {
    expect(validateNumberLength('3782822463100000', 'visa')).toEqual(true);
  });
  it('should return false when card type is "visa" and length is 15', () => {
    expect(validateNumberLength('378282246310000', 'visa')).toEqual(false);
  });
  it('should return true when card type is "dinners" and length is 16', () => {
    expect(validateNumberLength('3782822463100000', 'dinners')).toEqual(true);
  });
  it('should return false when card type is "dinners" and length is 15', () => {
    expect(validateNumberLength('378282246310000', 'dinners')).toEqual(false);
  });
});

describe('createNumber', () => {
  it('should return 2 when index is odd', () => {
    expect(createNumber(1, 1)).toEqual(2);
  });
  it('should return 1 when index is even', () => {
    expect(createNumber(1, 0)).toEqual(1);
  });
  it('should return 9 when index is even', () => {
    expect(createNumber(9, 0)).toEqual(9);
  });
  it('should return 7 when index is odd', () => {
    expect(createNumber(8, 5)).toEqual(7);
  });
  it('should return 0 when index is odd', () => {
    expect(createNumber(0, 5)).toEqual(0);
  });
});

describe('validateFirstNumbers', () => {
  it('should return true when value is 4111111111111111 ', () => {
    expect(validateFirstNumbers('4111111111111111')).toEqual(true);
  });
  it('should return true when value is 4012', () => {
    expect(validateFirstNumbers('4012')).toEqual(true);
  });
  it('should return true when value is 378282246310005 ', () => {
    expect(validateFirstNumbers('378282246310005')).toEqual(true);
  });
  it('should return true when value is 3', () => {
    expect(validateFirstNumbers('3')).toEqual(true);
  });
  it('should return false when value is 31', () => {
    expect(validateFirstNumbers('31')).toEqual(false);
  });
  it('should return true when value is 6011111111111117 ', () => {
    expect(validateFirstNumbers('6011111111111117')).toEqual(true);
  });
  it('should return true when value is 601', () => {
    expect(validateFirstNumbers('601')).toEqual(true);
  });
  it('should return true when value is 602', () => {
    expect(validateFirstNumbers('602')).toEqual(false);
  });
  it('should return true when value is 61', () => {
    expect(validateFirstNumbers('61')).toEqual(false);
  });
  it('should return true when value is 6', () => {
    expect(validateFirstNumbers('6')).toEqual(true);
  });
  it('should return true when value is 4', () => {
    expect(validateFirstNumbers('4')).toEqual(true);
  });
  it('should return true when value is 5105105105105100 ', () => {
    expect(validateFirstNumbers('5105105105105100')).toEqual(true);
  });
  it('should return false when value is 9111111111111111 ', () => {
    expect(validateFirstNumbers('9111111111111111')).toEqual(false);
  });
  it('should return true when value is "" ', () => {
    expect(validateFirstNumbers('')).toEqual(false);
  });

});