/* =====================================
   LOADING SCREEN
===================================== */

window.addEventListener("load",()=>{

    setTimeout(()=>{

        document
        .getElementById("loading")
        .classList
        .add("hide-loading");

    },1800);

});


/* =====================================
   BUTTON SCROLL
===================================== */

document
.getElementById("mulai")
.addEventListener("click",()=>{

    document
    .querySelector(".gallery")
    .scrollIntoView({

        behavior:"smooth"

    });

});


/* =====================================
   SLIDESHOW FOTO
===================================== */

const slides=document.querySelectorAll(".slide");

const dots=document.querySelectorAll(".dot");

let index=0;

function tampilSlide(no){

    slides.forEach(slide=>{

        slide.classList.remove("active");

    });

    dots.forEach(dot=>{

        dot.classList.remove("active");

    });

    slides[no].classList.add("active");

    dots[no].classList.add("active");

}

function slideSelanjutnya(){

    index++;

    if(index>=slides.length){

        index=0;

    }

    tampilSlide(index);

}

setInterval(slideSelanjutnya,3500);

dots.forEach((dot,i)=>{

    dot.addEventListener("click",()=>{

        index=i;

        tampilSlide(index);

    });

});


/* =====================================
   SCROLL ANIMATION
===================================== */

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

},{
threshold:.2
});

document.querySelectorAll(

".gallery,.video-card,.letter,footer"

).forEach(el=>{

el.style.opacity="0";

el.style.transform="translateY(70px)";

el.style.transition="1s";

observer.observe(el);

});


/* =====================================
   LOVE CLICK EFFECT
===================================== */

document.addEventListener("click",function(e){

const love=document.createElement("div");

love.innerHTML="❤️";

love.style.position="fixed";

love.style.left=e.clientX+"px";

love.style.top=e.clientY+"px";

love.style.fontSize="24px";

love.style.pointerEvents="none";

love.style.animation="naikLove 1.5s forwards";

document.body.appendChild(love);

setTimeout(()=>{

love.remove();

},1500);

});


/* =====================================
   STYLE UNTUK LOVE
===================================== */

const style=document.createElement("style");

style.innerHTML=`

@keyframes naikLove{

0%{

opacity:1;

transform:translate(-50%,-50%) scale(1);

}

100%{

opacity:0;

transform:translate(-50%,-140px) scale(2);

}

}

`;

document.head.appendChild(style);


/* =====================================
   PETAL GENERATOR
===================================== */

function buatKelopak(){

const petal=document.createElement("div");

petal.innerHTML="🌸";

petal.style.position="fixed";

petal.style.top="-50px";

petal.style.left=Math.random()*100+"vw";

petal.style.fontSize=(20+Math.random()*20)+"px";

petal.style.opacity=Math.random();

petal.style.pointerEvents="none";

petal.style.animation=`
jatuh
${6+Math.random()*6}s
linear forwards`;

document.body.appendChild(petal);

setTimeout(()=>{

petal.remove();

},12000);

}

setInterval(buatKelopak,700);

const css=document.createElement("style");

css.innerHTML=`

@keyframes jatuh{

0%{

transform:
translateY(-50px)
rotate(0deg);

}

100%{

transform:
translateY(110vh)
translateX(120px)
rotate(360deg);

}

}

`;

document.head.appendChild(css);