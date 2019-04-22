import { getLengthOfCardNumber } from './';

export function trancateToCardType(text, cardType) {
  return text.substring(0, getLengthOfCardNumber(cardType));
}