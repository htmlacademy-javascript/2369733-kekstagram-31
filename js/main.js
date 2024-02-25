const OBJECT_COUNT = 25;
const NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон',
  // 8
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
  // 8
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
  // 8
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

const generatePhotoId = createRandomIdFromRangeGenerator(1, 25);
const generateId = createRandomIdFromRangeGenerator(1, OBJECT_COUNT);
const commentGenerateId = createRandomIdFromRangeGenerator(1, 9999);

const commentInformation = () => ({
  id: commentGenerateId(),
  url: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: MASSAGE[getRandomInteger(0, MASSAGE.length - 1)],
  name: `${NAMES[getRandomInteger(0, NAMES.length - 1)] } ${ SURNAMES[getRandomInteger(0, SURNAMES.length - 1)]}`
});

const photoDescription = () => ({
  id: generateId(),
  url: `photos/${generatePhotoId()}.jpg`,
  description: DESCRIPTIONS[getRandomInteger(0, DESCRIPTIONS.length - 1)],
  likes: getRandomInteger(15, 200),
  comments: Array.from({
    length: getRandomInteger(0, 30)
  }, commentInformation)
});


const similarWizards = () => Array.from({
  length: OBJECT_COUNT
}, photoDescription);

// console.table(similarWizards());
similarWizards();
