document.addEventListener("DOMContentLoaded", function () {
  const donateBtn = document.querySelector(".donate-btn");
  const modal = document.getElementById("donationModal");
  const closeBtn = document.querySelector(".close-btn");

  // Open Modal
  donateBtn.addEventListener("click", function () {
    modal.style.display = "flex";
  });

  // Close Modal
  closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
  });

  // Close Modal if Clicked Outside Content
  window.addEventListener("click", function (e) {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});
