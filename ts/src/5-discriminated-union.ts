interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

type PostsState =
  | { status: 'loading' }
  | { status: 'error'; message: string }
  | { status: 'success'; data: Post[] };

function renderPosts(state: PostsState) {
  if (state.status === 'loading') {
    return 'Loading...';
  }

  if (state.status === 'error') {
    return state.message;
  }

  return state.data;
}
