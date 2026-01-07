// Show a welcome message
window.onload = function () {
  alert("Welcome to Kristoff Viray's Personal Profile!");
};

// Toggle dark mode on keypress (press 'd')
document.addEventListener("keydown", function (event) {
  if (event.key === "d") {
    document.body.classList.toggle("dark-mode");
  }
});
