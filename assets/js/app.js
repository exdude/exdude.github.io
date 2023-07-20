/*

const logoItem = document.querySelector('.exd__disc'),
      projectsBox = document.querySelector('#projects'),
      sections = document.querySelectorAll('.exd'),
      menu = document.querySelectorAll('.exd_menu'),
      header =document.querySelector('header');

function getInText (inText) {
    const putText = inText.textContent;
    inText.innerHTML = '';
    let i = 0;
    let intervalID = setInterval(() => {
        inText.innerHTML += putText[i];
        i++;
        if (i === putText.length)
            clearInterval(intervalID);
    }, 100);
};

document.addEventListener('scroll', e => {
    const scrollY = this.pageYOffset;
    sections.forEach((e, i) => {
        if (scrollY >= (e.offsetTop - 300)) {
            menu.forEach(elem => {
                elem.classList.remove('pick');
            });
            menu[i].classList.add('pick');
        };
    });
    scrollY >= 100 ? header.style.background = '#fff': header.style.background = 'rgb(0 0 0 / 0%)';
});

getInText(logoItem);

*/

setTimeout(() => {
    document.body.innerHTML = '<div><div style="font-size:92px !important; width: 100vw; text-align: center;">Извините но сайт не оплачен :(<div></div>'
}, 1000)
