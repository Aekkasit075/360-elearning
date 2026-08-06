document.addEventListener("DOMContentLoaded", function () {


    fetch("components/header/header.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("header").innerHTML = data;
        });


    // Home
    if (document.getElementById("hero")) {

        fetch("components/home/hero/hero.html")
            .then(response => response.text())
            .then(data => {
                document.getElementById("hero").innerHTML = data;
            });

    }


    if (document.getElementById("ourcourse")) {

        fetch("components/home/ourcourse/ourcourse.html")
            .then(response => response.text())
            .then(data => {
                document.getElementById("ourcourse").innerHTML = data;
            });

    }


    if (document.getElementById("recommended")) {

        fetch("components/home/recommended/recommended.html")
            .then(response => response.text())
            .then(data => {
                document.getElementById("recommended").innerHTML = data;
            });

    }


    if (document.getElementById("news")) {

        fetch("components/home/news/news.html")
            .then(response => response.text())
            .then(data => {
                document.getElementById("news").innerHTML = data;
            });

    }


    if (document.getElementById("home_reviews")) {

        fetch("components/home/reviews/reviews.html")
            .then(response => response.text())
            .then(data => {
                document.getElementById("home_reviews").innerHTML = data;
            });

    }


    // ===== Short Course =====

    if (document.getElementById("banner_overview")) {

        fetch("components/short-course/banner_overview.html")
            .then(response => response.text())
            .then(data => {

                document.getElementById("banner_overview").innerHTML = data;

                // Swiper
                if (document.querySelector(".highlightSwiper")) {

                    new Swiper(".highlightSwiper", {


                        loop: false,


                        centeredSlides: true,


                        slidesPerView: 3,


                        spaceBetween: 60,


                        speed: 600,


                        grabCursor: true,



                        navigation: {

                            nextEl: ".swiper-button-next",

                            prevEl: ".swiper-button-prev"

                        },



                        pagination: {

                            el: ".swiper-pagination",

                            clickable: true

                        },



                        on: {


                            slideChangeTransitionStart: function () {


                                document
                                    .querySelectorAll(".highlight-card")
                                    .forEach(card => {

                                        card.classList.remove("active");

                                    });



                                let active =
                                    this.slides[this.activeIndex]
                                        .querySelector(".highlight-card");


                                if (active) {

                                    active.classList.add("active");

                                }


                            }


                        }


                    });

                }

            });

    }


    // Course Curriculum

    if (document.getElementById("course_curriculum")) {

        fetch("components/short-course/course-curriculum/course-curriculum.html")

            .then(response => response.text())

            .then(data => {


                document.getElementById("course_curriculum").innerHTML = data;



                // โหลด Course Card หลังจากมี courseGrid แล้ว

                fetch("components/short-course/course-curriculum/course-card.html")

                    .then(response => response.text())

                    .then(card => {


                        let html = "";


                        for (let i = 0; i < 16; i++) {

                            html += card;

                        }


                        document.getElementById("courseGrid").innerHTML = html;


                        const cards =
                            document.querySelectorAll(".course-card-link");



                        cards.forEach((card, index) => {



                            const footer =
                                card.querySelector(".course-footer");



                            const info =
                                card.querySelector(".course-info");



                            // 4 Courses แรก = Free Course

                            if (index < 4) {


                                // ไปหน้า course-detail.html

                                card.href = "course-detail.html";


                                // เอา 1,500 For Credit ออก

                                info.style.display = "none";



                                // เปลี่ยนราคาเป็น FREE

                                footer.innerHTML = `

                                    <button class="free-btn">
                                        FREE
                                    </button>

                                `;


                            }


                            // Course ที่เหลือ = Paid Course

                            else {


                                card.href = "course-payment.html";


                            }



                        });


                    });


            });

    }


    // Curriculum Components

    if (document.getElementById("curriculum_components")) {


        fetch("components/short-course/curriculum-components/curriculum-components.html")

            .then(response => response.text())

            .then(data => {


                document.getElementById("curriculum_components").innerHTML = data;


            });


    }


    // Pathway Master

    if (document.getElementById("pathway_master")) {

        fetch("components/short-course/pathway-master/pathway-master.html")

            .then(response => response.text())

            .then(data => {

                document.getElementById("pathway_master").innerHTML = data;

            });

    }


    // Curriculum Structure

    if (document.getElementById("curriculum_structure")) {


        fetch("components/short-course/curriculum-structure/curriculum-structure.html")

            .then(response => response.text())

            .then(data => {


                document.getElementById("curriculum_structure").innerHTML = data;


            });


    }


    // Total Program Cost

    if (document.getElementById("total_program_cost")) {

        fetch("components/short-course/total-program-cost/total-program-cost.html")

            .then(response => response.text())

            .then(data => {

                document.getElementById("total_program_cost").innerHTML = data;

            });

    }


    // ===== Course Detail =====

    if (document.getElementById("course_detail_banner")) {

        fetch("components/course-detail/banner/banner.html")
            .then(response => response.text())
            .then(data => {

                document.getElementById("course_detail_banner").innerHTML = data;

            });

    }


    if (document.getElementById("course_payment_banner")) {

        fetch("components/course-detail/banner/banner_payment.html")
            .then(response => response.text())
            .then(data => {

                document.getElementById("course_payment_banner").innerHTML = data;

            });

    }


    // Navbar course detail

    if (document.getElementById("course_detail_navbar")) {


        fetch("components/course-detail/navbar/navbar.html")

            .then(res => res.text())

            .then(data => {

                document
                    .getElementById("course_detail_navbar")
                    .innerHTML = data;


            });


    }


    // Course Detail Description

    if (document.getElementById("description")) {


        fetch("components/course-detail/description/description.html")

            .then(res => res.text())

            .then(data => {

                document
                    .getElementById("description")
                    .innerHTML = data;

            });


    }


    if (document.getElementById("content")) {


        fetch("components/course-detail/content/content.html")


            .then(res => res.text())


            .then(data => {


                document
                    .getElementById("content")
                    .innerHTML = data;



                const lessons =
                    document.querySelectorAll(".lesson-group");



                lessons.forEach(group => {



                    const title =
                        group.querySelector(".lesson-title");



                    const detail =
                        group.querySelectorAll(".lesson-detail");



                    const icon =
                        title.querySelector("i");


                    title.addEventListener("click", () => {

                        detail.forEach(item => {



                            if (item.style.display === "none") {


                                item.style.display = "flex";


                            }

                            else {


                                item.style.display = "none";


                            }


                        });

                        if (icon.classList.contains("fa-chevron-up")) {

                            icon.classList.remove(
                                "fa-chevron-up"
                            );

                            icon.classList.add(
                                "fa-chevron-down"
                            );

                        }

                        else {

                            icon.classList.remove(
                                "fa-chevron-down"
                            );

                            icon.classList.add(
                                "fa-chevron-up"
                            );

                        }

                    });

                });

                // ==========================
                // Hide All Content
                // ==========================
                document
                    .getElementById("hideContent")
                    .addEventListener("click", () => {



                        document
                            .querySelectorAll(".lesson-detail")
                            .forEach(item => {


                                item.style.display = "none";


                            });

                        document
                            .querySelectorAll(".lesson-title i")
                            .forEach(icon => {



                                icon.classList.remove(
                                    "fa-chevron-up"
                                );


                                icon.classList.add(
                                    "fa-chevron-down"
                                );

                            });
                    });

            });

    }


    if (document.getElementById("instructor")) {

        fetch("components/course-detail/instructor/instructor.html")

            .then(res => res.text())

            .then(data => {

                document.getElementById("instructor").innerHTML = data;

            });

    }



    // Certificate

    if (document.getElementById("certificate")) {


        fetch("components/course-detail/certificate/certificate.html")

            .then(res => res.text())

            .then(data => {

                document.getElementById("certificate").innerHTML = data;

            });


    }


    if (document.getElementById("reviews")) {


        fetch("components/course-detail/reviews/reviews.html")

            .then(res => res.text())

            .then(data => {

                document.getElementById("reviews").innerHTML = data;

            });


    }


    if (document.getElementById("payment")) {


        fetch("components/course-detail/payment/payment.html")

            .then(res => res.text())

            .then(data => {


                document.getElementById("payment").innerHTML = data;



                const items =
                    document.querySelectorAll(".payment-item");



                items.forEach(item => {


                    const question =
                        item.querySelector(".payment-question");


                    question.addEventListener("click", () => {


                        items.forEach(other => {


                            if (other !== item) {

                                other.classList.remove("active");

                            }


                        });



                        item.classList.toggle("active");



                    });


                });



            });


    }


    if (document.getElementById("payment-bank")) {


        fetch("components/course-detail/payment/payment-bank.html")

            .then(res => res.text())

            .then(data => {


                document.getElementById("payment-bank").innerHTML = data;



                const items =
                    document.querySelectorAll(".payment-item");



                items.forEach(item => {


                    const question =
                        item.querySelector(".payment-question");


                    question.addEventListener("click", () => {


                        items.forEach(other => {


                            if (other !== item) {

                                other.classList.remove("active");

                            }


                        });



                        item.classList.toggle("active");



                    });


                });



            });


    }


    // ===== Order Course =====


    if (document.getElementById("order_summary")) {


        fetch("components/order-course/order-summary.html")

            .then(res => res.text())

            .then(data => {


                document
                    .getElementById("order_summary")
                    .innerHTML = data;


            });


    }


    if(document.getElementById("payment_method")){

        fetch("components/order-course/payment-method.html")
        .then(res=>res.text())
        .then(data=>{


            document.getElementById("payment_method").innerHTML=data;



            // โหลด function หลัง component เข้าแล้ว

            window.openPaymentModal = function(type){


                document.querySelectorAll(".payment-modal")
                .forEach(modal=>{

                    modal.style.display="none";

                });



                if(type==="card"){

                    document.getElementById("cardModal")
                    .style.display="flex";

                }



                if(type==="qr"){

                    document.getElementById("qrModal")
                    .style.display="flex";

                }


                if(type==="paypal"){

                    document.getElementById("paypalModal")
                    .style.display="flex";

                }
                

                if(type==="bank"){

                    document.getElementById("bankModal").style.display="flex";

                }


            };




            window.closePaymentModal = function(){


                document.querySelectorAll(".payment-modal")
                .forEach(modal=>{

                    modal.style.display="none";

                });


            };


        });


    }


    fetch("components/order-course/invoice.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("invoice_method").innerHTML = data;
        });


    fetch("components/footer/footer.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("footer").innerHTML = data;
        });


    fetch("components/report-problem/report-problem.html")
        .then(res => res.text())
        .then(data => {

            document.body.insertAdjacentHTML(
                "beforeend",
                data
            );

            document.dispatchEvent(
                new Event("reportProblemLoaded")
            );

        });

});




