const myBlogs = [
    {
      blogId: 1,
      blogTitle: "Blog 1",
      blogAuthor: "John Smith",
      blogPublishedDate: "09/09/2023"
    },
    {
      blogId: 2,
      blogTitle: "Blog 2",
      blogAuthor: "Matthew Robertson",
      blogPublishedDate: "10/09/2023"
    },
    {
      blogId: 3,
      blogTitle: "Blog 3",
      blogAuthor: "Edward Smith",
      blogPublishedDate: "11/09/2023"
    },
    {
      blogId: 4,
      blogTitle: "Blog 4",
      blogAuthor: "Jane Smith",
      blogPublishedDate: "12/09/2023"
    },
    {
      blogId: 5,
      blogTitle: "Blog 5",
      blogAuthor: "John Smith",
      blogPublishedDate: "16/09/2023"
    },
    {
      blogId: 6,
      blogTitle: "Blog 6",
      blogAuthor: "Matthew Robertson",
      blogPublishedDate: "16/09/2023"
    },
    {
      blogId: 7,
      blogTitle: "Blog 7",
      blogAuthor: "Edward Smith",
      blogPublishedDate: "16/09/2023"
    },
    {
      blogId: 8,
      blogTitle: "Blog 8",
      blogAuthor: "Jane Smith",
      blogPublishedDate: "16/09/2023"
    },
    {
      blogId: 9,
      blogTitle: "Blog 9",
      blogAuthor: "John Smith",
      blogPublishedDate: "17/09/2023"
    },
    {
      blogId: 10,
      blogTitle: "Blog 10",
      blogAuthor: "Matthew Robertson",
      blogPublishedDate: "18/09/2023"
    },
    {
      blogId: 11,
      blogTitle: "Blog 11",
      blogAuthor: "Edward Smith",
      blogPublishedDate: "19/09/2023"
    },
    {
      blogId: 12,
      blogTitle: "Blog 12",
      blogAuthor: "Jane Smith",
      blogPublishedDate: "20/09/2023"
    }
  ];
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
      cardBody.appendChild(blogTitle);
      cardBody.appendChild(blogAuthor);
      cardBody.appendChild(blogPublishedDate);
      card.appendChild(cardImage);
      card.appendChild(cardBody);      
      col.appendChild(card);
      document.getElementById("blogs").appendChild(col);
    });
  }

