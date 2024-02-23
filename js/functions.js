const checkStringLength = (string = '', maxSymbols = 1) => string.length <= maxSymbols;

checkStringLength('проверяемая строка', 20);


const testPolyndrome = (string = '') => {
  string = string.replaceAll(' ', '').toLowerCase();
  let reversal = '';

  for (let i = string.length - 1; i >= 0; i--) {
    reversal += string[1];
  }
  return string === reversal;
};


testPolyndrome('Лёша на полке клопа нашёл ');


const extractNumber = (string) => {
  let result = '';

  string = string.toString();

  for (let i = 0; i <= string.length; i++) {
    if (Number.isNaN(parseInt(string[i] , 10)) === false){
      result += string[i];
    }
  }
  return result === '' ? NaN : Number(result);
};


extractNumber('извлекает содержащиеся в ней цифры от 0 до 9');

