var myAuthors = [
    {
        blogAuthorId: 1,
        blogAuthor: "John Smith",
        blogAuthorGender: "Male",
        blogAuthorImage: "johnsmith.jpg"
    },
    {
        blogAuthorId: 2,
        blogAuthor: "Matthew Robertson",
        blogAuthorGender: "Male",
        blogAuthorImage: "matthewrobertson.jpg"
    },
    {
        blogAuthorId: 3,
        blogAuthor: "Edward Smith",
        blogAuthorGender: "Male",
        blogAuthorImage: "edwardsmith.jpg"
    },
    {
        blogAuthorId: 4,
        blogAuthor: "Jane Smith",
        blogAuthorGender: "Female",
        blogAuthorImage: "janesmith.jpg"
    },
];
const tbody = document.getElementById("blogAuthorsTableBody")
for (const author of myAuthors) {      
  const row = document.createElement("tr");      
  const authorsCell = document.createElement("td");
  authorsCell.textContent = author.blogAuthor;    
  const genderCell = document.createElement("td");
  genderCell.textContent = author.blogAuthorGender;      
  row.appendChild(authorsCell);
  row.appendChild(genderCell);      
  tbody.appendChild(row);
};
