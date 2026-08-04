document.addEventListener("DOMContentLoaded", function(){


    fetch("components/header/header.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("header").innerHTML = data;
    });


    // Home
    if(document.getElementById("hero")){

        fetch("components/home/hero/hero.html")
        .then(response => response.text())
        .then(data=>{
            document.getElementById("hero").innerHTML=data;
        });

    }


    if(document.getElementById("ourcourse")){

        fetch("components/home/ourcourse/ourcourse.html")
        .then(response=>response.text())
        .then(data=>{
            document.getElementById("ourcourse").innerHTML=data;
        });

    }


    if(document.getElementById("recommended")){

        fetch("components/home/recommended/recommended.html")
        .then(response=>response.text())
        .then(data=>{
            document.getElementById("recommended").innerHTML=data;
        });

    }


    if(document.getElementById("news")){

        fetch("components/home/news/news.html")
        .then(response=>response.text())
        .then(data=>{
            document.getElementById("news").innerHTML=data;
        });

    }


    if(document.getElementById("reviews")){

        fetch("components/home/reviews/reviews.html")
        .then(response=>response.text())
        .then(data=>{
            document.getElementById("reviews").innerHTML=data;
        });

    }


    // ===== Short Course =====

    if(document.getElementById("banner_overview")){

        fetch("components/short-course/banner_overview.html")
        .then(response => response.text())
        .then(data =>{

            document.getElementById("banner_overview").innerHTML = data;

            // Swiper
            if(document.querySelector(".highlightSwiper")){

                new Swiper(".highlightSwiper",{


                    loop:false,


                    centeredSlides:true,


                    slidesPerView:3,


                    spaceBetween:60,


                    speed:600,


                    grabCursor:true,



                    navigation:{

                        nextEl:".swiper-button-next",

                        prevEl:".swiper-button-prev"

                    },



                    pagination:{

                        el:".swiper-pagination",

                        clickable:true

                    },



                    on:{


                        slideChangeTransitionStart:function(){


                            document
                            .querySelectorAll(".highlight-card")
                            .forEach(card=>{

                                card.classList.remove("active");

                            });



                            let active =
                            this.slides[this.activeIndex]
                            .querySelector(".highlight-card");


                            if(active){

                                active.classList.add("active");

                            }


                        }


                    }


                });

            }

        });

    }


    fetch("components/footer/footer.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("footer").innerHTML = data;
    });


    fetch("components/report-problem/report-problem.html")
    .then(res => res.text())
    .then(data=>{

        document.body.insertAdjacentHTML(
            "beforeend",
            data
        );

        document.dispatchEvent(
            new Event("reportProblemLoaded")
        );

    });

});