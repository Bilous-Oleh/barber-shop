// (() => {
//   const refs = {
//     openModalBtn: document.querySelector("[data-modal-open]"),
//     closeModalBtn: document.querySelector("[data-modal-close]"),
//     modal: document.querySelector("[data-modal]"),
//   };
//   refs.openModalBtn.addEventListener("click", toggleModal);
//   refs.closeModalBtn.addEventListener("click", toggleModal);

//   function toggleModal() {
//     refs.modal.classList.toggle("is-hidden");
//   }
// })();

(() => {
  const refs = {
    openModalBtnHeader: document.querySelector(".header-btn"),
    openModalBtnAbout: document.querySelector(".about-btn"),
    openModalBtnPrices: document.querySelector(".prices-btn"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };
  refs.openModalBtnHeader.addEventListener("click", toggleModal);
  refs.openModalBtnAbout.addEventListener("click", toggleModal);
  refs.openModalBtnPrices.addEventListener("click", toggleModal);

  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();
