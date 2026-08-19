const html = document.documentElement;

const langBtn = document.getElementById("langBtn");
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

let language = "en";


function changeLanguage(lang) {

    language = lang;

    html.lang = lang;

    html.dir = lang === "fa" ? "rtl" : "ltr";


    document.querySelectorAll("[data-en]").forEach(element => {

        const text =
            element.getAttribute(`data-${lang}`);

        if (text !== null) {
            element.innerHTML = text;
        }

    });


    langBtn.textContent =
        lang === "en"
            ? "فارسی"
            : "English";


    localStorage.setItem(
        "stkLanguage",
        lang
    );
}


langBtn.addEventListener("click", () => {

    changeLanguage(
        language === "en"
            ? "fa"
            : "en"
    );

});


menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});


document.querySelectorAll(".nav-links a")
.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});


document.addEventListener("click", event => {

    if (
        !navLinks.contains(event.target) &&
        !menuBtn.contains(event.target)
    ) {

        navLinks.classList.remove("active");

    }

});


document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

        navLinks.classList.remove("active");

    }

});


const savedLanguage =
    localStorage.getItem("stkLanguage");


if (
    savedLanguage === "fa" ||
    savedLanguage === "en"
) {

    changeLanguage(savedLanguage);

} else {

    changeLanguage("en");

}