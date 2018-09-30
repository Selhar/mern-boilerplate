var modal = document.getElementById('modal');
var btn = document.getElementById("modal-control");

btn.onclick = function() {
  modal.style.display = "block";
}

window.onclick = function(event) {
  if (modal.style.display === "none"){
    if (event.target === modal) {
      modal.style.display = "none";
    }
  }
}
