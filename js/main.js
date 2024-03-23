import {
  generatedObjectArrays
} from './data/generated-object.js';
import {
  renderPictures
} from './components/render-pictures.js';
import './components/form.js';
import './components/photo-filters.js';

renderPictures(generatedObjectArrays());
