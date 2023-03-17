
let nume = document.querySelector(".par") ;
let links = document.querySelector(".haed__link"); 
let conte = document.querySelector(".cont__container");
let Logo = document.querySelector(".logoo");
let spans = document.querySelector(".form__icon");
let butoons = document.querySelector(".form__container");

nume.addEventListener("click", function () {
    links.classList.toggle("actev");
    nume.classList.toggle("rotet")
});

Logo.onclick = function () {
    onclick  ()
    spans.onclick = function () {
        onclick  ();
    };
    function onclick () {
        butoons.classList.toggle("hidden");
        conte.classList.toggle("is_active");
    };
};
