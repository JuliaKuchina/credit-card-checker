import { cleanInputText, findCardType, trancateToCardType, formatText, validateCard } from './';

export function numberConstructor(text, checkLength) {
  let numberObject = {
    formattedNumber: '',
    type: '',
    valid: true
  };
  let numberStr = cleanInputText(text);
  if (!numberStr) return numberObject;

  numberObject.type = findCardType(numberStr);
  numberStr = trancateToCardType(numberStr, numberObject.type);
  numberObject.formattedNumber = formatText(numberStr);
  numberObject.valid = validateCard(numberStr, numberObject.type, checkLength);

  return numberObject;
}