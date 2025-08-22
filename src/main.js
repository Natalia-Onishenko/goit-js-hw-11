import { getImagesByQuery } from './js/pixabay-api.js';
import { createGallery, clearGallery, showLoader, hideLoader } from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('#search-form');

form.addEventListener('submit', onSearch);

async function onSearch(event) {
  event.preventDefault();
  const queryInput = event.target.elements['search-text'];
  const query = queryInput.value.trim();

  if (!query) {
    iziToast.warning({
      title: 'Увага',
      message: 'Введіть пошуковий запит',
      position: 'topRight',
    });
    return;
  }

  clearGallery(); 
  showLoader();   

  try {
    const data = await getImagesByQuery(query);

    if (!data || data.hits.length === 0) {
      iziToast.error({
        title: 'Нічого не знайдено',
        message: 'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
      return;
    }

    createGallery(data.hits);
    iziToast.success({
      title: 'Готово',
      message: `Знайдено ${data.totalHits} зображень`,
      position: 'topRight',
    });
  } catch (error) {
    console.error('Помилка при запиті:', error);
    iziToast.error({
      title: 'Помилка',
      message: 'Сталася помилка при завантаженні даних.',
      position: 'topRight',
    });
  } finally {
    hideLoader();      
    queryInput.value = ''; 
    queryInput.focus();    
  }
}