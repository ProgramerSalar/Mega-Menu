function toggleMenu() {
  var menu = document.querySelector(".off-screen-menu");
  var downIcon = document.querySelector(".down");
  var upIcon = document.querySelector(".up");

  if (menu.style.display === "none") {
    menu.style.display = "block";
    downIcon.style.display = "none";
    upIcon.style.display = "block";
  } else {
    menu.style.display = "none";
    downIcon.style.display = "block";
    upIcon.style.display = "none";
  }
}
