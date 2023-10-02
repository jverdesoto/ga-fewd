import { myBlogs } from "./blogsdata";
export default class Blogs {
  constructor() {
    function populateBlogsTable(blogData) {
      const blogsTable = document.getElementById("blogsTableBody")
      if (JSON.stringify(blogsTable) != null) {
        for (const blog of blogData) {
          const row = document.createElement("tr");
          const titleCell = document.createElement("td");
          const titleLink = document.createElement("a");
          titleLink.href = `blogDetails.html?blogId=${blog.blogId}`;
          titleLink.textContent = blog.blogTitle;
          titleLink.classList.add("link-primary");
          titleLink.classList.add("link-underline-opacity-0");
          titleCell.appendChild(titleLink);
          const authorCell = document.createElement("td");
          authorCell.textContent = blog.blogAuthor;
          const dateCell = document.createElement("td");
          dateCell.textContent = blog.blogPublishedDate;
          row.appendChild(titleCell);
          row.appendChild(authorCell);
          row.appendChild(dateCell);
          blogsTable.appendChild(row);
        }
      }
    }

    populateBlogsTable(myBlogs);
  }
}