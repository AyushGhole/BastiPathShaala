document.addEventListener("DOMContentLoaded", function () {
  const copyBtn = document.querySelector(".donation-link-btn");
  const linkInput = document.getElementById("donation-link");

  copyBtn.addEventListener("click", function () {
    // Copy the link to clipboard using modern Clipboard API
    navigator.clipboard
      .writeText(linkInput.value)
      .then(() => {
        // Show user feedback
        copyBtn.textContent = "✅ Copied!";
        copyBtn.style.background = "#4CAF50"; // Change color to green

        // Reset button text after 2 seconds
        setTimeout(() => {
          window.alert("Link Copied to Your clipboard !!  ");
          copyBtn.textContent = "🔗 Copy Donation Link";
          copyBtn.style.background = ""; // Reset background color
        }, 1000);
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
        alert("Failed to copy. Please try again!");
      });
  });
});

// Whatsapp chat
document.addEventListener("DOMContentLoaded", function () {
  const whatsappBtn = document.querySelector(".whatsapp-btn");
  const donationLink = document.getElementById("donation-link").value;

  whatsappBtn.addEventListener("click", function () {
    // Predefined WhatsApp message
    const message = `Hi, I am raising funds for an NGO. Please support me by donating through this link: ${donationLink} and make a difference!`;

    // Encode message for URL compatibility
    const encodedMessage = encodeURIComponent(message);

    // Create WhatsApp share link
    const whatsappURL = `https://wa.me/?text=${encodedMessage}`;

    // Open WhatsApp share window
    window.open(whatsappURL, "_blank");
  });
});
