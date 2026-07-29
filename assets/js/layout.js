document.addEventListener("DOMContentLoaded", function(){


    fetch("components/header/header.html")

    .then(response => response.text())

    .then(data => {

        document.getElementById("header").innerHTML = data;

    });


    fetch("components/home/hero/hero.html")
    .then(response => response.text())
    .then(data => {

        document.getElementById("hero").innerHTML = data;

    });


    fetch("components/home/ourcourse/ourcourse.html")
    .then(response => response.text())
    .then(data => {

        document.getElementById("ourcourse").innerHTML = data;

    });



    fetch("components/footer/footer.html")

    .then(response => response.text())

    .then(data => {

        document.getElementById("footer").innerHTML = data;

    });


});