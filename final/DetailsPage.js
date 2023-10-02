async function loadMovieDetails() {
    const response = await fetch(`https://ghibliapi.vercel.app/films/${new URLSearchParams(window.location.search).get('movie_id')}`);
    const movieDetails = await response.json();
    const moviePosterContainer = document.getElementById('poster');
    const poster=document.createElement('img')
    poster.src=movieDetails.image
    poster.alt=`${movieDetails.title} Poster`
    poster.style='max-width: 20%; height: auto; margin: 0 auto;'
    moviePosterContainer.append(poster)
    const movieDetailsContainer = document.getElementById('movie_details_container');
    const element = document.createElement('div');
    element.innerHTML = `
            <div class="row" style="margin-bottom: 32px;">
                <h2>${movieDetails.title}</h2>
            </div>
            <div class="row" style="margin-bottom: 24px;">
                <div class="col-3"><b>Original Name:</b> ${movieDetails.original_title ?? null}</div>
                <div class="col-3"><b>Director:</b> ${movieDetails.director ?? null}</div>
                <div class="col-3"><b>Producer:</b> ${movieDetails.producer ?? null}</div>
                <div class="col-3"><b>Rating Score:</b> ${movieDetails.rt_score ?? null}</div>
            </div>
            <div class="row" style="margin-bottom: 42px;">
                <div class="col-3"><b>Release Date:</b> ${movieDetails.release_date ?? null}</div>
                <div class="col-3"><b>Running Time:</b> ${movieDetails.running_time ?? null} min</div>
            </div>
            <div class="row" style="margin-bottom: 24px;">
                <h4>About The Movie</h4>
            </div>
            <div class="row" style="margin-bottom: 42px;">
                <p>${movieDetails.description ?? null}</p>
            </div>
            <div class="row" style="margin-bottom: 24px;">
                <h4>Characters</h4>
            </div>
                    `;
    if (movieDetails.people && movieDetails.people.length > 0 && movieDetails.people[0] != 'https://ghibliapi.vercel.app/people/') {
        let characterCount = 0;
        let characterRow = ""; 
        const characters = await Promise.all(movieDetails.people.map(async characterUrl => {
            const response = await fetch(characterUrl);
            const characterDetails = await response.json();
            return characterDetails;
          }));
        characters.forEach(character => {
            characterRow += `
                                <div class="col-3">${character.name}</div>
                            `;

            characterCount++; 

            if (characterCount % 4 === 0 || characterCount === movieDetails.people.length) {
                element.innerHTML += `
                                    <div class="row" style="margin-bottom: 24px;">
                                        ${characterRow}
                                    </div>
                                `;

                characterRow = "";
            }
        });
    }
    else{
        element.innerHTML += `<div class="row" style='margin-left:0px'>No Data</div>`;
    }
    movieDetailsContainer.appendChild(element);
}
document.addEventListener("DOMContentLoaded", function() {
    // Get the checkbox element
const checkbox = document.getElementById("flexSwitchCheckDefault");
const outsideText = document.getElementById("outsideText");
const bars = document.querySelectorAll("#bars");
// Add an event listener to detect changes in the checkbox state
checkbox.addEventListener("change", function() {
    // Check if the checkbox is checked
    if (this.checked) {
        bars.forEach(function(bar) {
            bar.style.cssText = "background-color: #4DAAE9 !important;";
        });
        outsideText.style.color = "white"
        document.body.style.backgroundColor = "#302F30";
    } else {
        // Set the background color to white
        bars.forEach(function(bar) {
            bar.style.cssText = "background-color: white !important;";
        });
        outsideText.style.color = "black"
        document.body.style.backgroundColor = "white";
    }
});
});



window.onload = loadMovieDetails;

