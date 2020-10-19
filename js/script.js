const reservationButton = document.querySelector(".reservation-button");
const reservationPopup = document.querySelector(".search-form");
const checkIn = reservationPopup.querySelector("[name=check-in]")

reservationButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  reservationPopup.classList.toggle("search-form-hide");
  checkIn.focus();
});