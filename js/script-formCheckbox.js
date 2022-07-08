"use strict";
formCheckbox(document.querySelector('.form-ticket'), formTicketValue)
function formCheckbox(formElem, dataProcess, defaultColorHover = 'rgb(255, 198, 27)') {
// formElem - HTML-элемент необходимой формы;
// dataProcess - функция, в которую будет динамически передаваться активный параметр формы;
// defaultColorHover (необязательное значение) - цвет плавающего background элемента для option, у которых нет отдельно заданного background color
/* Пример вызова функции:
    formCheckbox(document.querySelector('.form-ticket'), formTicketValue, '#000');
    */


/* ПЕРЕМЕННЫЕ++++++++++++++++++++++++++++++++++++++++++++++++ */

    /* Ищем select-контейнер: */
    const formContElem = formElem.querySelector('.select-box');

    /* Ищем title-checkbox для скрытия/ раскрытия options: */
    const titleCheckbox = formElem.querySelector('.title-box--open__options');

    /* Находим все окна options (включая вложенные nested): */
    const optionsElems = formElem.querySelectorAll('.def-options');

    /* Находим все input=элементы: */
    const optionInputElems = formElem.querySelectorAll('.option-input');

    /* Находим все option элементы: */
    const optionElems = formElem.querySelectorAll('.option-hov');

    /* Узнаем стандартную высоту option элемента: */
    const heightOption = formElem.querySelector('.def-option').offsetHeight;

    /* Узнаем кол-во option элементов в основном блоке */
    let summBasicOption = optionsElems[0].children.length;

/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++ */



/* ФУНКЦИИ ОТРИСОВКИ+++++++++++++++++++++++++++++++++++++++ */

    /* Нумеруем каждый option, согласно положению в родителе и определяем порядковый номер в атрибут [data-numelem]: */
    optionsElems.forEach(optionsElem => {
        const optionsElemChild = optionsElem.children;
        for(let i = 0; i < optionsElemChild.length; i++){
            if(optionsElemChild[i].classList.contains('option-hov')){
                optionsElemChild[i].setAttribute('data-numelem',i + 1);
            }
        }
    })

    /* Определяем границы nested-элемента: */
    formElem.querySelectorAll('.nested-box').forEach(nestedElem => {
        const styleText = `${parseFloat(window.getComputedStyle(nestedElem).getPropertyValue('padding-top')) + (summBasicOption * heightOption)}px;`;

        nestedElem.style.cssText = `
            max-height: ${styleText};
            min-height: ${styleText};
        `;
    })

    /* Появление и скрытие options элемента при клике на title формы: */
    titleCheckbox.addEventListener('change', function(){
        formContElem.classList.toggle('active');
    });

/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++ */



/* ФУНКЦИИ ОТЗЫВЧИВОСТИ++++++++++++++++++++++++++++++++++++ */

    /* Смена title-текста формы при клике на option, а также передача данных в функцию обработки формы: */
    optionInputElems.forEach(elem => {
        elem.addEventListener('change', function (){
            if(this.checked){
                const titleTextElem = formElem.querySelector('.title-text');
                let res = this.parentNode.querySelector('.option-name').textContent;
                if(this.parentNode.classList.contains('full-copy__in-title')){
                    res = `${res} №${this.parentNode.querySelector('.option-icon').textContent}`;
                }
                smoothly(titleTextElem, 'textContent', res);
                formContElem.classList.remove('active');
                dataProcess(this.value)
            }
        })
    });

    /* Плавное перемещение плавающего background элемента, согласно положению option: */
    optionElems.forEach(optionElem => {
        if(!(optionElem.dataset.colorhover)){
            optionElem.setAttribute('data-colorhover', defaultColorHover)
        }
        if(optionElem.classList.contains('nested-item')){
            const nestedElem = optionElem.querySelector('.nested-box');
            nestedElem.style.top = `-${optionElem.dataset.numelem * heightOption}px`
        }
        optionElem.addEventListener('mouseenter', function(){
            this.classList.add('hover')
            backgroundHover(this, 1);

        })
        optionElem.addEventListener('mouseleave', function(){
            this.classList.remove('hover')
            backgroundHover(this, 0);
        })
    })

    /* Функция, которая устанавливает необходимые стили плавающему background элементу */
    function backgroundHover (hoverElem, act){
        const bgElem = hoverElem.parentNode.lastElementChild;
        if(act){
            bgElem.style.cssText = `
                background-color: ${hoverElem.dataset.colorhover};
                top: ${heightOption * (hoverElem.dataset.numelem - 1)}px;
                opacity: 1;
            `;
        }
        else{
            bgElem.style.cssText = ``;
        };
    }
/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

}