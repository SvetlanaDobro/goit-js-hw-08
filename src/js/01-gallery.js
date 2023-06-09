// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector('.gallery');
const cardsMarkup = createGalleryCardMarkup(galleryItems);

gallery.insertAdjacentHTML('beforeend', cardsMarkup);

function createGalleryCardMarkup(galleryItems) {
    return galleryItems.map(({preview, original, description}) => {
        return `
        <li class="gallery__item">
          <a class="gallery__link"
             href="${original}">
            <img class="gallery__image"
               src="${preview}" 
               
               alt="${description}" />
          </a>
        </li>`;
    }).join('');
};

  const galleryN = new SimpleLightbox('.gallery a', {
    captions: true,
    captionDelay: 250,
    captionsData: 'alt'
  });

console.log(galleryItems);
