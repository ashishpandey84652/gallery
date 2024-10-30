const thumbnails = document.querySelectorAll('.thumbnail');
const currentImage = document.getElementById('currentImage');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const closeBtn = document.querySelector('.close');
let currentIndex = 0;

thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        updateGallery(index);
    });
});

const updateGallery = (index) => {
    currentImage.src = thumbnails[index].src;
    thumbnails.forEach((thumb, i) => {
        thumb.classList.toggle('active', i === index);
    });
    currentIndex = index;
};

document.getElementById('nextBtn').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % thumbnails.length;
    updateGallery(currentIndex);
});

document.getElementById('prevBtn').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + thumbnails.length) % thumbnails.length;
    updateGallery(currentIndex);
});

currentImage.addEventListener('click', () => {
    lightbox.style.display = 'flex';
    lightboxImg.src = currentImage.src;
});

closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = 'none';
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {
        currentIndex = (currentIndex + 1) % thumbnails.length;
        updateGallery(currentIndex);
    } else if (e.key === 'ArrowLeft') {
        currentIndex = (currentIndex - 1 + thumbnails.length) % thumbnails.length;
        updateGallery(currentIndex);
    }
});