function loadPage (namePage) {
    switch(namePage){
        case 'home':
            return `
            <div class="content-container content-box__center">
                <div class="content-box home-page__content-box">
                    <h2 class="content__title title">Добро пожаловать на портал</h2>
                    <h2 class="content__name-site title random-word">ТочноСдам.ru</h2>
                    <div class="text-box home-page__text-box">
                        <p class="content__paragraph paragraph">На нашем портале вы сможете тренироваться в решении билетов ГИБДД. <br/> Каждый раз вопросы генерируются согласно регламенту ГИБДД. <br/> То есть, наш тренажер полностью симулирует программу, в которой вы будете сдавать экзамен в ГАИ.</p>
                    </div>
                    <div>
                        <button class="content__button button" onclick="uploadTrainPage()">Перейти в тренажер</button>
                    </div>
                </div>
            </div>
            `;
        case 'train':
            return `

        `;
        case 'stats':
            return `

        `;
        case 'list-quiz':
            return `

        `;
        default:
            throw new Error(`передано неверное значение загружаемой страницы`);
    }
}