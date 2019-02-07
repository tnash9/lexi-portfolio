function openNav() {
  document.getElementById('menuBtn').classList.toggle("change");
  document.getElementById("menu").style.width = "100%";
  document.body.style.overflowY = "hidden";
}

function closeNav() {
  document.getElementById('menuBtn').classList.toggle("change");
  document.getElementById("menu").style.width = "0%";
  document.body.style.overflowY = "scroll";
}