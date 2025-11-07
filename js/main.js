const modalWindow = document.querySelector(".modal");
const buttonModals = document.querySelectorAll(".modal__button");
const modalClose = document.querySelector(".modal__close");
const body = document.body; // лучше использовать document.body

// Функция для определения ширины скроллбара
function getScrollbarWidth() {
  const outer = document.createElement('div');
  outer.style.visibility = 'hidden';
  outer.style.overflow = 'scroll';
  document.body.appendChild(outer);

  const inner = document.createElement('div');
  outer.appendChild(inner);

  const scrollbarWidth = outer.offsetWidth - inner.offsetWidth;
  document.body.removeChild(outer);

  return scrollbarWidth;
}

// Открытие модального окна
buttonModals.forEach((item) => {
  item.addEventListener("click", () => {
    const scrollbarWidth = getScrollbarWidth();
    body.style.setProperty('--scrollbar-width', `${scrollbarWidth}px`);
    body.classList.add("noscroll");
    modalWindow.style.display = "flex";
  });
});

// Закрытие по клику вне окна
modalWindow.addEventListener("click", (e) => {
  const isModal = e.target.closest(".modal__inner");
  if (!isModal) {
    body.classList.remove("noscroll");
    modalWindow.style.display = "none";
  }
});

// Закрытие по крестику
modalClose.addEventListener("click", () => {
  body.classList.remove("noscroll");
  modalWindow.style.display = "none";
});