let arrowClick = document.querySelector(".arrows")
let box = document.querySelector(".imgtest")
arrowClick.addEventListener("click", expand)


function expand(){
    document.querySelector(".imgtest").style.height = "300px";
    box.addEventListener("mouseout", close)
    function close(){
        setTimeout(function() {
            box.style.height = "50px";
          }, 500);
    }
    }








