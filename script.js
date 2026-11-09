/* ENVELOPE */

const letterButton = document.getElementById("letterBtn");
const envelope = document.getElementById("envelope");

letterButton.addEventListener("click", function() {
    envelope.classList.toggle("open");

    if (envelope.classList.contains("open")) {
        letterButton.textContent = "Close your letter ♡";
    } else {
        letterButton.textContent = "Open your letter ♡";
    }
});


/* FLOATING HEARTS */

const heartsContainer = document.getElementById("heartsContainer");

function createHeart() {
    const heart = document.createElement("span");

    heart.classList.add("floating-heart");
    heart.innerHTML = "♡";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (Math.random() * 15 + 12) + "px";

    heartsContainer.appendChild(heart);

    setTimeout(function() {
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 700);


/* OPEN WEBSITE */

const openWebsiteButton = document.getElementById("openWebsite");
const introScreen = document.getElementById("introScreen");

openWebsiteButton.addEventListener("click", function() {
    introScreen.classList.add("hide");

    const mainCard = document.querySelector(".card");
    mainCard.classList.add("reveal");
});


/* TYPING ANIMATION */

const typingText = document.getElementById("typingText");

const message = "I made something for you ♡";

let index = 0;

function typeWriter() {
    if (index < message.length) {
        typingText.textContent += message.charAt(index);
        index++;

        setTimeout(typeWriter, 100);
    }
}

typeWriter();

/* PHOTO LIGHTBOX */

function openPhoto(photo) {
    const lightbox = document.getElementById("photoLightbox");
    const lightboxImage = document.getElementById("lightboxImage");

    lightboxImage.src = photo.src;
    lightbox.classList.add("active");
}

function closePhoto() {
    const lightbox = document.getElementById("photoLightbox");

    lightbox.classList.remove("active");
}

/* A LITTLE SURPRISE */

const surpriseBtn = document.getElementById("surpriseBtn");
const surpriseMessage = document.getElementById("surpriseMessage");

surpriseBtn.addEventListener("click", function() {
    surpriseMessage.classList.toggle("show");

    if (surpriseMessage.classList.contains("show")) {
        surpriseBtn.textContent = "Close your surprise ♡";
    } else {
        surpriseBtn.textContent = "Open your little surprise";
    }
});