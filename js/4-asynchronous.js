const janji = new Promise((resolve, reject) => {
  const success = false;

  setTimeout(() => {
    if (success) {
      resolve('Data berhasil');
    } else {
      reject('Data gagal');
    }
  }, 3000);
});

janji.then((data) => console.log(data)).catch((error) => console.error(error));

const BASE_URL = 'https://jsonplaceholder.typicode.com/posts/1';

fetch(BASE_URL)
  .then((respose) => {
    if (!respose.ok) {
      throw new Error(`Data error : ${respose.status}`);
    }
    return respose.json();
  })
  .then((data) => console.log(data))
  .catch((error) => console.error(error));

async function fetchPost() {
  try {
    const response = await fetch(BASE_URL);

    if (!response.ok) {
      throw new Error(`Data gagal di fetch : ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error.message);
  }
}
fetchPost();
