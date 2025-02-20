import { RouteObject, useRoutes } from "react-router-dom";
import * as Pages from "../pages/index";

import BaseLayout from "./layouts/BaseLayout";

import LocalStorage from "../local-storage";
import PCLayout from "./layouts/PCLayout";
import tokens from "../tokens";

function AllRoutes() {
  // const { isLoggedIn } = useAppSelector((st) => st.auth.session);
  const { accessToken } = tokens;
  const isLoggedIn = !!accessToken;
  const path = window.location.pathname;
  const loginRoutes: RouteObject[] = [
    {
      element: <BaseLayout />,
      children: [
        {
          path: "/",
          element: <Pages.HomePage />,
        },
        {
          path: "/cars",
          element: <Pages.CarPage />,
        },
        {
          path: "/pricing",
          element: <Pages.PricingPage />,
        },
        {
          path: "/my",
          element: <Pages.LoginPage />,
        },
        {
          path: "/signup",
          element: <Pages.JoinPage />,
        },
        {
          path: "/login",
          element: <Pages.LoginPage />,
        },
        {
          path: "/calendar",
          element: <Pages.CalendarPage />,
        },
        {
          path: "/privacy",
          element: <Pages.PrivacyPage />,
        },
        {
          path: "/terms",
          element: <Pages.TermsPage />,
        },
        {
          path: "/*",
          element: <Pages.HomePage />,
        },
      ],
    },
  ];

  const Routes: RouteObject[] = [
    {
      element: path.includes("/admin") ? <PCLayout /> : <BaseLayout />,
      children: [
        {
          path: "/",
          element: <Pages.HomePage />,
        },
        {
          path: "/cars",
          element: <Pages.CarPage />,
        },
        {
          path: "/pricing",
          element: <Pages.PricingPage />,
        },
        {
          path: "/my",
          element: <Pages.MyPage />,
        },
        {
          path: "/signup",
          element: <Pages.JoinPage />,
        },
        {
          path: "/login",
          element: <Pages.LoginPage />,
        },
        {
          path: "/calendar",
          element: <Pages.CalendarPage />,
        },
        {
          path: "/admin",
          element: <Pages.AdminHomePage />,
        },
        {
          path: "/admin/user",
          element: <Pages.AdminHomePage />,
        },
        {
          path: "/reservation/:step",
          element: <Pages.ReservationPage />,
        },
        {
          path: "/terms",
          element: <Pages.TermsPage />,
        },
        {
          path: "/privacy",
          element: <Pages.PrivacyPage />,
        },
        {
          path: "/schedule-operation",
          element: <Pages.ScheduleOperationPage />,
        },
        {
          path: "/*",
          element: <Pages.HomePage />,
        },
      ],
    },
  ];

  return useRoutes(isLoggedIn ? Routes : loginRoutes);
}

export default AllRoutes;
