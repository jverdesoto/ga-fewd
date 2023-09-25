import { myAuthors } from "./authorsData";
export default class Authors {
    constructor() {       
        function populateAuthorsTable(authorData) {
        const authorsTable = document.getElementById("blogAuthorsTableBody")
        if (JSON.stringify(authorsTable) != null) {
        for (const author of authorData) {      
          const row = document.createElement("tr");      
          const authorsCell = document.createElement("td");
          authorsCell.textContent = author.blogAuthorName;    
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

