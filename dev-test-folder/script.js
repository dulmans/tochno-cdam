const formElem = document.getElementById('select-app');
const formContElem = formElem.querySelector('.select-box')
const titleCheckbox = formElem.querySelector('.title-box--open__options');
const optionsElems = formElem.querySelector('.options');
const optionInputElems = optionsElems.querySelectorAll('.option-input');
const nestedSensElems = optionsElems.querySelectorAll('.option[data-nested]');

titleCheckbox.addEventListener('change', function(){
    formContElem.classList.toggle('active');
});

optionInputElems.forEach(elem => {
    elem.addEventListener('change', function (){
        if(this.checked){
            const titleTextElem = formElem.querySelector('.title-text');
            smoothly(titleTextElem, 'textContent', this.parentNode
            .querySelector('.option-name').textContent);
        }
    })
});

nestedSensElems.forEach(nestedSensElem => {
    nestedSensElem.addEventListener('click')
})