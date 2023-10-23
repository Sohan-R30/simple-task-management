import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layout/Home/HomeLayout";
import LoginLayout from "../layout/LoginLayout/LoginLayout";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import CreateTask from "../pages/AddTask/CreateTask";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: (
      <div className="flex justify-center items-center h-screen text-5xl text-red-600">
        <p>Error</p>
      </div>
    ),
    children: [
      {
        path: "/create-task",
        element: <CreateTask />,
      },
    ],
  },

  {
    path: "/login",
    element: <LoginLayout />,
    errorElement: (
      <div className="flex justify-center items-center h-screen text-5xl text-red-600">
        <p>Error</p>
      </div>
    ),
    children: [
      {
        path: "",
        element: <Login />,
      },
      {
        path: "registration",
        element: <Registration />,
      },
    ],
  },
]);

export default router;
