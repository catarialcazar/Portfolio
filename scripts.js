// // It ain't much, but it's honest work:
var w = document.documentElement.clientWidth || window.innerWidth;
const hidepc = document.querySelector(".hidepc");
const loadingcontainer = document.querySelector(".loadingcontainer");
const main = document.querySelector("main");

window.onload = function () {
    init();
};

function init() {
    setTimeout(() => {
        loadingcontainer.style.opacity = 0;
        loadingcontainer.style.display = "none";

        if (w <= 680) {
            hidepc.style.display = "flex";
            setTimeout(() => (hidepc.style.opacity = 1), 16);
        } else {
            main.style.display = "block";
            setTimeout(() => (main.style.opacity = 1), 16);
        }
    }, 2000);
}