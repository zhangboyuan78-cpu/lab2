const kapi = document.querySelector("#kapi");
const kapiPlay = document.querySelector("#kapi-play");

const message = document.querySelector("#message");

const endingMessage = document.querySelector("#ending-message");

const loveButton = document.querySelector("#love-button");
const loveMessage = document.querySelector("#love-message");

const sections = document.querySelectorAll(".reveal");



kapi.addEventListener("click", function () {

    message.textContent = "Kapi says hello! ❤️";

    kapi.style.transform = "scale(1.08)";

    setTimeout(function () {

        kapi.style.transform = "";

    }, 400);

});



document.addEventListener("keydown", function (event) {

    if (event.code === "Space") {

        event.preventDefault();

        kapiPlay.classList.add("jump");

        message.textContent = "Kapi jumped! 🐾";

        setTimeout(function () {

            kapiPlay.classList.remove("jump");

        }, 500);

    }

});




window.addEventListener("scroll", function () {

    sections.forEach(function (section) {

        const position =
            section.getBoundingClientRect().top;

        const screenHeight =
            window.innerHeight;

        if (position < screenHeight - 100) {

            section.classList.add("show");

        }

    });

});



sections.forEach(function (section) {

    const position =
        section.getBoundingClientRect().top;

    if (position < window.innerHeight - 100) {

        section.classList.add("show");

    }

});



loveButton.addEventListener("click", function () {

    loveMessage.textContent =
        "Kapi sends you love too! 🐶❤️";

    loveButton.textContent =
        "Love Sent ❤️";

});



setTimeout(function () {

    endingMessage.textContent =
        "Kapi is happy you stayed to read his story! 🐾";

}, 8000);
