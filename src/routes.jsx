import Index from "./pages/Index/Index";
import GetStartedExplain from "./pages/GetStartedExplain/GetStartedExplain";
import GetUserName from "./pages/GetUserName/GetUserName";

const routes = [
  { path: "/", element: <Index /> },
  { path: "/start_explain", element: <GetStartedExplain /> },
  { path: "/register_user", element: <GetUserName /> },
];

export default routes;
