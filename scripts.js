// // Loader:
const loadingcontainer = document.querySelector('.loadingcontainer');
const main = document.querySelector('main');

window.onload = function () {
    init();
};

function init() {
    setTimeout(() => {
        loadingcontainer.style.opacity = 0;
        loadingcontainer.style.display = 'none';

        main.style.display = 'block';
        setTimeout(() => main.style.opacity = 1, 16);
    }, 2000);
};
