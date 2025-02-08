// Dark Mode Toggle
document.getElementById("dark-mode-toggle").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});

// Blog Post Search Functionality
function searchPosts() {
    let input = document.getElementById("search").value.toLowerCase();
    let posts = document.querySelectorAll(".post");
    
    posts.forEach(post => {
        let title = post.querySelector("h3").innerText.toLowerCase();
        if (title.includes(input)) {
            post.style.display = "block";
        } else {
            post.style.display = "none";
        }
    });
}
