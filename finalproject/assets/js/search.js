import { myBlogs } from "./blogsdata";

    const searchForm = document.getElementById("submit");
    const searchInput = document.getElementById("search");
    
    

    searchForm.addEventListener("click", (e) => {
        e.preventDefault();
        console.log(searchInput.value); 
        window.location.href = `search.html?q=${searchInput.value}`
        // const searchQuery = searchInput.value.trim().toLowerCase();
        
        // displaySearchResults(filteredBlogs);
    });

document.addEventListener("DOMContentLoaded", () => {
    
    if (window.location.href.indexOf('search') >-1 ) {
        console.log("working")
        const urlParams = new URLSearchParams(window.location.search);
        const search = urlParams.get("q");
        
        const filteredBlogs = myBlogs.filter((blog) =>
            blog.blogTitle.toLowerCase().includes(search)
        );
        displaySearchResults(filteredBlogs)        
    }

    function displaySearchResults(results) {
        const searchResultsTable = document.getElementById("searchResultsList");
        searchResultsTable.innerHTML = "";
        if (results.length === 0) {
            searchResultsTable.innerHTML = "<tr><td colspan='3'>No matching results found.</td></tr>";
        } else {
            results.forEach((blog) => {
                const row = document.createElement("tr");
                const titleCell = document.createElement("td");
                const authorCell = document.createElement("td");
                const dateCell = document.createElement("td");
                const blogLink = document.createElement("a");
                blogLink.href = `blogDetails.html?blogId=${blog.blogId}`;
                blogLink.textContent = blog.blogTitle;
                blogLink.classList.add("link-primary");
                blogLink.classList.add("link-underline-opacity-0"); 
                titleCell.appendChild(blogLink);
                authorCell.textContent = blog.blogAuthor;
                dateCell.textContent = blog.blogPublishedDate;
                row.appendChild(titleCell);
                row.appendChild(authorCell);
                row.appendChild(dateCell);
                searchResultsTable.appendChild(row);
            });
        }
    }
});
