import axios from "axios";

const axiosInstant = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

class APIClinet<T> {
  endPoint: string;

  constructor(endPoint: string) {
    this.endPoint = endPoint;
  }

  getAll = () => {
    return axiosInstant.get<T[]>(this.endPoint).then((res) => res.data);
  }

  post = (data: T) => {
    return axiosInstant.post<T>(this.endPoint, data).then((res) => res.data);
  }
}

export default APIClinet;
