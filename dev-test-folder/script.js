document.querySelectorAll('.select-app').forEach(formElem => {
    const formContElem = formElem.querySelector('.select-box')
    const titleCheckbox = formElem.querySelector('.title-box--open__options');
    const optionsElem = formElem.querySelector('.options');
    const optionInputElems = optionsElem.querySelectorAll('.option-input');
    const optionElems = formElem.querySelectorAll('.option-hov');

/*     formElem.querySelectorAll('.options-container').forEach(optsElem => {
        console.log(optsElem.querySelector('.def-options'));
    })
 */
    titleCheckbox.addEventListener('change', function(){
        formContElem.classList.toggle('active');
    });

    optionInputElems.forEach(elem => {
        elem.addEventListener('change', function (){
            if(this.checked){
                const titleTextElem = formElem.querySelector('.title-text');
                smoothly(titleTextElem, 'textContent', this.parentNode
                .querySelector('.option-name').textContent);
                formContElem.classList.toggle('active');
            }
        })
    });

    optionElems.forEach(optionElem => {
        optionElem.addEventListener('mouseenter', function(){
            this.classList.add('hover')
            if(this.dataset.nested){
                const sensElem = formElem.querySelectorAll(`[data-nested="${this.dataset.nested}"]`)[1];
                sensElem.classList.add('act');
                sensElem.addEventListener('mouseenter', () => {
                    this.classList.add('hover')
                    sensElem.classList.add('act');
                })
                sensElem.addEventListener('mouseleave', () => {
                    this.classList.remove('hover')
                    sensElem.classList.remove('act');
                })
            }
            console.log(this.dataset.nested);
        })
        optionElem.addEventListener('mouseleave', function(){
            this.classList.remove('hover')
            if(this.dataset.nested){
                const sensElem = formElem.querySelectorAll(`[data-nested="${this.dataset.nested}"]`)[1];
                sensElem.classList.remove('act');
            }
        })
    })
})

/*
    function backgroundMove (backgrElem, top: ? = false, color: ?){
        if(top === false){
            backgrElem. stylelist
        }
    }
*/

/*
    !: ПРОНУМЕРОВАТЬ КАЖДЫЙ option-hov, отчитывая от родителя
 */