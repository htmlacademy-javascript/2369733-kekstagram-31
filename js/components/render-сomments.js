const createComment = ({ url, name, message }, template) => {
  const comment = template.cloneNode(true);
  const image = comment.querySelector('.social__picture');
  const socialText = comment.querySelector('.social__text');

  image.src = url;
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
