import { myBlogs } from "./blogsdata";
import { myAuthors } from "./authorsData";

document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const blogAuthorId = urlParams.get("blogAuthorId");

    const author = myAuthors.find((item) => item.blogAuthorId === parseInt(blogAuthorId, 10));

    if (author) {
        document.getElementById("blogAuthorName").textContent = author.blogAuthorName;
        document.getElementById("blogAuthorGender").textContent = author.blogAuthorGender;
        const authorImage = document.getElementById("authorImage");
        authorImage.src = `./assets/img/${author.blogAuthorImage}`;
        authorImage.alt = author.blogAuthorName;
        // Filter blogs by the author's blogAuthorName
        const blogsByAuthor = myBlogs.filter((blog) => blog.blogAuthor === author.blogAuthorName);
        const authorDetailsTableBody = document.getElementById("authorDetailsTableBody");
        blogsByAuthor.forEach((blog) => {
            const row = document.createElement("tr");
            const titleCell = document.createElement("td");
            const titleLink = document.createElement("a");
            titleLink.href = `blogDetails.html?blogId=${blog.blogId}&blogImage=${encodeURIComponent(blog.blogImage)}`;
            titleLink.textContent = blog.blogTitle;
            titleLink.classList.add("link-primary");
            titleLink.classList.add("link-underline-opacity-0");
            titleCell.appendChild(titleLink);
            row.appendChild(titleCell);
            row.innerHTML += `
              <td>${blog.blogAuthor}</td>
              <td>${blog.blogPublishedDate}</td>
            `;
            authorDetailsTableBody.appendChild(row);
          });
    // } else {
    //     console.error("Author not found.");
      }
});
