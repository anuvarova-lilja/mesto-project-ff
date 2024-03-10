import './index.css';
import {initialCards} from '../scripts/cards.js';

const cardTemplate = document.querySelector('#card-template').content;

const cardContainer = document.querySelector('.places__list');

function createCard (link, name, altText, {deleteCard}) {
    const cardElem = cardTemplate.querySelector('.places__item').cloneNode(true);
    
    const cardImage = cardElem.querySelector(".card__image");
    cardImage.src = link;
    cardElem.querySelector('.card__title').textContent = name;
    cardImage.alt = altText;

    const cardDelBtn = cardElem.querySelector('.card__delete-button');
    cardDelBtn.addEventListener('click', deleteCard);

    return cardElem;
}

function addCard (item, {deleteCard}) {
    const cardElem = createCard(item.link, item.name, item.altText, {deleteCard});
    cardContainer.append(cardElem);
};


function deleteCard(evt) {
    const delBtn = evt.target.closest('.places__item');
    delBtn.remove();
}

initialCards.forEach(function(item) {
    addCard(item, {deleteCard});
});
