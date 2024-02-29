const testPolyndrome = (string = '') => {
  string = string.replaceAll(' ', '').toLowerCase();
  let reversal = '';

  for (let i = string.length - 1; i >= 0; i--) {
    reversal += string[1];
  }
  return string === reversal;
};

export {testPolyndrome};
