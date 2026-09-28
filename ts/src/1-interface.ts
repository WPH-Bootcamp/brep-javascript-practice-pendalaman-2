interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

async function fetchPosts(): Promise<Post[] | unknown> {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');

  if (!response.ok) {
    throw new Error(`Faild to fetch posts: ${response.status}`);
  }

  const data: Post[] | unknown = await response.json();
  return data;
}

fetchPosts()
  .then((data) => console.log(data))
  .catch((error) => console.error(error.message));
