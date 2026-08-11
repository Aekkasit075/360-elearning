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


    if (document.getElementById("payment_method")) {

        fetch("components/order-course/payment-method.html")
            .then(res => res.text())
            .then(data => {


                document.getElementById("payment_method").innerHTML = data;



                // โหลด function หลัง component เข้าแล้ว

                window.openPaymentModal = function (type) {


                    document.querySelectorAll(".payment-modal")
                        .forEach(modal => {

                            modal.style.display = "none";

                        });



                    if (type === "card") {

                        document.getElementById("cardModal")
                            .style.display = "flex";

                    }



                    if (type === "qr") {

                        document.getElementById("qrModal")
                            .style.display = "flex";

                    }


                    if (type === "paypal") {

                        document.getElementById("paypalModal")
                            .style.display = "flex";

                    }


                    if (type === "bank") {

                        document.getElementById("bankModal").style.display = "flex";

                    }


                };




                window.closePaymentModal = function () {


                    document.querySelectorAll(".payment-modal")
                        .forEach(modal => {

                            modal.style.display = "none";

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




document.addEventListener("DOMContentLoaded", () => {


    /* ==========================
        SIDEBAR TAB
    ========================== */

    const buttons = document.querySelectorAll(".sidebar-btn");

    const lessonList = document.querySelector(".lesson-list");
    const discussion = document.querySelector(".discussion-panel");
    const certificate = document.querySelector(".certificate-card");
    const reviewPanel = document.querySelector(".review-panel");


    buttons.forEach(btn => {


        btn.addEventListener("click", () => {


            buttons.forEach(b =>
                b.classList.remove("active")
            );


            btn.classList.add("active");


            const tab = btn.dataset.tab;


            lessonList.style.display = "none";
            certificate.style.display = "none";
            discussion.style.display = "none";
            reviewPanel.style.display = "none";



            if(tab === "lesson"){

                lessonList.style.display = "block";
                certificate.style.display = "flex";

            }


            else if(tab === "discussion"){

                discussion.style.display = "block";

            }


            else if(tab === "favorite"){

                reviewPanel.style.display = "block";

            }


        });


    });





    /* ==========================
        EXAM SYSTEM
    ========================== */


    const videoContent =
        document.getElementById("videoContent");


    const defaultVideo =
        videoContent.innerHTML;


    const exercises =
        document.querySelectorAll(".lesson-exercise");


    const lessonVideo =
        document.querySelector(".lesson-video");



    let currentQuestion = 0;

    let score = 0;

    let userAnswers = [];





    const questions = [


        {
            q:"Why diversify your investments?",

            options:[
                "To reduce risk by spreading investments across different assets",
                "To guarantee that you will never lose money",
                "To invest all your money in one company",
                "To avoid investing in different types of assets"
            ],

            answer:0
        },



        {
            q:"What is Canva mainly used for?",

            options:[
                "Creating designs",
                "Programming",
                "Database management",
                "System security"
            ],

            answer:0
        },



        {
            q:"AI can help with?",

            options:[
                "Creating content",
                "Deleting computer",
                "Breaking system",
                "Removing files"
            ],

            answer:0
        }


    ];







    /* ==========================
        OPEN QUIZ
    ========================== */


    exercises.forEach(exercise => {


        exercise.onclick = () => {


            videoContent.innerHTML = `


<div class="exam-page">


    <div class="exam-title">

        <h1>
            Post-Lesson Test
        </h1>

    </div>



    <div class="exam-start-content">


        <div class="exam-type">
            Quiz
        </div>


        <h2>
            Post-Lesson Test
        </h2>



        <p>
            15 questions |
            Total score: 15 points |
            Unlimited attempts
        </p>



        <button id="startExam">

            Start the quiz

        </button>



    </div>


</div>


`;



            document
            .getElementById("startExam")
            .onclick = () => {


                currentQuestion = 0;

                score = 0;

                userAnswers = [];


                showQuestion();


            };



        };


    });









    /* ==========================
        SHOW QUESTION
    ========================== */


    function showQuestion(){


        const data = questions[currentQuestion];



        videoContent.innerHTML = `


    <div class="exam-page">


        <div class="exam-title">

            <h1>
                Post-Lesson Test
            </h1>

        </div>




        <div class="question-page">



            <div class="exam-inner">


                <div class="question-count">

                    Question ${currentQuestion + 1}
                    of ${questions.length}

                </div>




                <div class="point-box">


                    <b>
                        ${score}
                    </b>


                    <span>
                        Point
                    </span>


                </div>





                <p class="question-text">

                    ${data.q}

                </p>





                <div class="answer-list">


                    ${data.options.map((option,index)=>`


                        <label>


                            <input 
                                type="radio"
                                name="answer"
                                value="${index}"
                                ${
                                    userAnswers[currentQuestion] === index
                                    ?
                                    "checked"
                                    :
                                    ""
                                }
                            >


                            <span></span>


                            ${String.fromCharCode(65 + index)}.
                            ${option}


                        </label>


                    `).join("")}



                </div>






                <div class="question-footer 
                    ${currentQuestion === 0 ? "first-question":""}">


                    ${
                        currentQuestion > 0
                        ?

                        `
                        <button 
                            id="previousQuestion"
                            class="previous-question">

                            ◀ Previous question

                        </button>
                        `

                        :

                        `
                        <div></div>
                        `
                    }





                    <button id="nextQuestion">


                        ${
                            currentQuestion === questions.length - 1
                            ?
                            "Press to confirm the answer"
                            :
                            "Next question"
                        }


                    </button>



                </div>



            </div>



        </div>



    </div>



    `;






        /*
            NEXT BUTTON
        */


        document
        .getElementById("nextQuestion")
        .onclick = () => {


            const selected =
            document.querySelector(
                "input[name='answer']:checked"
            );



            if(!selected){

                return;

            }




            // บันทึกคำตอบ

            userAnswers[currentQuestion] =
            Number(selected.value);





            // คำนวณคะแนนใหม่ทั้งหมด

            score = 0;


            userAnswers.forEach((answer,index)=>{


                if(
                    answer === questions[index].answer
                ){

                    score++;

                }


            });






            currentQuestion++;





            if(currentQuestion < questions.length){


                showQuestion();


            }

            else{


                submitPopup();


            }



        };








        /*
            PREVIOUS BUTTON
        */


        const previousButton =
        document.getElementById("previousQuestion");



        if(previousButton){


            previousButton.onclick = () => {



                const previousIndex =
                currentQuestion - 1;





                // ลบคำตอบข้อก่อนหน้า

                userAnswers[previousIndex] = undefined;





                // คำนวณคะแนนใหม่

                score = 0;


                userAnswers.forEach((answer,index)=>{


                    if(
                        answer === questions[index].answer
                    ){

                        score++;

                    }


                });





                currentQuestion--;





                showQuestion();



            };


        }



    }









    /* ==========================
        SUBMIT POPUP
    ========================== */


    function submitPopup(){



        const popup =
        document.createElement("div");



        popup.className =
        "global-submit-popup";



        popup.innerHTML = `


<div class="submit-box">


<h3>

Do you want to submit all answers?

</h3>



<p>

Once confirmed, the system will record your score.

</p>




<button id="cancelSubmit">

Cancel

</button>



<button id="submitAnswer">

Submit

</button>



</div>



`;



        document.body.appendChild(popup);





        document
        .getElementById("cancelSubmit")
        .onclick = () => {


            popup.remove();


            currentQuestion--;

            showQuestion();


        };







        document
        .getElementById("submitAnswer")
        .onclick = () => {


            popup.remove();


            showResult();


        };




    }



    /* ==========================
        RESULT
    ========================== */


    function showResult(){


        videoContent.innerHTML = `



<div class="result-page">


<h1>

Post-Test

</h1>




<h3>

Your score has been recorded successfully.

</h3>




<div class="result-line"></div>




<p>

Your score is

</p>




<strong>

${score}/${questions.length}

</strong>



<span>

Score

</span>





<div class="result-line"></div>




<button id="tryAgain">

↻ Try Again

</button>



</div>



`;





        document
        .getElementById("tryAgain")
        .onclick = () => {


            exercises[0].click();


        };



    }









    /* ==========================
        BACK TO VIDEO
    ========================== */


    lessonVideo.onclick = () => {


        videoContent.innerHTML =
        defaultVideo;


    };



});


document.addEventListener("DOMContentLoaded",()=>{


    const certBtn =
    document.getElementById("certificateBtn");


    const popup =
    document.getElementById("certificatePopup");


    const close =
    document.getElementById("closeCertificate");



    certBtn.addEventListener("click",()=>{

        popup.style.display="flex";

    });



    close.addEventListener("click",()=>{

        popup.style.display="none";

    });



    popup.addEventListener("click",(e)=>{

        if(e.target === popup){

            popup.style.display="none";

        }

    });


});




// ==========================================
// How to Pay - Course Payment Page
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    // ตรวจว่าหน้านี้มี payment-bank หรือไม่
    const paymentBank =
        document.getElementById("payment-bank");

    if (!paymentBank) {
        return;
    }


    // รอให้ Navbar โหลดเข้ามาก่อน
    const navbar =
        document.getElementById("course_detail_navbar");


    if (!navbar) {
        return;
    }


    // ใช้ MutationObserver รอ navbar.html โหลดเสร็จ
    const observer =
        new MutationObserver(() => {

            const howToPay =
                navbar.querySelector(
                    'a[href="#payment"]'
                );


            if (howToPay) {

                // เปลี่ยนเฉพาะหน้า Course Payment
                howToPay.setAttribute(
                    "href",
                    "#payment-bank"
                );


                // ปิด observer หลังจากเจอแล้ว
                observer.disconnect();

            }

        });


    observer.observe(navbar, {
        childList: true,
        subtree: true
    });

});