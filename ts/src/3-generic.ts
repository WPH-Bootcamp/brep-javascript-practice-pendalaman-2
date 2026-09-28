function identity<T>(value: T): T {
  return value;
}

const nama = identity<string>('Budi');
const umur = identity(20);

console.log(nama, umur);

// Contoh Generic Response API
type ApiResponse<T> =
  | {
      status: 'success';
      message: string;
      data: T;
    }
  | { status: 'error'; message: string };

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

async function fetchJsonAPI<T>(url: string): Promise<T | unknown> {
  const response = await fetch(url);

  return response.json();
}

const posts = await fetchJsonAPI<Post[]>(
  'https://jsonplaceholder.typicode.com/posts'
);
console.log(posts);
