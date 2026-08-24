let currentScreen = 1;


/* Переход между экранами */

function nextScreen() {

    if (currentScreen >= 6) {
        return;
    }

    const oldScreen = document.getElementById(
        `screen${currentScreen}`
    );

    const newScreen = document.getElementById(
        `screen${currentScreen + 1}`
    );


    oldScreen.classList.remove("active");

    newScreen.classList.add("active");


    currentScreen++;

    updateProgress();

    createHearts(10);
}



/* Индикатор экранов */

function updateProgress() {

    const dots = document.querySelectorAll(".dot");


    dots.forEach((dot, index) => {

        dot.classList.toggle(
            "active",
            index === currentScreen - 1
        );

    });

}



/* Убегающая кнопка */

function moveButton(button) {

    const padding = 15;

    const buttonWidth = button.offsetWidth;
    const buttonHeight = button.offsetHeight;


    const maxX =
        window.innerWidth -
        buttonWidth -
        padding;


    const maxY =
        window.innerHeight -
        buttonHeight -
        padding;


    let x =
        Math.random() *
        maxX;


    let y =
        80 +
        Math.random() *
        (maxY - 80);



    // защита от выхода за экран

    x = Math.max(
        padding,
        Math.min(
            x,
            maxX
        )
    );


    y = Math.max(
        80,
        Math.min(
            y,
            maxY
        )
    );



    button.style.position = "fixed";

    button.style.left = `${x}px`;

    button.style.top = `${y}px`;

    button.style.zIndex = "100";



    button.classList.add("shake");


    setTimeout(() => {

        button.classList.remove("shake");

    },400);

}



/* Настройка убегающих кнопок */

function setupEscapeButton(id) {


    const button =
        document.getElementById(id);



    if (!button) return;



    // компьютер

    button.addEventListener(
        "mouseenter",
        () => {
            moveButton(button);
        }
    );



    // телефон

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



    // дополнительная защита

    button.addEventListener(
        "pointerdown",
        (event)=>{

            event.preventDefault();

            moveButton(button);

        }
    );

}



/* Подключаем кнопки */

setupEscapeButton("wrong1");

setupEscapeButton("wrong2");

setupEscapeButton("noButton");





/* Сердечки */

function createHeart() {


    const heart =
        document.createElement("div");


    heart.className =
        "heart";


    const symbols = [
        "❤️",
        "💕",
        "💗",
        "💖",
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
        Math.random() * 100 + "vw";


    heart.style.fontSize =
        12 +
        Math.random() * 20 +
        "px";


    heart.style.animationDuration =
        5 +
        Math.random() * 5 +
        "s";



    document
        .getElementById("hearts")
        .appendChild(heart);



    setTimeout(()=>{

        heart.remove();

    },10000);

}




function createHearts(amount){

    for(
        let i = 0;
        i < amount;
        i++
    ){

        setTimeout(
            createHeart,
            i * 100
        );

    }

}




/* Запуск */

createHearts(15);


setInterval(
    createHeart,
    900
);
