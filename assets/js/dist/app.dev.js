"use strict";

var _this = void 0;

var logoItem = document.querySelector('.exd__disc'),
    projectsBox = document.querySelector('#projects'),
    sections = document.querySelectorAll('.exd'),
    menu = document.querySelectorAll('.exd_menu'),
    header = document.querySelector('header');

function getInText(inText) {
  var putText = inText.textContent;
  inText.innerHTML = '';
  var i = 0;
  var intervalID = setInterval(function () {
    inText.innerHTML += putText[i];
    i++;
    if (i === putText.length) clearInterval(intervalID);
  }, 100);
}

;
document.addEventListener('scroll', function (e) {
  var scrollY = _this.pageYOffset;
  sections.forEach(function (e, i) {
    if (scrollY >= e.offsetTop - 300) {
      menu.forEach(function (elem) {
        elem.classList.remove('pick');
      });
      menu[i].classList.add('pick');
    }

    ;
  });
  scrollY >= 100 ? header.style.background = '#fff' : header.style.background = 'rgb(0 0 0 / 0%)';
});
getInText(logoItem);