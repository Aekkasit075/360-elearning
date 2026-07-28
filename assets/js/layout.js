document.addEventListener("DOMContentLoaded", function(){


    fetch("components/header/header.html")

    .then(response => response.text())

    .then(data => {

        document.getElementById("header").innerHTML = data;

    });



    fetch("components/footer/footer.html")

    .then(response => response.text())

    .then(data => {

        document.getElementById("footer").innerHTML = data;

    });


});