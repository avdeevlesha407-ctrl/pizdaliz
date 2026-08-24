/* =========================
   CURRENT SCREEN
========================= */

let currentScreen = 1;


/* =========================
   GO TO NEXT SCREEN
========================= */

function nextScreen() {

    if (currentScreen >= 6) {
        return;
    }

    const oldScreen =
        document.getElementById(
            `screen${currentScreen}`
        );

    const newScreen =
        document.getElementById(
            `screen${currentScreen + 1}`
        );


    oldScreen.classList.remove("active");

    newScreen.classList.add("active");


    currentScreen++;


    updateProgress();


    createHearts(8);
}


/* =========================
   PROGRESS DOTS
========================= */

function updateProgress() {

    const dots =
        document.querySelectorAll(
            ".dot"
        );


    dots.forEach(
        (dot, index) => {

            dot.classList.toggle(
                "active",
                index === currentScreen - 1
            );

        }
    );
}


/* =========================
   ESCAPE BUTTON
========================= */

function moveButton(button) {

    const padding = 20;


    const maxX =
        window.innerWidth -
        button.offsetWidth -
        padding;


    const maxY =
        window.innerHeight -
        button.offsetHeight -
        padding;


    const x =
        padding +
        Math.random() *
        Math.max(
            1,
            maxX - padding
        );


    const y =
        70 +
        Math.random() *
        Math.max(
            1,
            maxY - 70
        );


    button.style.position =
        "fixed";


    button.style.left =
        `${x}px`;


    button.style.top =
        `${y}px`;


    button.style.zIndex =
        "100";


    button.classList.add(
        "shake"
    );


    setTimeout(
        () => {
            button.classList.remove(
                "shake"
            );
        },
        400
    );
}


/* =========================
   ESCAPE EVENTS
========================= */

function setupEscapeButton(id) {

    const button =
        document.getElementById(id);


    if (!button) {
        return;
    }


    function escape(event) {

        event.preventDefault();

        moveButton(button);
    }


    /*
       Компьютер
    */

    button.addEventListener(
        "mouseenter",
        escape
    );


    /*
       Телефон
    */

    button.addEventListener(
        "touchstart",
        escape,
        {
            passive: false
        }
    );


    /*
       Дополнительная защита
    */

    button.addEventListener(
        "pointerdown",
        escape
    );
}


/* =========================
   ACTIVATE ESCAPE BUTTONS
========================= */

setupEscapeButton("wrong1");

setupEscapeButton("wrong2");

setupEscapeButton("noButton");


/* =========================
   FLOATING HEART
========================= */

function createHeart() {

    const heart =
        document.createElement(
            "div"
        );


    heart.className =
        "heart";


    const symbols = [
        "❤️",
        "💕",
        "💗",
        "💖",
        "💘",
        "✨"
    ];


    heart.textContent =
        symbols[
            Math.floor(
                Math.random() *
                symbols.length
            )
        ];


    heart.style.left =
        Math.random() * 100 +
        "vw";


    heart.style.fontSize =
        12 +
        Math.random() * 20 +
        "px";


    heart.style.animationDuration =
        5 +
        Math.random() * 5 +
        "s";


    heart.style.animationDelay =
        Math.random() * 1.5 +
        "s";


    document
        .getElementById("hearts")
        .appendChild(heart);


    setTimeout(
        () => {
            heart.remove();
        },
        11000
    );
}


/* =========================
   CREATE MANY HEARTS
========================= */

function createHearts(amount) {

    for (
        let i = 0;
        i < amount;
        i++
    ) {

        setTimeout(
            createHeart,
            i * 120
        );

    }
}


/* =========================
   START HEARTS
========================= */

createHearts(12);


setInterval(
    createHeart,
    900
);