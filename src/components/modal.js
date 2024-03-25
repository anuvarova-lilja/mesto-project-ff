export function openPopup(modal) {
  modal.classList.add("popup_is-opened");
  window.addEventListener("keydown", closeByEscape);
}

export function closePopup(modal) {
  modal.classList.remove("popup_is-opened");
  window.removeEventListener("keydown", closeByEscape);
}

 function closeByEscape(evt) {
  if (evt.code === "Escape") {
    const item = document.querySelector(".popup_is-opened");
    closePopup(item);
  }
}