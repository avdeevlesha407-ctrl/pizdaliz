let currentScreen = 1;


/* =========================
   ПЕРЕХОДЫ МЕЖДУ ЭКРАНАМИ
========================= */

function nextScreen() {

    if (currentScreen >= 7) {
        return;
    }


    const oldScreen = document.getElementById(
        `screen${currentScreen}`
    );


    const newScreen = document.getElementById(
        `screen${currentScreen + 1}`
    );


    if (!newScreen) {
        return;
    }


    oldScreen.classList.remove("active");

    newScreen.classList.add("active");


    currentScreen++;


    updateProgress();

    createHearts(12);
}



/* =========================
   ТОЧКИ ПРОГРЕССА
========================= */

function updateProgress() {

    const dots =
        document.querySelectorAll(".dot");


    dots.forEach((dot, index)=>{

        dot.classList.toggle(
            "active",
            index === currentScreen - 1
        );

    });

}



/* =========================
   УБЕГАЮЩАЯ КНОПКА
========================= */

function moveButton(button) {


    const parent =
        button.parentElement;


    const parentRect =
        parent.getBoundingClientRect();


    const buttonWidth =
        button.offsetWidth;


    const buttonHeight =
        button.offsetHeight;



    const maxX =
        parentRect.width -
        buttonWidth;


    const maxY =
        parentRect.height -
        buttonHeight;



    const x =
        Math.random() *
        Math.max(
            0,
            maxX
        );


    const y =
        Math.random() *
        Math.max(
            0,
            maxY
        );



    button.style.position =
        "relative";


    button.style.left =
        `${x}px`;


    button.style.top =
        `${y}px`;



    button.classList.add(
        "shake"
    );



    setTimeout(()=>{

        button.classList.remove(
            "shake"
        );

    },400);

}



/* =========================
   НАСТРОЙКА УБЕГАЮЩИХ КНОПОК
========================= */

function setupEscapeButton(id) {


    const button =
        document.getElementById(id);



    if (!button) {
        return;
    }



    button.addEventListener(
        "mouseenter",
        ()=>{

            moveButton(button);

        }
    );



    button.addEventListener(
        "touchstart",
        (event)=>{

            event.preventDefault();

            moveButton(button);

        },
        {
            passive:false
        }
    );



    button.addEventListener(
        "pointerdown",
        (event)=>{

            event.preventDefault();

            moveButton(button);

        }
    );

}



setupEscapeButton("wrong1");

setupEscapeButton("wrong2");

setupEscapeButton("noButton");





/* =========================
   СЕРДЕЧКИ
========================= */

function createHeart() {


    const heart =
        document.createElement("div");


    heart.className =
        "heart";


    const hearts = [
        "❤️",
        "💕",
        "💖",
        "💗",
        "✨"
    ];


    heart.textContent =
        hearts[
            Math.floor(
                Math.random()
                *
                hearts.length
            )
        ];



    heart.style.left =
        Math.random() * 100 + "vw";


    heart.style.fontSize =
        12 +
        Math.random() * 22 +
        "px";



    heart.style.animationDuration =
        5 +
        Math.random() * 5 +
        "s";



    document
        .getElementById("hearts")
        .appendChild(
            heart
        );



    setTimeout(()=>{

        heart.remove();

    },11000);

}





function createHearts(count){


    for(
        let i = 0;
        i < count;
        i++
    ){

        setTimeout(
            createHeart,
            i * 120
        );

    }

}




/* =========================
   СТАРТ
========================= */


createHearts(15);


setInterval(
    createHeart,
    900
);
