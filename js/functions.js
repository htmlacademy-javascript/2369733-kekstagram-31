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
