let arrowClick = document.querySelector(".arrows")
let box = document.querySelector(".imgtest")
let isOpen = false;


box.addEventListener("click", close)
arrowClick.addEventListener("click", expand)


function expand() {
    box.style.height = "300px";
}

function close() {
    setTimeout(function () {
        box.style.height = "50px";
    }, 500);
}






