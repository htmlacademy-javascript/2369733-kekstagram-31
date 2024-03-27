const COMMENTS_PORTION = 5;
let template = null;
const createComment = ({
  avatar,
  name,
  message
}) => {

  const comment = template.cloneNode(true);
  const image = comment.querySelector('.social__picture');
  const socialText = comment.querySelector('.social__text');

  image.src = avatar;
  image.alt = name;
  socialText.textContent = message;

  return comment;
};


const renderComments = (comments, bigPicture) => {
  const commentList = bigPicture.querySelector('.social__comments');
  const commentsLoader = bigPicture.querySelector('.comments-loader');
  const commentShowCount = bigPicture.querySelector('.social__comment-shown-count');
  let commentsShown = 0;

  template = template ?? commentList.children[0];
  commentList.innerHTML = '';

  const shownComments = () => {
    const startIndex = commentsShown * COMMENTS_PORTION;
    commentsShown++;
    const endIndex = Math.min(
      startIndex + COMMENTS_PORTION,
      comments.length
    );

    const slicedComments = comments.slice(startIndex, endIndex);

    slicedComments.forEach((comment) => {
      commentList.append(createComment(comment, template));
    });

    if (startIndex >= comments.length) {
      commentsLoader.classList.add('hidden');
      commentsShown = comments.length;
    } else {
      commentsLoader.classList.remove('hidden');
    }
    commentShowCount.textContent = endIndex;

  };
  shownComments();

  commentsLoader.addEventListener('click', () => {
    shownComments();
  });
};

export {
  renderComments
};
