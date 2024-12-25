import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignIn from "../pages/SignIn";
import Home from "../pages/Home"

const router = createBrowserRouter([
    { path: "/", element: <Home /> },

  { path: "/signin", element: <SignIn /> }
]);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
