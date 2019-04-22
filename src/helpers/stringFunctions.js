export function createNumber(oneNumber, ind) {
  const doubledChar = ((ind % 2 === 1) ? +oneNumber * 2 : oneNumber).toString();
  return doubledChar.length > 1 ?
    +doubledChar[0] + (+doubledChar[1]) :
    +doubledChar;
}

export function validateFirstNumbers(numberStr) {
  const match = numberStr.match(/^(4|34|37|51|55|6011|3$|5$|6$|60$|601$)/);
  return !!match;
}

export function validateNumberLength(numberStr, cardType) {
  switch (cardType) {
    case 'amex':
      return numberStr.length === 15;
    case 'visa':
      return numberStr.length === 16 || numberStr.length === 13;
    default:
      return numberStr.length === 16;
  }
}

export function formatText(numberStr) {
  return numberStr.replace(/.{4}(?=.)/g, '$& ');
}

export function cleanInputText(text) {
  const arr = text.match(/[0-9]/g);
  return arr ? arr.join('') : '';
}

export function getLengthOfCardNumber(cardType) {
  return cardType === 'amex' ? 15 : 16;
}

export function findCardType(numberStr) {

  if (numberStr.match(/^4/) != null)
    return "visa";

  if (numberStr.match(/^5[15]/) != null)
    return "mastercard";

  if (numberStr.match(/^3[47]/) != null)
    return "amex";

  if (numberStr.match(/^6011/) != null)
    return "discover";

  return "";
}
