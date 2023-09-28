import "./js/blogDetails";
import Home from "./js/home";
import Blogs from "./js/blogs";
import Authors from "./js/blogAuthors";
import "./js/authorDetails";
import "./js/search";
import "./js/blogImage";

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
