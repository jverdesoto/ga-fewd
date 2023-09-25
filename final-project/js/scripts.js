
async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Pageload
fetchData().then((data) => {
    generateCards(data);
});


// Function to generate card for homepage
function generateCards(posts) {
    const mainContainer = document.querySelector('.main-container');

    posts.slice(0, 5).forEach(async (post, index) => {
        const card = document.createElement('div');
        card.classList.add('card');
        index = index + 1;

        // Check if postIndex is 0
        if (index === 1) {
            console.error('Invalid post index');
            return; // Exit the loop if postIndex is 0
        }

        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/photos/${index}`);
            const photo = await response.json();

            card.innerHTML = `
                <img src="${photo.url}" alt="Card Image">
                <h3>${post.title}</h3>
                <p>${post.body}</p>
                <a href="content.html?postIndex=${index}"><button class="see-more-btn" data-index="${index}">See More</button></a>
            `;

            mainContainer.appendChild(card);
        } catch (error) {
            console.error('Error fetching image:', error);
        }
    });
}

// Event listener for "See More" buttons
document.addEventListener('click', (event) => {
    if (event.target.classList.contains('see-more-btn')) {
        const index = event.target.getAttribute('data-index');
        window.location.href = `content.html?postIndex=${index}`;
    }
});


// Function to fetch and generate card content in content.html
async function generateContent() {
    // Get the post index from the query parameter
    const params = new URLSearchParams(window.location.search);
    let postIndex = params.get('postIndex');
    postIndex = parseInt(postIndex) - 1;

    try {
        // Fetch the list of posts
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const postData = await response.json();

        if (postIndex !== null) {
            // Load content based on the specified post index
            if (postIndex >= 0 && postIndex < postData.length) {
                const post = postData[postIndex];
                const cardContainer = document.getElementById('card-container');

                // Fetch the image associated with the post index
                const imageResponse = await fetch(`https://jsonplaceholder.typicode.com/photos/${postIndex}`);
                const image = await imageResponse.json();

                const card = document.createElement('div');
                card.classList.add('card');

                card.innerHTML = `
                    <h3>${post.title}</h3>
                    <p>${post.body}</p>
                    <img src="${image.url}" alt="Post Image">
                    <button class="see-more-btn" data-index="${postIndex}">See More</button>
                `;

                cardContainer.appendChild(card);
            } else {
                console.error('Invalid post index');
            }
        } else {
            // Generate a random post index if not specified
            const randomIndex = getRandomPostIndex(postData.length);
            const randomPost = postData[randomIndex];
            const cardContainer = document.getElementById('card-container');

            // Fetch the image associated with the random post index
            const randomImageResponse = await fetch(`https://jsonplaceholder.typicode.com/photos/${randomIndex + 1}`);
            const randomImage = await randomImageResponse.json();

            const card = document.createElement('div');
            card.classList.add('card');

            card.innerHTML = `
                <h3>${randomPost.title}</h3>
                <p>${randomPost.body}</p>
                <img src="${randomImage.url}" alt="Post Image">
                <button class="see-more-btn" data-index="${randomIndex}">See More</button>
            `;

            cardContainer.appendChild(card);
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Call the generateContent function when the page loads
generateContent();



// Dark Mode
function invertColors() {
    const allElements = document.querySelectorAll('*');

    allElements.forEach((element) => {
        const bgColor = window.getComputedStyle(element).backgroundColor;
        const textColor = window.getComputedStyle(element).color;

        // Check if the background color and text color are not transparent
        if (bgColor !== 'rgba(0, 0, 0, 0)' && textColor !== 'rgba(0, 0, 0, 0)') {
            element.style.backgroundColor = textColor;
            element.style.color = bgColor;
        }
    });
}

// Event listener for Button 1
document.querySelector('#footer-button1').addEventListener('click', invertColors);

//Rotation

let isRotated = false; // Initial rotation state

// Function to toggle the rotation of elements by 180 degrees
function toggleRotation() {
    const allElements = document.querySelectorAll('*');

    allElements.forEach((element) => {
        if (isRotated) {
            element.style.transform = 'none';
        } else {
            element.style.transform = 'rotate(180deg)';
        }
    });

    isRotated = !isRotated;
}

document.querySelector('#footer-button2').addEventListener('click', toggleRotation);

// Event listener for "Sign Up" button
const signUpBtn = document.querySelector('.signup-btn');
signUpBtn.addEventListener('click', () => {
    // Load sign-up form (assuming you have a signup.html file)
    fetch(`signup.html`)
        .then((response) => response.text())
        .then((html) => {
            // Replace the entire body with the sign-up form
            document.body.innerHTML = html;
        })
        .catch((error) => {
            console.error('Error loading sign-up form:', error);
        });
});
