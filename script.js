const polaroids =
    document.querySelectorAll(".polaroid");

const lightbox =
    document.getElementById("lightbox");

const largePhoto =
    document.getElementById("largePhoto");

const closeButton =
    document.getElementById("close");


/* =========================================
   OPEN PHOTO
   ========================================= */

polaroids.forEach(function(polaroid) {

    polaroid.addEventListener("click", function() {

        const image =
            polaroid.dataset.image;

        largePhoto.src = image;

        lightbox.classList.add("open");

        document.body.style.overflow = "hidden";

    });

});


/* =========================================
   CLOSE PHOTO
   ========================================= */

function closePhoto() {

    lightbox.classList.remove("open");

    document.body.style.overflow = "";

}


/* Close button */

closeButton.addEventListener(
    "click",
    closePhoto
);


/* Click outside photo */

lightbox.addEventListener(
    "click",
    function(event) {

        if (event.target === lightbox) {

            closePhoto();

        }

    }
);


/* Escape key */

document.addEventListener(
    "keydown",
    function(event) {

        if (
            event.key === "Escape" &&
            lightbox.classList.contains("open")
        ) {

            closePhoto();

        }

    }
);
