import { createBrowserRouter } from "react-router-dom";
import App from './App/App.jsx'

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
//   {
//     path: "profile",
//     element: <Profile />,
//   },
]);

export default Router