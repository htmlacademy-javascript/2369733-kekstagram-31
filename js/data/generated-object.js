import {
  getRandomInteger
} from '../utils/get-random-integer.js';
import {
  createRandomIdFromRangeGenerator
} from '../utils/create-random-Id-generator.js';
import {
  makeCounter
} from '../utils/make-counter.js';

const OBJECT_COUNT = 25;
const COMMENTS_ID = {
  min: 1,
  max: 9999,
};
const AVATARS = {
  min: 1,
  max: 6,
};
const LIKES = {
  min: 15,
  max: 200,
};
const COMMENTS = {
  min: 0,
  max: 30,
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
const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'

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

const createId = makeCounter();
const createPhotoid = makeCounter();
const generateCommentId = createRandomIdFromRangeGenerator(COMMENTS_ID.min, COMMENTS_ID.max);

const commentInformation = () => ({
  id: generateCommentId(),
  avatar: `img/avatar-${getRandomInteger(AVATARS.min, AVATARS.max)}.svg`,
  message: MESSAGES[getRandomInteger(0, MESSAGES.length - 1)],
  name: `${NAMES[getRandomInteger(0, NAMES.length - 1)] } ${ SURNAMES[getRandomInteger(0, SURNAMES.length - 1)]}`
});

const photoDescription = () => ({
  id: createId(),
  url: `photos/${createPhotoid()}.jpg`,
  description: DESCRIPTIONS[getRandomInteger(0, DESCRIPTIONS.length - 1)],
  likes: getRandomInteger(LIKES.min, LIKES.max),
  comments: Array.from({
    length: getRandomInteger(COMMENTS.min, COMMENTS.max)
  }, commentInformation)
});


const generatedObjectArrays = () => Array.from({
  length: OBJECT_COUNT
}, photoDescription);

export {
  generatedObjectArrays
};
