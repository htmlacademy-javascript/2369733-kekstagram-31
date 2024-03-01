import {
  generatedObjectArrays
} from './generated-object';
import {
  checkStringLength
} from './check-string-length';
import {
  extractNumber
} from './extract-number';
import {
  testPolyndrome
} from './test-polyndrome';

console.log(2 + 2);
console.log(checkStringLength('проверяемая строка', 20));
console.log(extractNumber('извлекает содержащиеся в ней цифры от 0 до 9'));
console.log(testPolyndrome('Лёша на полке клопа нашёл '));
console.table(generatedObjectArrays());
