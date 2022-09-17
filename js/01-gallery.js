import { galleryItems } from './gallery-items.js';

// Change code below this line

const galleryRef = document.querySelector('.gallery');

const pictures = galleryItems.forEach(({ preview, original, description }) => {
    const markup = /*html*/ ` <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>`;

    galleryRef.insertAdjacentHTML('beforeend', markup);
});

galleryRef.addEventListener('click', clickOnImg);

function clickOnImg(event) {
    event.preventDefault();

    const origImage = event.target.dataset.source;

    const instance = basicLightbox.create(`
        <img src="${origImage}" width="800" height="600">
    `);

    instance.show();

    const visible = basicLightbox.visible();
    if (visible === true) {
        galleryRef.addEventListener('keydown', (evt) => {
            if (evt.code === 'Escape') {
                instance.close();
            }
        });
    }
}
