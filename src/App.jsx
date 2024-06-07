import { useRoutes } from "react-router-dom";
import routes from "./routes";
import "./App.css";

export default function App() {
  const route = useRoutes(routes);

  return <>{route}</>;
}
