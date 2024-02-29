import {getRandomInteger} from './get-random-integer.js';
import {generateCommentId} from './create-random-Id-generator.js';
import {Id, Photoid} from './make-counter.js';

const OBJECT_COUNT = 25;
const fixedValuesFromTo = {
  MIN_COMMENTID: 1,
  MAX_COMMENTID: 9999,
  MIN_AVATAR: 1,
  MAX_AVATAR: 6,
  MIN_LIKES: 15,
  MAX_LIKES: 200,
  MIN_COMMENTS: 0,
  MAX_COMMENTS: 30
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

const commentInformation = () => ({
  id: generateCommentId(),
  url: `img/avatar-${getRandomInteger(fixedValuesFromTo.MIN_AVATAR, fixedValuesFromTo.MAX_AVATAR)}.svg`,
  message: MESSAGES[getRandomInteger(0, MESSAGES.length - 1)],
  name: `${NAMES[getRandomInteger(0, NAMES.length - 1)] } ${ SURNAMES[getRandomInteger(0, SURNAMES.length - 1)]}`
});

const photoDescription = () => ({
  id: Id(),
  url: `photos/${Photoid()}.jpg`,
  description: DESCRIPTIONS[getRandomInteger(0, DESCRIPTIONS.length - 1)],
  likes: getRandomInteger(fixedValuesFromTo.MIN_LIKES, fixedValuesFromTo.MAX_LIKES),
  comments: Array.from({
    length: getRandomInteger(fixedValuesFromTo.MIN_COMMENTS, fixedValuesFromTo.MAX_COMMENTS)
  }, commentInformation)
});


const generatedObjectArrays = () => Array.from({
  length: OBJECT_COUNT
}, photoDescription);

export {fixedValuesFromTo};
export {generatedObjectArrays};
