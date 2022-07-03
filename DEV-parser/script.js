const quizItems = document.querySelectorAll(`[data-item]`);
let ticket = {
    quis: [],
}
quizItems.forEach((elem) => {
    const img =  elem.querySelector('img')?.getAttribute('src') ?? false;
})
console.log(typeof `` + quizItems[0].querySelector('img')?.getAttribute('src'));

function ConstructTicket (img, ques, desc, correct, answers){
    this.image = img;
    this.questionText = ques;
    this.description = desc;
    this.correctAnswer = correct;
    this.answers = answers;
}
/*
    - IMG: url OR false
    - Ques: string
    - Desc: string
    - Correct: number
    - Answer []
*/