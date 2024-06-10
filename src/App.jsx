import { useNavigate, useRoutes } from "react-router-dom";
import routes from "./routes";
import UsernameContext from "./contexts/UsernameContext";
import "./App.css";
import { useEffect, useState } from "react";

export default function App() {
  const route = useRoutes(routes);
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const localStorageData = JSON.parse(localStorage.getItem("username"));

    if (localStorageData) setUsername(localStorageData);
    else navigate("/register_user");
  }, [navigate]);

  return (
    <>
      <UsernameContext.Provider value={{ username, setUsername }}>
        {route}
      </UsernameContext.Provider>
    </>
  );
}
