export default function fetchBlogImage() {
    return fetch("https://picsum.photos/v2/list")
    .then(response => response.json())
    .then(obj => obj);
}

