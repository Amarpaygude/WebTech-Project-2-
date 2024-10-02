let firstCard = null;
let isChecking = false;
let matchedPairs = 0;
let attempts = 0;
let maxAttempts = 3;
let totalPairs = document.querySelectorAll(".card").length / 2;
let messageDiv = document.getElementById("message");
let gameDiv = document.getElementById("game");
let heading = document.getElementById("heading");

document.querySelectorAll(".card").forEach(card => {
card.textContent = card.getAttribute("number");
});

setTimeout(() => {
document.querySelectorAll(".card").forEach(card => {
card.textContent = "";
});

document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", () => {
     if 
     (isChecking || card.className.includes("card flipped")) return;
     card.className = "card flipped";
     card.textContent = card.getAttribute("number");
     if (!firstCard) {
    firstCard = card;
    } else {
    isChecking = true;
    setTimeout(() => {
    if (firstCard.getAttribute("number") === card.getAttribute("number")) {
        firstCard.className = "card matched";
        card.className = "card matched";
        matchedPairs++;

    if (matchedPairs === totalPairs) {
     gameDiv.style.display = "none";
     heading.style.display = "none"; 
     guide.style.display ="none"
     messageDiv.innerHTML = 'You Win! All matches found.<br><a href="./index.html">New Game</a>';
     messageDiv.style.display = "block";
    }

    } else {
    firstCard.className = "card";
    card.className = "card";
    firstCard.textContent = "";
    card.textContent = "";
    attempts++;

    if (attempts === maxAttempts) {
    gameDiv.style.display = "none";
    heading.style.display = "none"; 
    guide.style.display = "none";
    messageDiv.innerHTML = 'You lost! No more attempts left.<br><a href="./index.html">New Game</a>';
    messageDiv.style.display = "block";
    }
    }
    firstCard = null;
    isChecking = false;
    }, 500);
    }
    });
    });
    }, 1000);
