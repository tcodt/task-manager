import { useContext } from "react";
import UsernameContext from "../../contexts/UsernameContext";

export default function Dashboard() {
  const { username } = useContext(UsernameContext);

  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        <h1 className="font-semibold">{username} عزیز</h1>
        <p>بزودی بخش های جدید اضافه خواهند شد</p>
      </div>
    </div>
  );
}
