import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Explore from "./pages/Explore";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import AppLayout from "./ui/AppLayout";
import GlobalStyles from "./styles/GlobalStyles";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/profile", element: <Profile /> },
      { path: "/explore", element: <Explore /> },
    ],
  },
]);

function App() {
  return (
    <>
      <GlobalStyles />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
