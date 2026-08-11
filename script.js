console.log("SCRIPT IS WORKING");

const polaroids = document.querySelectorAll(".polaroid");
const lightbox = document.getElementById("lightbox");
const largePhoto = document.getElementById("largePhoto");
const backPhoto = document.getElementById("backPhoto");
const closeButton = document.getElementById("close");
const flipButton = document.getElementById("flip");
const flipCard = document.getElementById("flipCard");


/* OPEN PHOTO */

polaroids.forEach(function(polaroid) {

    polaroid.addEventListener("click", function(event) {

        event.preventDefault();

        const image = polaroid.dataset.image;
        const backImage = polaroid.dataset.back;

        largePhoto.src = image;
        backPhoto.src = backImage;

        flipCard.classList.remove("flipped");

        lightbox.classList.add("open");

        document.body.style.overflow = "hidden";

    });

});


/* FLIP */

flipButton.addEventListener("click", function() {

    flipCard.classList.toggle("flipped");

});


/* CLOSE */

function closePhoto() {

    lightbox.classList.remove("open");
    flipCard.classList.remove("flipped");

    document.body.style.overflow = "";

}

closeButton.addEventListener("click", closePhoto);


/* CLICK OUTSIDE */

lightbox.addEventListener("click", function(event) {

    if (event.target === lightbox) {
        closePhoto();
    }

});


/* ESCAPE */

document.addEventListener("keydown", function(event) {

    if (
        event.key === "Escape" &&
        lightbox.classList.contains("open")
    ) {
        closePhoto();
    }

});
