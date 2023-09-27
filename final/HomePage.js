async function loadMovies() {
    const response = await fetch("https://ghibliapi.vercel.app/films");
    const movies = await response.json();
    const movieContainer = document.getElementById('movie_container');
    movies.forEach(movie => {
        if(movie.description.length > 55){
            movie.description = movie.description.substr(0,55) + "..."
        }
        const card = document.createElement('div');
        card.className = 'col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2';
        card.innerHTML = `
                        <div class="card" style='height :633px;'>
                            <img src="${movie.image}" class="card-img-top" alt="${movie.title} Poster">
                            <div class="card-body">
                                <h5 class="card-title">${movie.title}</h5>
                                <p class="card-text">${movie.original_title}</p>
                                <p class="card-text">${movie.description}</p>
                                <a href="DetailsPage.html?movie_id=${movie.id}" class="btn" style="background-color:#4DAAE9; color: #ffffff;">Read More</a>
                            </div>
                        </div>
                    `;
        movieContainer.appendChild(card);
    })
}

window.onload =loadMovies;