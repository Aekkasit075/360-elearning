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


    // Course Curriculum

    if(document.getElementById("course_curriculum")){

        fetch("components/short-course/course-curriculum/course-curriculum.html")

        .then(response => response.text())

        .then(data => {


            document.getElementById("course_curriculum").innerHTML = data;



            // โหลด Course Card หลังจากมี courseGrid แล้ว

            fetch("components/short-course/course-curriculum/course-card.html")

            .then(response => response.text())

            .then(card => {


                let html = "";


                for(let i = 0; i < 16; i++){

                    html += card;

                }


                document.getElementById("courseGrid").innerHTML = html;


            });


        });

    }


    // Curriculum Components

    if(document.getElementById("curriculum_components")){


        fetch("components/short-course/curriculum-components/curriculum-components.html")

        .then(response=>response.text())

        .then(data=>{


            document.getElementById("curriculum_components").innerHTML = data;


        });


    }


    // Pathway Master

    if(document.getElementById("pathway_master")){

        fetch("components/short-course/pathway-master/pathway-master.html")

        .then(response => response.text())

        .then(data => {

            document.getElementById("pathway_master").innerHTML = data;

        });

    }


    // Curriculum Structure

    if(document.getElementById("curriculum_structure")){


        fetch("components/short-course/curriculum-structure/curriculum-structure.html")

        .then(response=>response.text())

        .then(data=>{


            document.getElementById("curriculum_structure").innerHTML = data;


        });


    }


    // Total Program Cost

    if(document.getElementById("total_program_cost")){

        fetch("components/short-course/total-program-cost/total-program-cost.html")

        .then(response => response.text())

        .then(data =>{

            document.getElementById("total_program_cost").innerHTML = data;

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