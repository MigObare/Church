var menuBtn = document.getElementById("menuBtn")
var navLink = document.getElementById("navLink")
var menu = document.getElementById("menu")

menuBtn.onclick = function() {
    if (navLink.style.right == "-250px"){
        navLink.style.right = "0";
        menu.src = "images/jesus.png"
    }
    else{
        navLink.style.right ="-250px"
        menu.src = "images/cross.png"
    }
}



// modals scripts 

var exampleModal = document.getElementById('exampleModal')
exampleModal.addEventListener('show.bs.modal', function (event) {
  // Button that triggered the modal
  var button = event.relatedTarget
  // Extract info from data-bs-* attributes
  var recipient = button.getAttribute('data-bs-whatever')
  // If necessary, you could initiate an AJAX request here
  // and then do the updating in a callback.
  //
  // Update the modal's content.
  var modalTitle = exampleModal.querySelector('.modal-title')
  var modalBodyInput = exampleModal.querySelector('.modal-body input')

  modalTitle.textContent = 'New message to ' + recipient
  modalBodyInput.value = recipient
})