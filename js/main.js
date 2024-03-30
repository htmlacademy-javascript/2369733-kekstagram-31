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

getData(renderPictures, showAlert);
