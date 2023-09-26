import { myAuthors } from "./authorsData";
export default class Authors {
    constructor() {       
        function populateAuthorsTable(authorData) {
        const authorsTable = document.getElementById("blogAuthorsTableBody")
        if (JSON.stringify(authorsTable) != null) {
        for (const author of authorData) {      
          const row = document.createElement("tr");      
          // const authorsCell = document.createElement("td");
          // authorsCell.textContent = author.blogAuthorName;
          const authorsCell = document.createElement("td");
          const authorsLink = document.createElement("a");
          authorsLink.href = `authorDetails.html?blogAuthorId=${author.blogAuthorId}`;
          authorsLink.textContent = author.blogAuthorName;
          authorsLink.classList.add("link-primary");
          authorsLink.classList.add("link-underline-opacity-0");   
          authorsCell.appendChild(authorsLink);
          const genderCell = document.createElement("td");
          genderCell.textContent = author.blogAuthorGender;      
          row.appendChild(authorsCell);
          row.appendChild(genderCell);      
          authorsTable.appendChild(row);
        }
        }
        }
        
        populateAuthorsTable(myAuthors);
    }
}

