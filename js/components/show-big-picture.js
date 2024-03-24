import { renderComments} from './render-comments.js';
import {
  isEscKeyDown
} from '../utils/is-esc-key-down.js';

const body = document.body;
const bigPicture = body.querySelector('.big-picture');
const cancelButton = bigPicture.querySelector('.big-picture__cancel');
const commentsLoader = bigPicture.querySelector('.comments-loader');

const hideBigPicture = () => {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  commentsLoader.classList.remove('hidden');
  document.removeEventListener('keydown', onEscKeyDown);
};

function onEscKeyDown(evt) {
  isEscKeyDown(evt);
  evt.preventDefault();
  hideBigPicture();

}

const onCancelButtonClick = () => {
  hideBigPicture();
};

const showBigPicture = ({
  url,
  description,
  comments,
  likes
}) => {

  const img = bigPicture.querySelector('.big-picture__img img');
  const socialCaption = bigPicture.querySelector('.social__caption');
  const socialComment = bigPicture.querySelector('.social__comment-total-count');
  const likesCount = bigPicture.querySelector('.likes-count');

  img.src = url;
  socialCaption.alt = description;
  socialComment.textContent = comments.length;
  likesCount.textContent = likes;


  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');

  renderComments(comments, bigPicture);

  document.addEventListener('keydown', onEscKeyDown);
};

cancelButton.addEventListener('click', onCancelButtonClick);

export {
  showBigPicture
};
