import { useNavigate, useRoutes } from "react-router-dom";
import routes from "./routes";
import "./App.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUsername } from "./features/username/usernameSlice";

export default function App() {
  const route = useRoutes(routes);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    const localStorageData = JSON.parse(localStorage.getItem("username"));

    if (localStorageData) {
      dispatch(getUsername(localStorageData));
      navigate("/dashboard");
    }
  }, [dispatch, navigate]);

  return <>{route}</>;
}
