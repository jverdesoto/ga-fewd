import "./js/blogDetails";
import Home from "./js/home";
import Blogs from "./js/blogs";
import Authors from "./js/blogAuthors";

if (document.querySelector("[data-authors]")) {
    new Authors
}
if (document.querySelector("[data-blogs]")) {
    new Blogs
}
if (document.querySelector("[data-home]")) {
    new Home
}

const themeButton = document.getElementById("theme");

function toggleBackgroundColor() {
    document.body.classList.toggle("dark-theme");
}
themeButton.addEventListener("click", toggleBackgroundColor);
