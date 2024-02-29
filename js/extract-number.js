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

export {extractNumber};
