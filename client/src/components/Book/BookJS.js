let modal = document.getElementById('modal');
let btn = document.getElementById('modal-control');
let addBtn = document.getElementById('btnAddBook');

btn.onclick = function() {
  modal.style.display = "block";
}

addBtn.onclick = () => {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (modal.style.display === "none"){
      modal.style.display = "none";
  }
}
