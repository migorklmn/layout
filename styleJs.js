'use strict';
let pageControl = document.querySelector('.page_control').children;
let carousel = document.querySelector('.carousel');
let content = document.querySelectorAll('.content');
let contactButton = document.querySelector('.contact');
let contactPage = document.querySelector('.contact_page');
let x = document.querySelector('.x');
if (pageControl[0]) {
    pageControl[0].style.backgroundColor = '#333';
}
pageControl[0].onclick = function() {
    pageControl[0].style.backgroundColor = '#333';
    pageControl[1].style.backgroundColor = '#fff';
    pageControl[2].style.backgroundColor = '#fff';
    carousel.style.top = '0';
}
pageControl[1].onclick = function() {
    carousel.style.top = '-100%';
    pageControl[1].style.backgroundColor = '#333';
    pageControl[0].style.backgroundColor = '#fff';
    pageControl[2].style.backgroundColor = '#fff';
}
pageControl[2].onclick = function() {
    carousel.style.top = '-200%';
    pageControl[1].style.backgroundColor = '#fff';
    pageControl[2].style.backgroundColor = '#333';
    pageControl[0].style.backgroundColor = '#fff';
}
contactButton.onclick = function(i) {
    contactPage.style.display = 'block';
    contactPage.style.top = '70px';
}
x.onclick = function() {
    contactPage.style.top = '-70px';
    contactPage.style.display = 'none';
    
}


