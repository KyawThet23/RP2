import { useParams } from "react-router-dom";

const UserDetailPage = () => {

  const params = useParams();
  console.log(params)
  return <p>User</p>;
};

export default UserDetailPage;
