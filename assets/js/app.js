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

document.write = 'h1';

getInText(logoItem);
