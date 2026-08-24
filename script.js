let currentScreen = 1;


/* =========================
   ПЕРЕХОДЫ
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
   ТОЧКИ
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
   УБЕГАНИЕ КНОПКИ
========================= */

function moveButton(button) {


    const parent =
        button.parentElement;


    const rect =
        parent.getBoundingClientRect();


    const buttonWidth =
        button.offsetWidth;


    const buttonHeight =
        button.offsetHeight;



    const maxX =
        rect.width - buttonWidth;


    const maxY =
        rect.height - buttonHeight;



    const x =
        Math.random() *
        Math.max(0, maxX);


    const y =
        Math.random() *
        Math.max(0, maxY);



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
   ОБЫЧНЫЕ УБЕГАЮЩИЕ КНОПКИ
========================= */

function setupEscapeButton(id) {


    const button =
        document.getElementById(id);


    if (!button) return;



    function escape(e){

        e.preventDefault();

        moveButton(button);

    }



    button.addEventListener(
        "mouseenter",
        escape
    );


    button.addEventListener(
        "touchstart",
        escape,
        {
            passive:false
        }
    );


    button.addEventListener(
        "pointerdown",
        escape
    );

}



setupEscapeButton("wrong1");

setupEscapeButton("wrong2");





/* =========================
   КНОПКА НЕТ ❤️
========================= */


let noAttempts = 0;


const noButton =
    document.getElementById("noButton");



if (noButton) {


    function noEscape(e){


        e.preventDefault();



        noAttempts++;



        if(noAttempts === 1){


            noButton.innerHTML =
                "Точно нет? 👀";


            moveButton(noButton);

        }



        else if(noAttempts === 2){


            noButton.innerHTML =
                "Ну пожалуйста 🥺";


            noButton.style.transform =
                "scale(0.85)";


            moveButton(noButton);

        }



        else if(noAttempts === 3){


            noButton.innerHTML =
                "Хорошо ❤️";


            noButton.style.transform =
                "scale(0.75)";


            noButton.style.position =
                "relative";



            // больше не убегает

            noButton.replaceWith(
                noButton.cloneNode(true)
            );

        }


    }



    noButton.addEventListener(
        "mouseenter",
        noEscape
    );


    noButton.addEventListener(
        "touchstart",
        noEscape,
        {
            passive:false
        }
    );


    noButton.addEventListener(
        "pointerdown",
        noEscape
    );


}





/* =========================
   СЕРДЕЧКИ
========================= */


function createHeart(){


    const heart =
        document.createElement("div");


    heart.className =
        "heart";



    const symbols = [
        "❤️",
        "💕",
        "💖",
        "💗",
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
        Math.random() * 22 +
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
