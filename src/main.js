import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import getImagesByQuery from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
} from './js/render-functions';

const form = document.querySelector('.form');
const loadMoreBtn = document.querySelector('.load-more-btn');

let searchImage = '';
let page = 1;
let limit = 15;
let totalPages = 1;

form.addEventListener('submit', handleSearchImages);
loadMoreBtn.addEventListener('click', handleLoadMoreImages);

hideLoadMoreButton();
hideLoader();

async function handleSearchImages(event) {
  event.preventDefault();
  clearGallery();
  showLoader();
  searchImage = event.target.elements['search-text'].value.trim();

  if (!searchImage) {
    iziToast.error({
      message: 'Please enter some valid search value!',
      messageSize: '16px',
      messageLineHeight: '24px',
      messageColor: '#fafafb',
      closeOnClick: true,
      position: 'topRight',
    });
    hideLoader();
    hideLoadMoreButton();
    return;
  }

  try {
    page = 1;
    const data = await getImagesByQuery(searchImage, page);
    if (data.hits.length === 0) {
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        messageSize: '16px',
        messageLineHeight: '24px',
        messageColor: '#fafafb',
        closeOnClick: true,
        position: 'topRight',
      });
      hideLoader();
      hideLoadMoreButton();
      return;
    }

    createGallery(data.hits);

    hideLoader();
    form.reset();

    if (data.hits.length < limit && totalPages === 1) {
      hideLoadMoreButton();
      iziToast.error({
        message: `We're sorry, but you've reached the end of search results.`,
        messageSize: '16px',
        messageLineHeight: '24px',
        messageColor: '#fafafb',
        closeOnClick: true,
        position: 'topRight',
      });
    } else {
      showLoadMoreButton();
    }
  } catch (error) {
    iziToast.error({
      message: `Please try again later`,
      messageSize: '16px',
      messageLineHeight: '24px',
      messageColor: '#fafafb',
      closeOnClick: true,
      position: 'topRight',
    });
    hideLoader();
    form.reset();
  }
}

async function handleLoadMoreImages() {
  page += 1;
  showLoader();
  try {
    const data = await getImagesByQuery(searchImage, page);
    totalPages = Math.ceil(data.totalHits / limit);

    if (page >= totalPages) {
      hideLoadMoreButton();
      iziToast.error({
        message: `We're sorry, but you've reached the end of search results.`,
        messageSize: '16px',
        messageLineHeight: '24px',
        messageColor: '#fafafb',
        closeOnClick: true,
        position: 'topRight',
      });
    }

    hideLoader();

    createGallery(data.hits);

    if (page > totalPages && data.hits.length <= limit) {
      hideLoadMoreButton();
    }

    const image = document.querySelector('.gallery-item');
    const imageHeight = image.getBoundingClientRect().height;

    window.scrollBy({
      left: 0,
      top: imageHeight * 2,
      behavior: 'smooth',
    });
  } catch (error) {
    iziToast.error({
      message: `Please try again later`,
      messageSize: '16px',
      messageLineHeight: '24px',
      messageColor: '#fafafb',
      closeOnClick: true,
      position: 'topRight',
    });
  }
}
