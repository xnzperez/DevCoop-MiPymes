import { useRoutes } from "react-router-dom";
import { Home } from "../Pages/Home";
import { MyAccount } from "../Pages/MyAccount";
import { MyOrder } from "../Pages/MyOrder";
import { MyOrders } from "../Pages/MyOrders";
import { SignIn } from "../Pages/SignIn/SignIn";
import AboutComponent from "../Pages/About/AboutComponent";

import { useContext } from "react";
import { ShoppingCartContext } from "../context";

export const AppRoutes = () => {
  const context = useContext(ShoppingCartContext);
  let routes = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    { path: "/:category", element: <Home /> },
    {
      path: "/my-account",
      element: context.signOut ? <SignIn /> : <MyAccount />,
    },
    {
      path: "/my-order",
      element: context.signOut ? <SignIn /> : <MyOrder />,
    },
    {
      path: "/my-orders",
      element: context.signOut ? <SignIn /> : <MyOrders />,
    },
    {
      path: "/my-orders/last",
      element: context.signOut ? <SignIn /> : <MyOrder />,
    },
    {
      path: "/my-orders/:id",
      element: context.signOut ? <SignIn /> : <MyOrder />,
    },
    {
      path: "/sign-in",
      element: <SignIn />,
    },
    {
      path: "/about", 
      element: <AboutComponent />,
    },
  ]);
  return routes;
};
