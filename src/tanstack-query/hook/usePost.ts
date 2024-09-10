import axios from "axios";
import { useQuery } from "@tanstack/react-query";

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

const usePost = (userId : number | undefined) =>{
  const fetchDatas = () =>
    axios.get<Post[]>("https://jsonplaceholder.typicode.com/posts" , {
      params: {
        userId
      }
    }).then((res) => res.data);

  return useQuery<Post[], Error>({
    queryKey: userId? ['users',userId,'posts'] : ['posts'],
    queryFn: fetchDatas,
    retry: 3,
    cacheTime: 300_000, // 5 minutes
    staleTime: 10 * 1000, // 10 seconds
  });
};

export default usePost;
