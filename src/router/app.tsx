import { Outlet } from "react-router";
import { AppLayout, ProfileLayout } from "../components/layout";
// import { ProtectedRoute } from "../components/auth/ProtectedRoute";
import { 
  Home, 
  Contact, 
  About, 
} from "../pages";
import { Orders, Profile } from "../pages/index";

const appRouter = [
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about-us",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        element: <Outlet />,
        children: [
          {
            path: "account",
            element: <ProfileLayout />,
            children: [
              {
                index: true,
                element: <Profile />,
              },
              {
                path: "orders",
                element: <Orders/>,
              },
              {
                path: "addresses",
                element: <></>,
              },
              {
                path: "favorites",
                element: <></>,
              },
            ],
          },
        ],
      },
      {
        path: "*",
        element: <div>404 Not Found</div>,
      },
    ],
  },
];

export default appRouter;
