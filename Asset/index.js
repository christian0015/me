
AOS.init();


window.onscroll = function () {
    var header = document.getElementById("myHeader");
    if (window.scrollY < 50) {
        document.body.classList.remove("scrolled");
    } else {
        document.body.classList.add("scrolled");
    }
};

