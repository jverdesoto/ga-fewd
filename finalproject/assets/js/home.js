import { myBlogs } from "./blogsdata";
export default class Home {
  constructor() {    
    let col, card, cardBody, blogTitle, blogAuthor, blogPublishedDate, cardImage;
    fetch("https://picsum.photos/v2/list")
      .then((response) => response.json())
      .then((obj) => createBlog(myBlogs,obj));
    function createBlog(myBlogs, obj) {
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
        blogAuthor = document.createElement("h6");
        blogAuthor.innerHTML = blog.blogAuthor;
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