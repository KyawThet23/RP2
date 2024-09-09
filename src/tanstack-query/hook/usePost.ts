import useData from "./useData";

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

const usePost = () =>
  useData<Post[]>("https://jsonplaceholder.typicode.com/posts", "posts");

export default usePost;
