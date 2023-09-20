import "./js/blogs"
import "./js/blogAuthors"


const themeButton = document.getElementById("theme");

function toggleBackgroundColor() {
    document.body.classList.toggle("dark-theme");
}
themeButton.addEventListener("click", toggleBackgroundColor);
