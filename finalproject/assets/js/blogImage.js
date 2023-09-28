export default async function fetchBlogImage() {
    const result = fetch("https://picsum.photos/v2/list")
    .then((response) => response.json())
    .then((obj) => obj.json());
    return result
}

