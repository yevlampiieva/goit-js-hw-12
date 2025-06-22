import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const loader = document.querySelector('.loader');
const gallery = document.querySelector('.gallery');

let simplelightbox = new SimpleLightbox('.gallery-link', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

function createGallery(images) {
  const markup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `<li class="gallery-item">
      <a class="gallery-link" href=${largeImageURL}>
      <div class="image-container">
        <img class="gallery-image" src="${webformatURL}" alt="${tags}" />
        </div>
        <div class="image-inform">
          <div>
            <h3 class="image-inform-title">Likes</h3>
            <span class="image-inform-text">${likes}</span>
          </div>
          <div>
            <h3 class="image-inform-title">Views</h3>
            <span class="image-inform-text">${views}</span>
          </div>
          <div>
            <h3 class="image-inform-title">Comments</h3>
            <span class="image-inform-text">${comments}</span>
          </div>
          <div>
            <h3 class="image-inform-title">Downloads</h3>
            <span class="image-inform-text">${downloads}</span>
          </div>
        </div>
      </a>
    </li>`
    )
    .join('');

  gallery.innerHTML = markup;
  simplelightbox.refresh();
}

function clearGallery() {
  gallery.innerHTML = '';
}

function showLoader() {
  loader.classList.remove('hidden');
}

function hideLoader() {
  loader.classList.add('hidden');
}

export { createGallery, clearGallery, showLoader, hideLoader };
