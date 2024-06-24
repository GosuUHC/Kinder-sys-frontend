import { Suspense, lazy } from "react";
import { useRoutes } from "react-router-dom";
import { PATH } from "./consts";

const LoginPage = lazy(() =>
  import("./view/pages/login/Login").then((comp) => comp),
);

const MainPage = lazy(() =>
  import("./view/pages/main/MainPage").then((comp) => comp),
);

const AnalyticsPage = lazy(() =>
  import("./view/pages/analytics/AnalyticsPage").then((comp) => comp),
);

const Router = () => {
  return useRoutes([
    {
      element: (
        <Suspense>
          <LoginPage />
        </Suspense>
      ),
      path: PATH.auth,
    },
    {
      element: (
        <Suspense>
          <MainPage />
        </Suspense>
      ),
      path: PATH.main,
    },
    {
      element: (
        <Suspense>
          <AnalyticsPage />
        </Suspense>
      ),
      path: PATH.analytics,
    },
  ]);
};

export default Router;
