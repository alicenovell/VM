/*eslint-env es6*/

const navSlide=()=>{
    const burger=document.querySelector(".burger");
    const nav=document.querySelector(".nav-links");
    const navlinks=document.querySelectorAll(".nav-links li");
    const button=document.querySelector(".boto-reserva");
    const header=document.querySelector(".nav");
    const barrasup=document.querySelector(".barra-sup");
    const body=document.querySelector(".scroll");
    //toggle nav
    burger.addEventListener('click',()=>{
       // header.classList.toggle('nav');

        header.classList.toggle('nav-active');
        body.classList.toggle('noscroll')
        barrasup.classList.toggle("barra-sup-active")
        nav.classList.toggle('nav-links-active');
        
        if(button.style.animation){
            button.style.animation= ''
        } else{
            button.style.animation= 'navButtonFade 1.8s ease forwards 1s';
        }
        
        navlinks.forEach((link)=>{
            if(link.style.animation){
                link.style.animation= ''
            } else{
                link.style.animation= 'navLinkFade 1.3s ease forwards 0.25s';
            }    

        });
        
        burger.classList.toggle('toggle');
    });
}

navSlide();

var button = document.getElementById('slide');
var container = document.getElementById('container');

button.onclick = function () {
    sideScroll(container,'right',25,1000,clientWidth);
};
var clientWidth = document.getElementById('slide-1').clientWidth
var back = document.getElementById('slideBack');
back.onclick = function () {
    var container = document.getElementById('container');
    sideScroll(container,'left',25,1000,clientWidth);
};
var scrollAmount=0
function sideScroll(element,direction,speed,distance,step){
    scrollAmount = 0;
    var slideTimer = setInterval(function(){
        if(direction == 'left'){
            element.scrollLeft -= step;
        } else {
            element.scrollLeft += step;
        }
        scrollAmount += step;
        if(scrollAmount >= distance){
            window.clearInterval(slideTimer);
        }
    }, speed);
}

var button1 = document.getElementById('slide_r');
button1.onclick = function () {
    var container1 = document.getElementById('container_r');
    sideScroll(container1,'right',25,1000,clientWidth1);
};
var clientWidth1 = document.getElementById('slide-1r').clientWidth
var back1 = document.getElementById('slideBack_r');
back1.onclick = function () {
    var container1 = document.getElementById('container_r');
    sideScroll(container1,'left',25,1000,clientWidth1);
};
var scrollAmount1=0
function sideScroll(element,direction,speed,distance,step){
    scrollAmount1 = 0;
    var slideTimer = setInterval(function(){
        if(direction == 'left'){
            element.scrollLeft -= step;
        } else {
            element.scrollLeft += step;
        }
        scrollAmount1 += step;
        if(scrollAmount1 >= distance){
            window.clearInterval(slideTimer);
        }
    }, speed);
}

