// // Loader:
const loadingContainer = document.querySelector('.loadingContainer');
const main = document.querySelector('main');

window.onload = function () {
    init();
};

function init() {
    setTimeout(() => {
        loadingContainer.style.opacity = 0;
        loadingContainer.style.display = 'none';

        main.style.display = 'block';
        setTimeout(() => main.style.opacity = 1, 16);
    }, 2000);
};