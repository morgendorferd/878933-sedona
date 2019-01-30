var bookingPopup = document.querySelector(".modal-booking"),
    bookingLink = document.querySelector(".hotel-search-btn");

    bookingLink.addEventListener("click", function (evt) {
      evt.preventDefault();
      bookingPopup.classList.toggle("modal-show");
    });
