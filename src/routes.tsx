import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import SignIn from "./pages/sign-in";
import AppLayout from "./pages/_layouts/app";
import AuthLayout from "./pages/_layouts/auth";
import SignUp from "./pages/sign-up";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [{ path: "/", element: <Dashboard /> }],
  },
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      { path: "/sign-in", element: <SignIn /> },
      { path: "/sign-up", element: <SignUp /> },
    ],
  },
]);
