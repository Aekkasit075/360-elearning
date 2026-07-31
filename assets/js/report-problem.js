document.addEventListener("reportProblemLoaded", () => {

    const form = document.getElementById("reportForm");

    const fileInput = document.getElementById("problemImage");

    /* ============================
    Back To Top
    ============================ */

    const backToTop = document.getElementById("backToTop");


    function checkScroll(){
        console.log(window.scrollY);

        if(window.scrollY > 300){

            backToTop.classList.add("show");

        }else{

            backToTop.classList.remove("show");

        }

    }


    window.addEventListener("scroll", checkScroll);

    checkScroll();



    backToTop.addEventListener("click", () => {

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });



    /* ============================
       Preview File Name
    ============================ */

    fileInput.addEventListener("change", function () {

        if (this.files.length > 0) {

            const file = this.files[0];

            const old = document.querySelector(".selected-file");

            if (old) old.remove();


            const fileName = document.createElement("div");

            fileName.className = "selected-file";


            fileName.innerHTML = `
                <i class="fa-solid fa-paperclip"></i>
                ${file.name}
            `;


            fileInput.parentNode.appendChild(fileName);

        }

    });



    /* ============================
       Submit Form
    ============================ */

    form.addEventListener("submit", function (e) {

        e.preventDefault();


        const submitBtn = document.querySelector(".btn-confirm");


        submitBtn.disabled = true;


        submitBtn.innerHTML = `
            <span class="spinner-border spinner-border-sm"></span>
            Sending...
        `;


        setTimeout(() => {


            alert("Report submitted successfully.");


            form.reset();


            document.querySelector(".selected-file")?.remove();


            submitBtn.disabled = false;


            submitBtn.innerHTML = "Confirm";


            const modalElement = document.getElementById("reportProblemModal");

            const modal = bootstrap.Modal.getInstance(modalElement);

            modal.hide();


        },1500);


    });


});