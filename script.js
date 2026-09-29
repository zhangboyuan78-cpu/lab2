const kapi = document.querySelector("#kapi");
const message = document.querySelector("#message");


kapi.addEventListener("click", function () {

    message.textContent = "Kapi says hello! ❤️";

    kapi.style.transform = "scale(1.1)";

});


document.addEventListener("keydown", function (event) {

    if (event.code === "Space") {

        kapi.classList.add("jump");

        message.textContent = "Kapi jumped! 🐾";

        setTimeout(function () {

            kapi.classList.remove("jump");

        }, 500);
    }

});

const sections = document.querySelectorAll(".reveal");

window.addEventListener("scroll", function () {

    sections.forEach(function (section) {

        const position = section.getBoundingClientRect().top;

        if (position < window.innerHeight - 100) {

            section.classList.add("show");

        }

    });

});


setTimeout(function () {

    message.textContent =
        "Thanks for spending time with Kapi! 🐶";

}, 10000);