const OBJECT_COUNT = 25;
const fixedValuesFromTo = {
  minPhotoId: 1,
  maxPhotoId: 25,
  minId: 1,
  maxId: 25,
  minCommentId: 1,
  maxCommentId: 9999,
  minAvatar: 1,
  maxAvatar: 6,
  minLikes: 15,
  maxLikes: 200,
  minComments: 0,
  maxComments: 30
};

const NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон',
];
const SURNAMES = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг',
];
const MASSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
  // 6
];
const DESCRIPTIONS = [
  'Только хорошие флюиды',
  'Надежда важнее всего',
  'Остается только надежда',
  'Избавляйся от вредных привычек',
  'Счастье важнее успеха',
  'Замените вредные привычки',
  'Творчество требует смелости',
  'Цени момент',
  'Мечты сбываются',
  'Дерзай',
  'Попробуй что-нибудь новое',
  'Озаряй жизни',
  'Любовь переносит все'
];

const getRandomInteger = (min, max) => {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
};

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

const GeneratePhotoId = createRandomIdFromRangeGenerator(fixedValuesFromTo.minPhotoId, fixedValuesFromTo.maxPhotoId);
const GenerateId = createRandomIdFromRangeGenerator(fixedValuesFromTo.minId, fixedValuesFromTo.maxId);
const GenerateCommentId = createRandomIdFromRangeGenerator(fixedValuesFromTo.minCommentId, fixedValuesFromTo.maxCommentId);

const commentInformation = () => ({
  id: GenerateCommentId(),
  url: `img/avatar-${getRandomInteger(fixedValuesFromTo.minAvatar, fixedValuesFromTo.maxAvatar)}.svg`,
  message: MASSAGE[getRandomInteger(0, MASSAGE.length - 1)],
  name: `${NAMES[getRandomInteger(0, NAMES.length - 1)] } ${ SURNAMES[getRandomInteger(0, SURNAMES.length - 1)]}`
});

const photoDescription = () => ({
  id: GenerateId(),
  url: `photos/${GeneratePhotoId()}.jpg`,
  description: DESCRIPTIONS[getRandomInteger(0, DESCRIPTIONS.length - 1)],
  likes: getRandomInteger(fixedValuesFromTo.minLikes, fixedValuesFromTo.maxLikes),
  comments: Array.from({
    length: getRandomInteger(fixedValuesFromTo.minComments, fixedValuesFromTo.maxComments)
  }, commentInformation)
});


const generatedObjectArrays = () => Array.from({
  length: OBJECT_COUNT
}, photoDescription);

generatedObjectArrays();

