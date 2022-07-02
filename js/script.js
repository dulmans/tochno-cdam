const contentHTMLElem = document.getElementById('content-elem');
let uploadHTMLElem = (doStyle) => { /* Функциональное выражение, регулирующие отображение экрана загрузки */
    const uploadElem = document.getElementById('upload');
    uploadElem.style.opacity = doStyle;
    uploadElem.style.zIndex = doStyle === 1 ? 999 : -999;
}
uploadHomePage ();

{ /* Интерактив клика на aside title (название сайта) */
    let update = 0;
    const elem = document.querySelector('.onclickevent-color');
    elem.addEventListener('click', () => {
        const randomColor = ['#F61717', '#FFBF00', '#57D9AD', '#f44336', '#e91e63','#9c27b0', '#673ab7', '#00bcd4', '#8bc34a', '#ffeb3b', '#ffc107', '#ff5722'];
        elem.style.color = randomColor[Math.floor(Math.random() * ++randomColor.length)];
        update++;
        setTimeout(() => {
            update--;
            if(update === 0){
                elem.style.color = 'inherit';
            };
        }, 3000);
    })
}

function uploadHomePage () { /* Загрузка главной страницы */
    uploadHTMLElem(1);
    switchMenuActiveBlock('home')
    contentHTMLElem.innerHTML = loadPage('home');
    uploadHTMLElem(0);
}

function uploadTrainPage () { /* Загрузка страницы тренажера */
    uploadHTMLElem(1);
    switchMenuActiveBlock('train')
    contentHTMLElem.innerHTML = loadPage('home');
    uploadHTMLElem(0);
}

function uploadStatsPage () { /* Загрузка страницы с статистикой */
    uploadHTMLElem(1);
    switchMenuActiveBlock('stats')
    contentHTMLElem.innerHTML = loadPage('home');
    uploadHTMLElem(0);
}

function uploadListQuizPage () { /* Загрузка страницы с списком вопросов */
    uploadHTMLElem(1);
    switchMenuActiveBlock('list-que')
    contentHTMLElem.innerHTML = loadPage('home');
    uploadHTMLElem(0);
}

function switchMenuActiveBlock (activeElem){ /* Функция, которая меняет статусы активности у пунктов меню */
    let menuElems = document.querySelectorAll('.menu-elem');
    for(let i = 0; i < menuElems.length; i++){
        if(menuElems[i].dataset.menu === activeElem){
            menuElems.forEach(menuElem => menuElem.classList.remove('active'));
            menuElems[i].classList.add('active');
            return;
        }
    }
    throw new Error('передано неверное значение идентификатора пункта меню')
}