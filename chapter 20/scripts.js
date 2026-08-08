const openingScreen = document.getElementById("openingScreen");
const bookSection = document.getElementById("bookSection");
const finalScreen = document.getElementById("finalScreen");

const beginButton = document.getElementById("beginButton");
const previousButton = document.getElementById("previousButton");
const nextButton = document.getElementById("nextButton");

const reasonNumber = document.getElementById("reasonNumber");
const reasonTitle = document.getElementById("reasonTitle");
const reasonText = document.getElementById("reasonText");
const progress = document.getElementById("progress");

const reasons = [
    {
        title: "A Gift From God",
        text: "I love that having you in my life is one of God’s greatest gifts to me."
    },
    {
        title: "Always Having My Back",
        text: "I love that you always have my back."
    },
    {
        title: "Feeling Safe",
        text: "I love how safe you make me feel."
    },
    {
        title: "My Biggest Supporter",
        text: "I love that you’ll always be my biggest supporter."
    },
    {
        title: "Genuine Care",
        text: "I love that you genuinely care about me."
    },
    {
        title: "Your Thoughtfulness",
        text: "I love how thoughtful you are."
    },
    {
        title: "Your Comfort",
        text: "I love how comforting your presence is, even from miles away."
    },
    {
        title: "Believing in Me",
        text: "I love that you believe in me."
    },
    {
        title: "Feeling Seen",
        text: "I love how you make me feel seen."
    },
    {
        title: "Your Genuine Heart",
        text: "I love how genuine you are."
    },
    {
        title: "Our Laughter",
        text: "I love that we can still laugh together."
    },
    {
        title: "Someone I Can Count On",
        text: "I love that you’re one of the people I can count on."
    },
    {
        title: "The Peace You Bring",
        text: "I love how much peace you bring into my life."
    },
    {
        title: "Your Kind Heart",
        text: "I love your kind heart."
    },
    {
        title: "Always Grateful",
        text: "I love that having you in my life is something I’ll always be grateful for."
    },
    {
        title: "Your Smile",
        text: "I love that you always put a smile on my face."
    },
    {
        title: "The Way You Notice Me",
        text: "I love that you notice me, even when I don’t say much."
    },
    {
        title: "Feeling Like Home",
        text: "I love that no matter how much time passes, talking to you still feels like home."
    },
    {
        title: "Feeling Appreciated",
        text: "I love that you make me feel appreciated."
    },
    {
        title: "Genuine Love",
        text: "I love you because being loved by you has taught me what genuine care looks like."
    }
];

let currentReason = 0;

const reasonWords = [
    "One", "Two", "Three", "Four", "Five",
    "Six", "Seven", "Eight", "Nine", "Ten",
    "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen",
    "Sixteen", "Seventeen", "Eighteen", "Nineteen", "Twenty"
];

function updateReason() {
    const reason = reasons[currentReason];

    reasonNumber.textContent = "Reason " + reasonWords[currentReason];
    reasonTitle.textContent = reason.title;
    reasonText.textContent = reason.text;
    progress.textContent = (currentReason + 1) + " / " + reasons.length;

    if (currentReason === 0) {
        previousButton.style.visibility = "hidden";
    } else {
        previousButton.style.visibility = "visible";   
    }
    if (currentReason === reasons.length - 1) {
        nextButton.textContent = "Continue to my message ->";
        nextButton.classList.add("continue-button");
    } else {
        nextButton.textContent = "->";
    }
}
beginButton.addEventListener("click", function() {
    openingScreen.classList.add("hidden");
    bookSection.classList.remove("hidden");
    updateReason();
});

nextButton.addEventListener("click", function() {
    if (currentReason < reasons.length - 1) {
        currentReason++;
        updateReason();
    } else {
        bookSection.classList.add("hidden");
        finalScreen.classList.remove("hidden");
    }
});

previousButton.addEventListener("click", function() {
    if (currentReason > 0) {
        currentReason--;
        updateReason();
    }
});