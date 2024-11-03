import { useParams, useSearchParams } from "react-router-dom";

const UserDetailPage = () => {

  const params = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(params);

  return <p>User</p>;
};

export default UserDetailPage;
