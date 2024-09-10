import axios from "axios";
import { useQuery } from "@tanstack/react-query";

interface FetchResponse<T> {
  results: T[];
}

const useData = <T>(endPoint: string, key: string , id: number | undefined) => {
  const fetchDatas = () =>
    axios.get<FetchResponse<T>>(endPoint , {
      params: {
        id
      }
    }).then((res) => res.data);

  return useQuery<FetchResponse<T>, Error>({
    queryKey: id? ['users',id,key] : [key],
    queryFn: fetchDatas,
    retry: 3,
    cacheTime: 300_000, // 5 minutes
    staleTime: 10 * 1000, // 10 seconds
  });
};

export default useData;
