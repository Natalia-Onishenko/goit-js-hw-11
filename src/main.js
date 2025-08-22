import { getImagesByQuery } from './js/pixabay-api.js';
import { createGallery, clearGallery, showLoader, hideLoader } from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import 'pure-css-loader/dist/css-loader.css';

const form = document.querySelector('#search-form');

form.addEventListener('submit', onSearch);

async function onSearch(event) {
  event.preventDefault();
  const queryInput = event.target.elements['search-text'];
  const query = queryInput.value.trim();

  if (!query) {
    iziToast.warning({ title: 'Увага', message: 'Введіть пошуковий запит' });
    return;
  }

  clearGallery();
  showLoader();

  try {
    const data = await getImagesByQuery(query);
    hideLoader();

    if (!data || data.hits.length === 0) {
      iziToast.error({
        title: 'Нічого не знайдено',
        message: 'Sorry, there are no images matching your search query. Please try again!',
      });
      return;
    }

    createGallery(data.hits);
    iziToast.success({ title: 'Готово', message: `Знайдено ${data.totalHits} зображень` });
  } catch (error) {
    hideLoader();
    iziToast.error({ title: 'Помилка', message: 'Сталася помилка при завантаженні даних.' });
  }
}