/* Интерактив клика на aside title (название сайта) */
{
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

/* {
    const carsAnimElem = document.querySelectorAll('.car-animation__icons > *');
    carsAnimElem.forEach(elem => {
        elem.style.cssText = `animation: `;
    });
} */