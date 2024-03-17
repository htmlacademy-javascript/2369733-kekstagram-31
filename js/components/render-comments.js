import { bigPicture } from './show-big-picture';

const createComment = ({
  avatar,
  name,
  message
}, template) => {

  const comment = template.cloneNode(true);
  const image = comment.querySelector('.social__picture');
  const socialText = comment.querySelector('.social__text');

  image.src = avatar;
  image.alt = name;
  socialText.textContent = message;

  return comment;
};

const renderComments = (comments) => {
  const commentList = bigPicture.querySelector('.social__comments');
  const commentsLoader = bigPicture.querySelector('.comments-loader');
  const commentShowCount = bigPicture.querySelector('.social__comment-shown-count');
  let commentsShown = 0;

  const template = commentList.children[0];
  const fragment = document.createDocumentFragment();

 

  comments.forEach((comment) => {
    const commentElement = createComment(comment, template);
    fragment.append(commentElement);
  });

  commentList.innerHTML = '';
  commentList.append(fragment);
};

export {
  renderComments
};
