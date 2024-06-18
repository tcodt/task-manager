import Index from "./pages/Index/Index";
import GetStartedExplain from "./pages/GetStartedExplain/GetStartedExplain";
import GetUserName from "./pages/GetUserName/GetUserName";
import Dashboard from "./pages/Dashboard/Dashboard";
import PriorityTaskPage from "./pages/PriorityTaskPage/PriorityTaskPage";

const routes = [
  { path: "/", element: <Index /> },
  { path: "/start_explain", element: <GetStartedExplain /> },
  { path: "/register_user", element: <GetUserName /> },
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/priority_task", element: <PriorityTaskPage /> },
];

export default routes;
