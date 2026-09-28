async function fetchPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!response.ok) {
        throw new Error(`Faild to fetch posts: ${response.status}`);
    }
    const data = await response.json();
    return data;
}
fetchPosts()
    .then((data) => console.log(data))
    .catch((error) => console.error(error.message));
export {};
//# sourceMappingURL=1-interface.js.map