// ==========================================
// TELEGRAM CHANNEL LINK
// ==========================================

// अपना Telegram Channel Link यहाँ डालो

const TELEGRAM_LINK = "https://chat.whatsapp.com/Ff8kU4pJdaO7I67XlIHunD";


// ==========================================
// TELEGRAM BUTTON
// ==========================================

const telegramButton =
    document.getElementById("telegramButton");


// Button click redirect

telegramButton.addEventListener(
    "click",
    function (event) {

        event.preventDefault();

        window.location.href =
            TELEGRAM_LINK;

    }
);


// ==========================================
// AUTO REDIRECT COUNTDOWN
// ==========================================

let secondsLeft = 20;

const countdownElement =
    document.getElementById("countdown");

const progressBar =
    document.getElementById("progressBar");


// Update countdown every second

const redirectTimer =
    setInterval(function () {

        secondsLeft--;

        if (countdownElement) {

            countdownElement.textContent =
                secondsLeft;

        }


        // Progress bar calculation

        const progressPercentage =
            (secondsLeft / 20) * 100;


        if (progressBar) {

            progressBar.style.width =
                progressPercentage + "%";

        }


        // Redirect when countdown finishes

        if (secondsLeft <= 0) {

            clearInterval(
                redirectTimer
            );

            window.location.href =
                TELEGRAM_LINK;

        }

    }, 1000);