import {
  renderPictures
} from './data/render-pictures.js';
import {
  getData,
  sendData
} from './components/api.js';
import {
  showAlert
} from './utils/show-alert';
import {
  setOnFormSubmit,
  hideModal
} from './components/form.js';
import {
  showSuccessMessage,
  showErrorMessage
} from './components/message.js';

import {
  setOnFilterClick,
  turnFilterOn,
  filterPictures
} from './components/filter.js';


const onGetDataSuccess = (data) => {
  turnFilterOn(data);
  renderPictures(filterPictures());
  setOnFilterClick(renderPictures);
};

const onSendDataSuccess = () => {
  hideModal();
  showSuccessMessage();
};

const onSendDataError = () => {
  showErrorMessage();
};

setOnFormSubmit(async (data) => {
  await sendData(onSendDataSuccess, onSendDataError, data);
});

getData(onGetDataSuccess, showAlert);
