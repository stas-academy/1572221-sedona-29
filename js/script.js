const reservationButton = document.querySelector(".reservation-button");
const reservationPopup = document.querySelector(".search-form");
const checkIn = reservationPopup.querySelector("[name=check-in]");
const form = document.querySelector(".search-form-error");
const dateIn = document.querySelector(".date-in");
const dateOut = document.querySelector(".date-out");

reservationButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  reservationPopup.classList.toggle("search-form-hide");
  reservationPopup.classList.remove("modal-error");
  checkIn.focus();
});
form.addEventListener("submit", function (evt) {
  if (!dateIn.value || !dateOut.value) {
    evt.preventDefault();
    reservationPopup.classList.remove("modal-error");
    reservationPopup.offsetWidth = reservationPopup.offsetWidth;
    reservationPopup.classList.add("modal-error");
  }
});

