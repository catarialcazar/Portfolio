// // It ain't much, but it's honest work:
var w = document.documentElement.clientWidth || window.innerWidth;
const hidepc = document.querySelector(".hidepc");
const main = document.querySelector("main");

document.addEventListener("DOMContentLoaded", function() {
    init();
});

function init() {
    if (w <= 680) {
        hidepc.style.display = "flex";
        setTimeout(() => (hidepc.style.opacity = 1), 16);
    } else {
        main.style.display = "block";
        setTimeout(() => (main.style.opacity = 1), 16);
    }
}
