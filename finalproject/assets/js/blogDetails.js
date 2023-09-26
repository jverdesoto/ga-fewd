import "./home"
import { myBlogs } from "./blogsdata";
import { myAuthors } from "./authorsData";

document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const blogId = urlParams.get("blogId");
  const blogImage = urlParams.get("blogImage");
  console.log("Blog Image:", blogImage);
  const blog = myBlogs.find((item) => item.blogId === parseInt(blogId, 10));
  if (blog) {
    document.getElementById("blogTitle").textContent = blog.blogTitle;    
    const author = myAuthors.find((authorItem) => authorItem.blogAuthorName === blog.blogAuthor);
    if (author) {
      const authorLink = document.createElement("a");
      authorLink.href = `authorDetails.html?blogAuthorId=${author.blogAuthorId}`;
      authorLink.textContent = author.blogAuthorName;
      authorLink.classList.add("link-primary");
      authorLink.classList.add("link-underline-opacity-0");      
      document.getElementById("blogAuthor").appendChild(authorLink);
    }
    document.getElementById("blogDate").textContent = blog.blogPublishedDate;  
    const blogImageElement = document.getElementById("blogImage");
    blogImageElement.src = blogImage;
    const blogContentElement = document.getElementById("blogContent");
    blogContentElement.innerHTML = blog.blogContent;   
  } else {
    console.error("Blog not found.");
  }
});
