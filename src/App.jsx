import { createBrowserRouter, RouterProvider } from "react-router";
// import Navbar from "./assets/component/Home";
import Login from "./pages/Login";
import Home from "./pages/Home";

function App() {
  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/",
      element: <Home />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
