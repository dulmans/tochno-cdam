document.querySelectorAll('.select-app').forEach(formElem => {
    const formContElem = formElem.querySelector('.select-box')
    const titleCheckbox = formElem.querySelector('.title-box--open__options');
    const optionsElems = formElem.querySelectorAll('.def-options');
    const optionInputElems = optionsElems[0].querySelectorAll('.option-input');
    const optionElems = formElem.querySelectorAll('.option-hov');
    const defaultColorHover = 'rgb(210, 210, 210)';
    const heightOption = optionsElems[0].querySelector('.def-option').offsetHeight;
    let summBasicOption = optionsElems[0].children.length;


    optionsElems.forEach(optionsElem => {
        const optionsElemChild = optionsElem.children;
        for(let i = 0; i < optionsElemChild.length; i++){
            if(optionsElemChild[i].classList.contains('option-hov')){
                optionsElemChild[i].setAttribute('data-numelem',i + 1);
            }
        }
    }) /* Нумеруем каждый option, согласно положению в родителе */

    formElem.querySelectorAll('.nested-box').forEach(nestedElem => {
        const styleText = `${parseFloat(window.getComputedStyle(nestedElem).getPropertyValue('padding-top')) + (summBasicOption * heightOption)}px;`;

        nestedElem.style.cssText = `
            max-height: ${styleText};
            min-height: ${styleText};
        `;
    })

    titleCheckbox.addEventListener('change', function(){
        formContElem.classList.toggle('active');
    }); /* Появление элемента options, при клике на title-box */

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
            }
        })
    }); /* Изменение title элемента, согласно активному элементу */

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
})