import Index from "./pages/Index/Index";
import GetStartedExplain from "./pages/GetStartedExplain/GetStartedExplain";
import GetUserName from "./pages/GetUserName/GetUserName";
import Dashboard from "./pages/Dashboard/Dashboard";

const routes = [
  { path: "/", element: <Index /> },
  { path: "/start_explain", element: <GetStartedExplain /> },
  { path: "/register_user", element: <GetUserName /> },
  { path: "/dashboard", element: <Dashboard /> },
];

export default routes;
