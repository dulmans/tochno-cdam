/* Интерактив клика на aside title (название сайта) */
document.querySelector('.aside-title').addEventListener('click', (e) => {
    const randomColor = ['#F61717', '#FFBF00', '#57D9AD', '#f44336', '#e91e63','#9c27b0', '#673ab7', '#00bcd4', '#8bc34a', '#ffeb3b', '#ffc107', '#ff5722'];
    document.querySelector('.aside-title').style.color = randomColor[Math.floor(Math.random() * ++randomColor.length)];
})

/* Анимация светофора в aside */
{
    const red = document.querySelector('.traffic-lights__red');
    const yellow = document.querySelector('.traffic-lights__yellow');
    const green = document.querySelector('.traffic-lights__green');
    red.addEventListener('click', (e) => {
        green.classList.toggle('animstop')
    })
}