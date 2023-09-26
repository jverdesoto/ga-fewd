import { myBlogs } from "./blogsdata";
import { myAuthors } from "./authorsData";
export default class Home {
  constructor() {    
    let col, card, cardBody, blogTitle, blogAuthor, blogPublishedDate, cardImage;
    fetch("https://picsum.photos/v2/list")
      .then((response) => response.json())
      .then((obj) => createBlog(myBlogs, obj, myAuthors));
    function createBlog(myBlogs, obj, authors) {
      myBlogs.map((blog, key) => {
        //THE IMAGE URL => obj[key].url
        console.log(`${key} - ${obj[key].download_url}`);
        col = document.createElement("div");
        col.classList.add("col-lg-3", "col-md-3", "col-sm-12", "nb-3");
        card = document.createElement("div");
        card.classList.add("card");
        cardImage = document.createElement("img");
        cardImage.classList.add("card-img-top");
        cardImage.setAttribute("src", obj[key].download_url);        
        cardBody = document.createElement("div");
        cardBody.classList.add("card-body");
        blogTitle = document.createElement("h5");
        blogTitle.innerHTML = blog.blogTitle;
        const author = authors.find((author) => author.blogAuthorName === blog.blogAuthor);
        if (author) {
          blogAuthor = document.createElement("h6");
          const authorDetailsURL = `authorDetails.html?blogAuthorId=${author.blogAuthorId}`;
          const authorLink = document.createElement("a");
          authorLink.setAttribute("href", authorDetailsURL);
          authorLink.textContent = author.blogAuthorName;
          authorLink.classList.add("link-primary");
          authorLink.classList.add("link-underline-opacity-0");   
          blogAuthor.appendChild(authorLink);
        }        
        // blogAuthor.innerHTML = blog.blogAuthor;
        blogPublishedDate = document.createElement("h7");
        blogPublishedDate.innerHTML = blog.blogPublishedDate;
        const imageLink = document.createElement("a");
        // imageLink.setAttribute("href", `blogDetails.html?blogId=${blog.blogId}`);
        const blogDetailsURL = `blogDetails.html?blogId=${blog.blogId}&blogImage=${obj[key].download_url}`;
        imageLink.setAttribute("href", blogDetailsURL);
        imageLink.appendChild(cardImage);
        cardBody.appendChild(blogTitle);
        cardBody.appendChild(blogAuthor);
        cardBody.appendChild(blogPublishedDate);
        card.appendChild(imageLink);
        card.appendChild(cardBody);              
        col.appendChild(card);
        document.getElementById("blogs").appendChild(col);
      });
    };
}
}