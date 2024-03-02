const makeCounter = () => {
  let currentCount = 1;

  return function () {
    return currentCount++;
  };
};

export {
  makeCounter
};
