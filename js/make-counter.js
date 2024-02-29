const makeCounter = () => {
  let currentCount = 1;

  return function() {
    return currentCount++;
  };
};

const Id = makeCounter();
const Photoid = makeCounter();

export {Id, Photoid};
