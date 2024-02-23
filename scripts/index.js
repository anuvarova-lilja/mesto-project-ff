// @todo: Темплейт карточки
// @todo: DOM узлы
// @todo: Функция создания карточки
// @todo: Функция удаления карточки
// @todo: Вывести карточки на страницу


const cardTemplate = document.querySelector('#card-template').content;

const cardContainer = document.querySelector('.places__list');

function addCard (link, name, altText, deleteCard) { 
    const cardElem = cardTemplate.querySelector('.places__item').cloneNode(true); 

    cardElem.querySelector('.card__image').src = link;
    cardElem.querySelector('.card__title').textContent = name;
    cardElem.querySelector('.card__image').alt = altText;

    cardContainer.append(cardElem);

    const cardDelBtn = cardElem.querySelector('.card__delete-button');

    cardDelBtn.addEventListener('click', deleteCard);

    function deleteCard(evt) {
        const delBtn = evt.target.closest('.places__item');
        delBtn.remove();
    }
};

initialCards.forEach(function(item) {
    addCard(item.link, item.name, item.altText);
});