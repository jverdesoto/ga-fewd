// ---------------------- FETCHING DATA ----------------------

async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        return response.json();
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
}

async function fetchImage(index) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/photos/${index}`);
        return response.json();
    } catch (error) {
        console.error('Error fetching image:', error);
        return null;
    }
}

// ---------------------- DOM ----------------------

function generateCardHTML(post, image, isContentPage) {
    return `
        <h3>${post.title}</h3>
        <p>${post.body}</p>
        <img src="${image.url}" alt="Post Image">
        ${isContentPage ? '' : `<button class="see-more-btn" data-index="${post.id}">See More</button>`}
    `;
}

function generateCards(posts) {
    const mainContainer = document.querySelector('.main-container');
    posts.slice(0, 5).forEach(async (post) => {
        const card = document.createElement('div');
        card.classList.add('card');

        if (post.id === 1) {
            console.error('Invalid post index');
            return;
        }

        const image = await fetchImage(post.id);
        card.innerHTML = generateCardHTML(post, image, false);
        mainContainer.appendChild(card);
    });
}

async function generateContent() {
    const params = new URLSearchParams(window.location.search);
    const isContentPage = window.location.pathname.includes('content.html');
    let postIndex = params.get('postIndex');

    const postData = await fetchData();

    if (postIndex !== null) {
        postIndex = parseInt(postIndex) - 1;
        if (postIndex >= 0 && postIndex < postData.length) {
            const post = postData[postIndex];
            const image = await fetchImage(post.id + 1);
            const cardContainer = document.getElementById('card-container');

            const card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = generateCardHTML(post, image, isContentPage);
            cardContainer.appendChild(card);
        } else {
            console.error('Invalid post index');
        }
    }
}

// ---------------------- EVENT HANDLERS ----------------------

function handleSeeMoreClick(event) {
    if (event.target.classList.contains('see-more-btn')) {
        const index = event.target.getAttribute('data-index');
        window.location.href = `content.html?postIndex=${index}`;
    }
}

function invertColors() {
    const allElements = document.querySelectorAll('*');

    allElements.forEach((element) => {
        const bgColor = window.getComputedStyle(element).backgroundColor;
        const textColor = window.getComputedStyle(element).color;

        if (bgColor !== 'rgba(0, 0, 0, 0)' && textColor !== 'rgba(0, 0, 0, 0)') {
            element.style.backgroundColor = textColor;
            element.style.color = bgColor;
        }
    });
}

let isRotated = false;
function toggleRotation() {
    const allElements = document.querySelectorAll('*');
    allElements.forEach((element) => {
        element.style.transform = isRotated ? 'none' : 'rotate(180deg)';
    });
    isRotated = !isRotated;
}

function loadSignUpForm() {
    fetch(`signup.html`)
        .then((response) => response.text())
        .then((html) => {
            document.body.innerHTML = html;
        })
        .catch((error) => {
            console.error('Error loading sign-up form:', error);
        });
}


document.addEventListener('click', handleSeeMoreClick);
document.querySelector('#footer-button1').addEventListener('click', invertColors);
document.querySelector('#footer-button2').addEventListener('click', toggleRotation);

const signUpBtn = document.querySelector('.signup-btn');
if (signUpBtn) {
    signUpBtn.addEventListener('click', loadSignUpForm);
}

// On page load
fetchData().then(generateCards);
generateContent();

