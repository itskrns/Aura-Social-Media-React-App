import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Explore from "./pages/Explore";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import AppLayout from "./ui/AppLayout";
import GlobalStyles from "./styles/GlobalStyles";
import AuthPage from "./ui/AuthPage";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/profile", element: <Profile /> },
      { path: "/explore", element: <Explore /> },
    ],
  },
  { path: "/authPage", element: <AuthPage /> },
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
