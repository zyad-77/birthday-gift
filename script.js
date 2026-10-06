

const screen = document.querySelector(".screen");

function createHeart() {
    const heart = document.createElement("div");

    heart.innerHTML = "❤";

    heart.style.position = "absolute";
    heart.style.left = Math.random() * 100 + "%";
    heart.style.bottom = "-30px";

    heart.style.fontSize = Math.random() * 14 + 10 + "px";
    heart.style.opacity = Math.random() * 0.5 + 0.3;

    heart.style.pointerEvents = "none";
    heart.style.zIndex = "1";

    heart.style.animation = `floatHeart ${
        Math.random() * 5 + 6
    }s linear forwards`;

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 12000);
}

setInterval(createHeart, 700);

const startButton = document.getElementById("startButton");
const firstScreen = document.querySelector(".screen");
const gameScreen = document.querySelector(".game-screen");

startButton.addEventListener("click", () => {
    firstScreen.classList.add("hide");
    gameScreen.classList.add("show");
});

const questions = [
    {
        number: "QUESTION 01",
        text: "Who is the luckiest person in this relationship? 👀",
        answers: [
            {
                text: "Obviously me 😌",
                value: "me"
            },
            {
                text: "You ❤️",
                value: "you"
            }
        ]
    },

    {
        number: "QUESTION 02",
        text: "Complete the sentence: My favorite place is... ❤️",
        answers: [
            {
                text: "Anywhere with you ❤️",
                value: "with-you"
            },
            {
                text: "Somewhere expensive 😂",
                value: "expensive"
            },
            {
                text: "My bed 😴",
                value: "bed"
            }
        ]
    },

    {
    number: "QUESTION 03",
    text: "What do I love most about you? ❤️",
    answers: [
        {
            text: "Your smile 😊",
            value: "smile"
        },
        {
            text: "Your eyes ❤️",
            value: "eyes"
        },
        {
            text: "Everything about you 🥹",
            value: "everything"
        }
    ]
},

];

let currentQuestion = 0;

const answersContainer = document.querySelector(".answers");

function loadQuestion(index) {
    const question = questions[index];

    questionNumber.textContent = question.number;
    questionText.textContent = question.text;

    answersContainer.innerHTML = "";

    question.answers.forEach(answer => {
        const button = document.createElement("button");

        button.classList.add("answer");

        button.textContent = answer.text;

        button.dataset.answer = answer.value;

        answersContainer.appendChild(button);
    });
}

loadQuestion(0);

const reaction = document.querySelector(".reaction");
const continueButton = document.getElementById("continueButton");

answersContainer.addEventListener("click", (event) => {
    if (!event.target.classList.contains("answer")) {
        return;
    }

    const selectedAnswer = event.target.dataset.answer;

    if (currentQuestion === 0) {
    if (selectedAnswer === "you") {
        reaction.textContent =
            "Correct! 😌❤️ Finally, you understand how lucky I am.";
    } else {
        reaction.textContent =
            "Hmm... I was going to say me 😂❤️ But I'll allow it.";
    }
}

if (currentQuestion === 1) {
    if (selectedAnswer === "with-you") {
        reaction.textContent =
            "Okay... that's actually the only acceptable answer. ❤️";
    } else if (selectedAnswer === "expensive") {
        reaction.textContent =
            "I knew money would somehow become part of this 😂";
    } else if (selectedAnswer === "bed") {
        reaction.textContent =
            "ohhh.... Of course with you عشقمم 😉😮‍💨🤤";
    }
}
if (currentQuestion === 2) {
    if (selectedAnswer === "smile") {
        reaction.textContent =
            "I was afraid that you have problem with your teeth 😑😂";
    } else if (selectedAnswer === "eyes") {
        reaction.textContent =
            "These eyes have been dangerous from day one 😭❤️";
    } else if (selectedAnswer === "everything") {
        reaction.textContent =
            "Okay... you win. That's exactly what I wanted to hear. 🥹❤️";
    }
}

    reaction.classList.add("show");
    continueButton.classList.add("show");
});
continueButton.addEventListener("click", () => {

   if (currentQuestion >= questions.length - 1) {

    questionNumber.style.display = "none";
    questionText.style.display = "none";

    answersContainer.innerHTML = "";

    reaction.classList.remove("show");
    continueButton.classList.remove("show");

    const finalMessage = document.getElementById("finalMessage");

    finalMessage.style.display = "block";

    requestAnimationFrame(() => {
        finalMessage.classList.add("show");
    });

    for (let i = 0; i < 25; i++) {
        setTimeout(createHeart, i * 100);
    }

    return;
}
    currentQuestion++;

    reaction.classList.remove("show");
    continueButton.classList.remove("show");

    loadQuestion(currentQuestion);
});

const giftButton = document.getElementById("giftButton");
const nextSurprise = document.getElementById("nextSurprise");

giftButton.addEventListener("click", () => {
    document.getElementById("finalMessage").style.display = "none";

    nextSurprise.classList.add("show");
});
const surpriseButton = document.getElementById("surpriseButton");
const secretMessage = document.getElementById("secretMessage");
const surpriseScreen = document.getElementById("surpriseScreen");
const birthdayMusic = document.getElementById("birthdayMusic");

surpriseButton.addEventListener("click", () => {

    surpriseButton.style.display = "none";

    secretMessage.classList.add("show");

    // Start the music immediately because this click
    // is a direct user action.
    birthdayMusic.currentTime = 15;
    birthdayMusic.volume = 0;

    birthdayMusic.play().then(() => {

        setTimeout(() => {

            birthdayMusic.volume = 1;
            surpriseScreen.classList.add("show");

        }, 8000);

    }).catch(error => {

        console.log("Music could not start:", error);

    });
    birthdayMusic.addEventListener("timeupdate", () => {
    if (birthdayMusic.currentTime >= 110) {
        birthdayMusic.pause();
        birthdayMusic.currentTime = 15;
    }
});

});