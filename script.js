// script.js
document.addEventListener('DOMContentLoaded', () => {
    const images = ['images.jpeg', 'images (1).jpeg', 'photo1.jpg']; // Add more image paths as needed
    let currentIndex = 0;

    const currentImage = document.getElementById('current-image');
    const prevButton = document.getElementById('prev-button');
    const nextButton = document.getElementById('next-button');
    const thumbnails = document.querySelectorAll('.thumbnail');

    const updateImage = () => {
        currentImage.src = images[currentIndex];
        thumbnails.forEach((thumbnail, index) => {
            thumbnail.style.borderColor = index === currentIndex ? '#007bff' : 'transparent';
        });
    };

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + images.length) >= 0 ? (currentIndex - 1 + images.length) % images.length : images.length - 1;
        updateImage();
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % images.length;
        updateImage();
    });

    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener('click', () => {
            currentIndex = index;
            updateImage();
        });
    });

    updateImage();
});