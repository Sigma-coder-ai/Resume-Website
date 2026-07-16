//================ LOADER ================//

window.addEventListener("load", () => {

const loader=document.getElementById("loader");

setTimeout(()=>{

loader.style.opacity="0";

setTimeout(()=>{

loader.style.display="none";

},600);

},800);

});



//================ TYPING EFFECT ================//

const text=[
"AI & ML Engineer",
"Full Stack Developer",
"Problem Solver",
"Python Developer",
"Tech Enthusiast"
];

let textIndex=0;
let charIndex=0;
let deleting=false;

const typing=document.getElementById("typing");

function typeEffect(){

if(!typing) return;

let current=text[textIndex];

if(!deleting){

typing.textContent=current.substring(0,charIndex++);

if(charIndex>current.length){

deleting=true;

setTimeout(typeEffect,1500);

return;

}

}

else{

typing.textContent=current.substring(0,charIndex--);

if(charIndex<0){

deleting=false;

textIndex=(textIndex+1)%text.length;

}

}

setTimeout(typeEffect,deleting?45:100);

}

typeEffect();




//================ MOBILE MENU ================//

const menu=document.querySelector(".menu");

const nav=document.querySelector(".nav-links");

if(menu){

menu.onclick=()=>{

nav.classList.toggle("active");

};

}

document.querySelectorAll(".nav-links a").forEach(link=>{

link.onclick=()=>{

nav.classList.remove("active");

};

});




//================ DARK MODE ================//

const theme=document.getElementById("theme-toggle");

const body=document.body;

if(localStorage.getItem("theme")=="light"){

body.classList.add("light");

theme.innerHTML='<i class="fa-solid fa-sun"></i>';

}

if(theme){

theme.onclick=()=>{

body.classList.toggle("light");

if(body.classList.contains("light")){

localStorage.setItem("theme","light");

theme.innerHTML='<i class="fa-solid fa-sun"></i>';

}

else{

localStorage.setItem("theme","dark");

theme.innerHTML='<i class="fa-solid fa-moon"></i>';

}

};

}




//================ NAVBAR SCROLL ================//

const navbar=document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

if(window.scrollY>80){

navbar.style.padding="14px 10%";

navbar.style.background="rgba(10,10,20,.85)";

}

else{

navbar.style.padding="20px 10%";

navbar.style.background="rgba(5,5,10,.45)";

}

});




//================ SCROLL REVEAL ================//

const reveals=document.querySelectorAll("section");

function revealSections(){

reveals.forEach(sec=>{

const top=sec.getBoundingClientRect().top;

if(top<window.innerHeight-120){

sec.classList.add("fade","show");

}

});

}

window.addEventListener("scroll",revealSections);

revealSections();




//================ ACTIVE NAV LINK ================//

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-150;

if(pageYOffset>=sectionTop){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")=="#"+current){

link.classList.add("active");

}

});

});

//================ BACK TO TOP BUTTON ================//

const topBtn=document.createElement("div");

topBtn.id="topBtn";

topBtn.innerHTML='<i class="fa-solid fa-arrow-up"></i>';

document.body.appendChild(topBtn);

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topBtn.classList.add("show");

}else{

topBtn.classList.remove("show");

}

});




//================ SCROLL PROGRESS BAR ================//

const progress=document.createElement("div");

progress.className="progress-bar";

document.body.appendChild(progress);

window.addEventListener("scroll",()=>{

const scrollTop=document.documentElement.scrollTop;

const height=document.documentElement.scrollHeight-document.documentElement.clientHeight;

const progressWidth=(scrollTop/height)*100;

progress.style.width=progressWidth+"%";

});




//================ BUTTON RIPPLE EFFECT ================//

document.querySelectorAll(".btn").forEach(button=>{

button.addEventListener("click",function(e){

const ripple=document.createElement("span");

const rect=this.getBoundingClientRect();

const size=Math.max(rect.width,rect.height);

ripple.style.width=size+"px";

ripple.style.height=size+"px";

ripple.style.left=e.clientX-rect.left-size/2+"px";

ripple.style.top=e.clientY-rect.top-size/2+"px";

ripple.style.position="absolute";

ripple.style.background="rgba(255,255,255,.4)";

ripple.style.borderRadius="50%";

ripple.style.transform="scale(0)";

ripple.style.animation="ripple .6s linear";

ripple.style.pointerEvents="none";

this.style.position="relative";

this.style.overflow="hidden";

this.appendChild(ripple);

setTimeout(()=>{

ripple.remove();

},600);

});

});




//================ RIPPLE KEYFRAME ================//

const style=document.createElement("style");

style.innerHTML=`

@keyframes ripple{

to{

transform:scale(4);

opacity:0;

}

}

`;

document.head.appendChild(style);




//================ PROJECT CARD TILT ================//

const cards=document.querySelectorAll(".project-card");

cards.forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

const rotateY=((x/rect.width)-0.5)*18;

const rotateX=((y/rect.height)-0.5)*-18;

card.style.transform=

`perspective(1000px)

rotateX(${rotateX}deg)

rotateY(${rotateY}deg)

translateY(-10px)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform="perspective(1000px) rotateX(0) rotateY(0)";

});

});




//================ FLOATING ANIMATION ================//

const floating=document.querySelectorAll(

".skill-card,.certificate-card,.achievement-card,.contact-box"

);

floating.forEach((item,index)=>{

item.style.animation=

`floating 4s ease-in-out ${index*.15}s infinite`;

});




//================ PARTICLES ================//

for(let i=0;i<25;i++){

const particle=document.createElement("div");

particle.style.position="fixed";

particle.style.width=Math.random()*6+3+"px";

particle.style.height=particle.style.width;

particle.style.borderRadius="50%";

particle.style.background="rgba(255,255,255,.12)";

particle.style.left=Math.random()*100+"vw";

particle.style.top=Math.random()*100+"vh";

particle.style.pointerEvents="none";

particle.style.zIndex="-1";

particle.style.animation=

`particleMove ${12+Math.random()*8}s linear infinite`;

document.body.appendChild(particle);

}

const particleStyle=document.createElement("style");

particleStyle.innerHTML=`

@keyframes particleMove{

0%{

transform:translateY(0);

opacity:0;

}

10%{

opacity:1;

}

90%{

opacity:1;

}

100%{

transform:translateY(-120vh);

opacity:0;

}

}

`;

document.head.appendChild(particleStyle);




//================ SMOOTH PARALLAX HERO ================//

const hero=document.querySelector(".hero-right");

window.addEventListener("scroll",()=>{

const value=window.scrollY;

if(hero){

hero.style.transform=`translateY(${value*0.15}px)`;

}

});




//================ HOVER SCALE ================//

document.querySelectorAll(

".skill-card,.certificate-card,.achievement-card"

).forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transition=".35s";

card.style.transform="translateY(-10px) scale(1.05)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0) scale(1)";

});

});




//================ CONSOLE MESSAGE ================//

console.log("%c👋 Welcome to Mahesh's Portfolio",

"font-size:22px;color:#00C6FF;font-weight:bold;");

console.log("%cDesigned with ❤️ using HTML, CSS & JavaScript",

"font-size:15px;color:#6C63FF;");
