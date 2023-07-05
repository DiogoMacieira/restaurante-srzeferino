import App from "../App";
import Home from "../components/Home";
import Menus from "../components/Menus";
import Reservas from "../components/Reservas";
import Empregados from "../components/Empregados";
import Form from "../components/formmenu";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        {
          index: true,
          element: <Home />,
        },
         {
           path: "/Menus",
          element: <Menus />,
        },
         { path: "/Reservas", element: <Reservas /> },
         { path: "/Empregados", element: <Empregados /> },
         { path: "/formmenu", element: <Form /> },
      ],
    },
  ],
);
