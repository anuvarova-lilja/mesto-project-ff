export function openPopup(modal) {
    modal.classList.add("popup_is-opened");
  }
  
export function closePopup(modal) {
    modal.classList.remove("popup_is-opened");
    window.removeEventListener("keydown", closePopup);
  }

const closeBtns = document.querySelectorAll(".popup__close");

closeBtns.forEach((popupCloseBtn) => {
  popupCloseBtn.addEventListener("click", () => {
    closePopup(popupCloseBtn.closest(".popup"));
  });

  window.addEventListener("click", (event) => {
    if (event.target === popupCloseBtn.closest(".popup")) {
      closePopup(popupCloseBtn.closest(".popup"));
    }
  });

  window.addEventListener("keydown", (event) => {
    if (event.code === "Escape") {
      closePopup(popupCloseBtn.closest(".popup"));
    }
  });
});