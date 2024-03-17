const body = document.body;
const bigPicture = body.querySelector('.big-picture');
const cancelButton = bigPicture.querySelector('.big-picture__cancel');


const createComment = ({ avatar, name, message }, template) => {
  const comment = template.cloneNode(true);

  const image = comment.querySelector('.social__picture');
  const socialText = comment.querySelector('.social__text');

  image.src = avatar;
  image.alt = name;
  socialText.textContent = message;

  return comment;
};

const renderComments = (comments) => {
  const commentList = document.querySelector('.social__comments');
  const template = commentList.children[0];

  commentList.innerHTML = '';

  const fragment = document.createDocumentFragment();
  comments.forEach((comment) => {
    const commentElement = createComment(comment, template);
    fragment.append(commentElement);
  });

  commentList.append(fragment);
};

export { renderComments };

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
