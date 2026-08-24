let currentScreen = 1;


/* Переходы */

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


    if (!newScreen) return;


    oldScreen.classList.remove("active");

    newScreen.classList.add("active");


    currentScreen++;


    updateProgress();

    createHearts(10);

}




/* Точки сверху */

function updateProgress() {

    const dots =
        document.querySelectorAll(".dot");


    dots.forEach((dot,index)=>{

        dot.classList.toggle(
            "active",
            index === currentScreen - 1
        );

    });

}




/* Убегающая кнопка */

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
        Math.max(0,maxX);


    const y =
        Math.random() *
        Math.max(0,maxY);



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




/* Подключение убегающих кнопок */

function setupEscapeButton(id){


    const button =
        document.getElementById(id);


    if(!button) return;



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

setupEscapeButton("noButton");






/* Сердечки */

function createHeart(){


    const heart =
        document.createElement("div");


    heart.className =
        "heart";


    const symbols=[
        "❤️",
        "💕",
        "💖",
        "💗",
        "✨"
    ];



    heart.textContent =
        symbols[
            Math.floor(
                Math.random()
                *
                symbols.length
            )
        ];



    heart.style.left =
        Math.random()*100+"vw";


    heart.style.fontSize =
        12+
        Math.random()*20+
        "px";


    heart.style.animationDuration =
        5+
        Math.random()*5+
        "s";



    document
    .getElementById("hearts")
    .appendChild(heart);



    setTimeout(()=>{

        heart.remove();

    },10000);

}





function createHearts(count){

    for(
        let i=0;
        i<count;
        i++
    ){

        setTimeout(
            createHeart,
            i*120
        );

    }

}



createHearts(15);


setInterval(
    createHeart,
    900
);
