const typedText = document.querySelector(".typed-text");

const textArray = ["Java Developer", "Python Developer", "Web Designer", "Django Developer", "Flutter Trainee", "AI Trainee"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 1000;

let textArrayIndex = 0;
let charIndex = 0;

function typing() {
    if (charIndex < textArray[textArrayIndex].length) {
        typedText.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typing, typingDelay);

    } else {
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        typedText.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    } else {
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(typing, typingDelay + 1100);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(typing, newTextDelay + 250);
});