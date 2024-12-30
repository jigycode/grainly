import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router";
// import Navbar from "./assets/component/Home";
import Login from "./pages/Login";

function App() {
  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
