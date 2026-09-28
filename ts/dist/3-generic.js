function identity(value) {
    return value;
}
const nama = identity('Budi');
const umur = identity(20);
console.log(nama, umur);
async function fetchJsonAPI(url) {
    const response = await fetch(url);
    return response.json();
}
const posts = await fetchJsonAPI('https://jsonplaceholder.typicode.com/posts');
console.log(posts);
export {};
//# sourceMappingURL=3-generic.js.map