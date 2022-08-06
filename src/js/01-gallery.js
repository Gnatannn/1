import SimpleLightbox from 'simplelightbox';
// Дополнительный импорт стилей
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

// console.log(galleryItems);

const imgMarkup = galleryItems
  .map(galleryItem => {
    return `<a class="gallery__item" href="${galleryItem.original}">
  <img
  class="gallery__image"
  src="${galleryItem.preview}"
  alt="${galleryItem.description}"/>
  </a>`;
  })
  .join('');

const gallery = document.querySelector('.gallery');
gallery.insertAdjacentHTML('afterbegin', imgMarkup);
// gallery.addEventListener("click", onImgClick);

const lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionType: 'attr',
  captionPosition: 'bottom',
  captionDelay: 250,
  captionsData: 'alt',
});
