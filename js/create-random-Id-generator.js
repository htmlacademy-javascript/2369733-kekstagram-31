import {getRandomInteger} from './get-random-integer';
import {fixedValuesFromTo} from './generated-object';

const createRandomIdFromRangeGenerator = (min, max) => {
  const previousValues = [];

  return function () {
    let currentValue = getRandomInteger(min, max);
    if (previousValues.length >= (max - min + 1)) {
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
};

const generateCommentId = createRandomIdFromRangeGenerator(fixedValuesFromTo.MIN_COMMENTID, fixedValuesFromTo.MAX_COMMENTID);
export {generateCommentId};
