const numberDecline = (number, nominative, genitiveSingular, genitivePlural) => {
  const number1 = number % 10;
  const number2 = number % 100;

  if (number2 === 11 || number2 === 12 || number2 === 13 || number2 === 14) {
    return (genitivePlural);
  } else if (number1 >= 2 && number1 <= 4) {
    return (genitiveSingular);
  } else if (number1 === 1) {
    return (nominative);
  } else {
    return (genitivePlural);
  }
};

export {
  numberDecline
};
