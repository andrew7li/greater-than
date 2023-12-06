import "./App.scss";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import FocusView from "./components/FocusView";
import Home from "./components/Home";

function App() {
  const BrowserRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/buy",
      element: <FocusView />,
    },
    {
      path: "*",
      element: <h1>404 - Not Found</h1>,
    },
  ]);

  return <RouterProvider router={BrowserRouter} />;
}

export default App;
