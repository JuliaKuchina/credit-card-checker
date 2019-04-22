import { validateNumberLength, validateFirstNumbers } from './stringFunctions';
import { luhnCheck } from './luhnCheck';

export function validateCard(numberStr, cardType, checkLength) {
  if (!validateFirstNumbers(numberStr)) return false;
  const lengthValid = validateNumberLength(numberStr, cardType);
  if (checkLength) return lengthValid;
  if (lengthValid) return luhnCheck(numberStr);
  return true;

}