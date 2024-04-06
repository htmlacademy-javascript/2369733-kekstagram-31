import {
  isEscKeyDown
} from '../utils/is-esc-key-down.js';
import {
  numDecline
} from '../utils/num-decline.js';
import { resetScale } from './scale-image.js';
import { resetEffects } from './photo-filters.js';

const MAX_HASHTAGS = 5;
const MAX_SYMBOLS = 20;
const characterComment = 140;
const FILE_TYPES = ['jpg', 'jpeg', 'png'];

const imgUpload = document.querySelector('.img-upload');
const form = document.querySelector('.img-upload__form');
const uploadOverlay = imgUpload.querySelector('.img-upload__overlay');
const uploadFile = imgUpload.querySelector('#upload-file');
const imgUploadCancel = imgUpload.querySelector('.img-upload__cancel');
const inputHashtag = imgUpload.querySelector('.text__hashtags');
const textDescription = imgUpload.querySelector('.text__description');
const submitButton = form.querySelector('.img-upload__submit');
const photoPreview = document.querySelector('.img-upload__preview img');
const effectsPreviews = document.querySelectorAll('.effects__preview');

let errorMessage = '';

const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper--error',
});

const error = () => errorMessage;

const isHashtagsValid = (value) => {
  errorMessage = '';

  const inputText = value.toLowerCase().trim();

  if (!inputText) {
    return true;
  }

  const inputArray = inputText.split(/\s+/);

  const rules = [
    {
      check: inputArray.some((item) => item === '#'),
      error: 'Хештег не может состоять только из одной решётки',
    },
    {
      check: inputArray.some((item) => item.slice(1).includes('#')),
      error: 'Хештеги разделяются пробелами',
    },
    {
      check: inputArray.some((item) => item[0] !== '#'),
      error: 'Хештег должен начинаться с символа \'#\'',
    },
    {
      check: inputArray.some((item, num, array) => array.includes(item, num + 1)),
      error: 'Хештеги не должны повторяться',
    },
    {
      check: inputArray.some((item) => item.length > MAX_SYMBOLS),
      error: `Максимальная длина одного хештега ${MAX_SYMBOLS} символов, включая решётку`,
    },
    {
      check: inputArray.length > MAX_HASHTAGS,
      error: `Нельзя указать больше ${MAX_HASHTAGS} ${numDecline(
        MAX_HASHTAGS, 'хештега', 'хештегов', 'хештегов'
      )}`,
    },
    {
      check: inputArray.some((item) => !/^#[a-zа-яё0-9]{1,19}$/i.test(item)),
      error: 'Хештег содержит недопустимые символы',
    },
  ];

  return rules.every((rule) => {
    const isInvalid = rule.check;
    if (isInvalid) {
      errorMessage = rule.error;
    }
    return !isInvalid;
  });
};

const hascommentLength = (value) => value.length <= characterComment;

pristine.addValidator(
  textDescription,
  hascommentLength,
  'Максимум 140 символов'
);

pristine.addValidator(inputHashtag, isHashtagsValid, error, 2, false);

const hideModal = () => {
  document.body.classList.remove('modal-open');
  uploadOverlay.classList.add('hidden');

  form.reset();
  resetScale();
  resetEffects();
  pristine.reset();
  document.removeEventListener('keydown', onEscapeKeydown);
};

function onEscapeKeydown(evt) {
  if (isEscKeyDown(evt)
    && !evt.target.classList.contains('text__hashtags')
    && !evt.target.classList.contains('text__description')
  ) {
    evt.preventDefault();
    hideModal();
    resetScale();
  }
}

const onHashtagInput = () => {
  isHashtagsValid(inputHashtag.value);
};

const onSelectPhoto = () => {
  document.body.classList.add('modal-open');
  uploadOverlay.classList.remove('hidden');
  imgUploadCancel.addEventListener('click', hideModal);
  document.addEventListener('keydown', onEscapeKeydown);
};

const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = 'Отправляю...';
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = 'Опубликовать';
};

const isValidType = (file) => {
  const fileName = file.name.toLowerCase();
  return FILE_TYPES.some((it) => fileName.endsWith(it));
};

const onFileInputChange = () => {
  const file = uploadFile.files[0];

  if (file && isValidType(file)) {
    photoPreview.src = URL.createObjectURL(file);
    effectsPreviews.forEach((preview) => {
      preview.style.backgroundImage = `url('${photoPreview.src}')`;
    });
  }
  onSelectPhoto();
};

const setOnFormSubmit = (cb) => {
  form.addEventListener('submit', async (evt) => {
    evt.preventDefault();

    if (pristine.validate()) {
      inputHashtag.value = inputHashtag.value.trim().replaceAll(/\s+/g, ' ');
      blockSubmitButton();
      await cb(new FormData(form));
      unblockSubmitButton();
    }
  });
};

uploadFile.addEventListener('change', onFileInputChange);
inputHashtag.addEventListener('input', onHashtagInput);

export {setOnFormSubmit, hideModal};
