function openImage(imageSrc) {
    alert("openImage function triggered!");
    const modal = document.getElementById('image-modal');
    const modalImage = document.getElementById('modal-image');
    modalImage.src = imageSrc; // Set the clicked image as the modal image
    modal.style.display = 'flex'; // Show the modal
}

function closeImage() {
    alert("closeImage function triggered!");
    const modal = document.getElementById('image-modal');
    modal.style.display = 'none'; // Hide the modal
}
if (!imageSrc) {
    console.error('Image source is not valid');
    return;
}
