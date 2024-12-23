import { createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import UserDetail from "./UserDetail";
import Layout from "./Layout";
import UserPage from "./UserPage";
import ErrorPage from "./ErrorPage";
import LoginPage from "./LoginPage";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement : <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'login' , element: <LoginPage /> },
    ],
  },
  {
    element: <PrivateRoute />,
    children: [
      {
        path: "users",
        element: <UserPage />,
        children: [{ path: ":id", element: <UserDetail /> }],
      },
    ]
  }
]);

export default router;
