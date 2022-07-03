const quizItems = document.querySelectorAll(`[data-item]`);
let ticket = {
    quis: [],
}

document.querySelectorAll('button[name]').forEach(buttElem => {
    buttElem.click();
    quizItems.forEach((elem) => {
        elem.querySelectorAll('ol li').forEach((elemAnsClick) => elemAnsClick.click());
    });
});

quizItems.forEach((elem) => {
    elem.querySelectorAll('ol li').forEach((elemAnsClick) => elemAnsClick.click());
    const img = () =>{
        const imgElem = elem.querySelector('img')?.getAttribute('src').substring(0,22);
        return imgElem === undefined ? false : `https://ruspdd.com/${imgElem}`;
    };
    const ques = elem.querySelector('strong').textContent;
    const desc = elem.querySelector('p span').textContent;
    const answers = Array.from(elem.querySelectorAll('ol li')).map(x => x.textContent);
    const correct = () => {
        const ansElems = elem.querySelectorAll('ol li');
        for(let i = 0; i < ansElems.length; i++){
            if(ansElems[i].classList.contains('true')){
                return i;
            }
        }
    };
    ticket.quis.push(new ConstructTicket(img(), ques, desc, correct(), answers));
});

function ConstructTicket (img, ques, desc, correct, answers){
    this.image = img;
    this.questionText = ques;
    this.description = desc;
    this.correctAnswer = correct;
    this.answers = answers;
}

console.log(ticket);