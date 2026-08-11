document.addEventListener("DOMContentLoaded", function () {

    const newsData = {

        1: {

            title: "Top Skills Every Developer Should Learn",

            date: "12 April 2569",

            image:
                "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&auto=format&fit=crop",

            paragraph1:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",

            paragraph2:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer faucibus, lorem non tincidunt posuere, erat libero consequat ipsum, vitae elementum ipsum neque vitae arcu. Lorem ipsum has been the industry's standard dummy text ever since the 1500s.",

            paragraph3:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",

            tag: "#Programming"

        },


        2: {

            title: "UI/UX Design Creates Better Experiences",

            date: "08 April 2569",

            image:
                "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&auto=format&fit=crop",

            paragraph1:
                "Good UI/UX design helps users understand digital products more easily. A clear interface and thoughtful user experience can make websites and applications easier and more enjoyable to use.",

            paragraph2:
                "User-centered design focuses on understanding the needs, behaviors, and expectations of users. Designers use these insights to create interfaces that are simple, useful, and accessible.",

            paragraph3:
                "Modern digital products require both attractive visual design and a strong user experience. Combining these two elements helps create products that users can understand and use effectively.",

            tag: "#UIUX"

        },


        3: {

            title: "Artificial Intelligence in Online Learning",

            date: "02 April 2569",

            image:
                "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&auto=format&fit=crop",

            paragraph1:
                "Artificial Intelligence is becoming an important part of modern online learning. AI technologies can help learners access information, practice skills, and receive personalized learning experiences.",

            paragraph2:
                "Online learning platforms can use AI to analyze learning behavior and provide recommendations based on individual needs. This can help learners discover suitable content and improve their learning experience.",

            paragraph3:
                "As technology continues to develop, Artificial Intelligence will continue to play an important role in education and digital learning platforms.",

            tag: "#ArtificialIntelligence"

        }

    };


    /* =========================================
       Get News ID
    ========================================= */

    const params = new URLSearchParams(window.location.search);

    const newsId = params.get("news") || "1";

    const news = newsData[newsId] || newsData[1];


    /* =========================================
       Set Content
    ========================================= */

    document.getElementById("newsTitle").textContent =
        news.title;


    document.getElementById("newsDate").textContent =
        news.date;


    document.getElementById("newsImage").src =
        news.image;


    document.getElementById("newsImage").alt =
        news.title;


    document.getElementById("newsParagraph1").textContent =
        news.paragraph1;


    document.getElementById("newsParagraph2").textContent =
        news.paragraph2;


    document.getElementById("newsParagraph3").textContent =
        news.paragraph3;


    document.getElementById("newsTag").textContent =
        news.tag;


});