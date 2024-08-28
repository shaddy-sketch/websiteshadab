// script.js

// Sticky Navbar
window.onscroll = function() {
    const navbar = document.getElementById("navbar");
    if (window.pageYOffset >= navbar.offsetTop) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
};

// Smooth Scrolling
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Dynamic Blog Section
function addPost() {
    const postContent = prompt("Enter post content:");
    if (postContent) {
        const post = document.createElement("div");
        post.textContent = postContent;
        document.getElementById("blog-posts").appendChild(post);
    }
}

// Contact Form Validation
document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();
    const name = this.name.value.trim();
    const email = this.email.value.trim();
    const message = this.message.value.trim();

    if (name && email && message) {
        alert("Message sent!");
    } else {
        alert("Please fill in all fields.");
    }
});
