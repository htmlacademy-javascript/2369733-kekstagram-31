import { showBigPicture} from './show-big-picture.js';

const pictureTemplate = document.querySelector('#picture')
  .content.querySelector('.picture');
const container = document.querySelector('.pictures');


const createPicture = (data) => {
  const { id, url , description, comments, likes, } = data;

  const picture = pictureTemplate.cloneNode(true);
  const img = picture.querySelector('.picture__img');
  const pictureComment = picture.querySelector('.picture__comments');
  const pictureLikes = picture.querySelector('.picture__likes');

  picture.setAttribute('id', id);
  img.src = url;
  img.alt = description;
  pictureComment.textContent = comments.length;
  pictureLikes.textContent = likes;

  picture.addEventListener('click', () => {
    showBigPicture(data);
  });

  return picture;
};


const renderPictures = (pictures) => {
  const fragment = document.createDocumentFragment();
  pictures.forEach((picture) => {
    const pictureElement = createPicture(picture);
    fragment.append(pictureElement);
  });

  container.append(fragment);
};

export { renderPictures };
