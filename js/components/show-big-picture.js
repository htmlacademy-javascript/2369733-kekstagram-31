import {
  renderComments
} from '../components/render-сomments';


const body = document.body;
const bigPicture = body.querySelector('.big-picture');
const cancelButton = bigPicture.querySelector('.big-picture__cancel');

const hideBigPicture = () => {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onEscKeyDown);
};

function onEscKeyDown(evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    hideBigPicture();
  }
}

const onCancelButtonClick = () => {
  hideBigPicture();
};


const showBigPicture = ({ url, likes, description, comments }) => {
  const img = bigPicture.querySelector('.big-picture__img img');
  const likesCount = bigPicture.querySelector('.likes-count');
  const socialCaption = bigPicture.querySelector('.social__caption');

  img.src = url;
  img.alt = description;
  likesCount.textContent = likes;
  socialCaption.textContent = description;

  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');

  renderComments(comments, bigPicture);

  document.addEventListener('keydown', onEscKeyDown);
};

cancelButton.addEventListener('click', onCancelButtonClick);

export { showBigPicture };
