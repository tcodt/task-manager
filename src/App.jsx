import { useNavigate, useRoutes } from "react-router-dom";
import routes from "./routes";
import { UserTasks, UsernameContext } from "./contexts/Contexts";
import "./App.css";
import { useEffect, useState } from "react";

export default function App() {
  const route = useRoutes(routes);
  const [username, setUsername] = useState("");
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "مطالعه",
      timeToFinish: 12,
      progress: 70,
    },
    {
      id: 2,
      title: "ورزش",
      timeToFinish: 20,
      progress: 50,
    },
    {
      id: 3,
      title: "کدنویسی",
      timeToFinish: 10,
      progress: 20,
    },
  ]);
  const navigate = useNavigate();

  useEffect(() => {
    const localStorageData = JSON.parse(localStorage.getItem("username"));

    if (localStorageData) {
      setUsername(localStorageData);
      navigate("/dashboard");
    } else navigate("/register_user");
  }, [navigate]);

  return (
    <>
      <UserTasks.Provider value={{ tasks, setTasks }}>
        <UsernameContext.Provider value={{ username, setUsername }}>
          {route}
        </UsernameContext.Provider>
      </UserTasks.Provider>
    </>
  );
}
