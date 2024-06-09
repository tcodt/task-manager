import { useRoutes } from "react-router-dom";
import routes from "./routes";
import UsernameContext from "./contexts/UsernameContext";
import "./App.css";
import { useState } from "react";

export default function App() {
  const route = useRoutes(routes);
  const [username, setUsername] = useState("");

  return (
    <>
      <UsernameContext.Provider value={{ username, setUsername }}>
        {route}
      </UsernameContext.Provider>
    </>
  );
}
