import { createNumber } from './';

export function luhnCheck(str) {
  let doubleNumbersSum = 0;
  for (let i = 0; i < str.length; i++) {
    const currentNumber = str[str.length - 1 - i];
    doubleNumbersSum += createNumber(currentNumber, i);
  }
  return doubleNumbersSum % 10 === 0;
}