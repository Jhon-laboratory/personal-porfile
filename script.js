function showCertificate(imageSrc) {
    var modal = document.getElementById("modal");
    var modalImage = document.getElementById("modal-image");
    modal.style.display = "block";
    modalImage.src = imageSrc;
}

document.querySelector('.menu-toggle').addEventListener('click', function() {
    this.classList.toggle('active');
  });

  
function closeModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
}

// Cerrar el modal al hacer clic fuera de la imagen
window.onclick = function(event) {
    var modal = document.getElementById("modal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
