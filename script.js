function submitForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
        alert(`Thank you, ${name}, for your message! We'll be in touch soon.`);
    } else {
        alert("Please fill out all fields.");
    }
}

// Array of image paths
const images = ["img1.jpeg","img2.jpg","img3.jpg","img4.jpg","img5.jpg"];
let currentIndex = 0;

// Select the image element
const sliderImage = document.getElementById("slider-image");

// Function to update the slider image
function changeImage() {
    currentIndex = (currentIndex + 1) % images.length; // Move to the next image, loop back to the first
    sliderImage.src = images[currentIndex]; // Update image source
}

// Change image every 3 seconds
setInterval(changeImage, 3000);
