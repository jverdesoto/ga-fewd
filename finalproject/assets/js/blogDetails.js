// blogDetails.js
import "./home"
import { myBlogs } from "./blogsdata";

document.addEventListener("DOMContentLoaded", () => {
  // Get the blogId from the URL
  const urlParams = new URLSearchParams(window.location.search);
  const blogId = urlParams.get("blogId");
  const blogImage = urlParams.get("blogImage");

  console.log("Blog Image:", blogImage);

  // Find the blog in the myBlogs array based on the blogId
  const blog = myBlogs.find((item) => item.blogId === parseInt(blogId, 10));

  if (blog) {
    // Populate the blog details on the page
    document.getElementById("blogTitle").value = blog.blogTitle;
    document.getElementById("blogAuthor").value = blog.blogAuthor;
    document.getElementById("blogDate").value = blog.blogPublishedDate;
    // ... (populate other content as needed)
    // Populate the blogContent
    const blogImageElement = document.getElementById("blogImage");
    blogImageElement.src = blogImage;

    const blogContentElement = document.getElementById("blogContent");
    blogContentElement.innerHTML = blog.blogContent;
   
  } else {
    // Handle the case where the blog with the given blogId was not found
    console.error("Blog not found.");
  }
});
