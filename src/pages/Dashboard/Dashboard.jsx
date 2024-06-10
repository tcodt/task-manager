import { useContext, useEffect, useState } from "react";
import UsernameContext from "../../contexts/UsernameContext";
import moment from "moment-jalaali";
import { BiSolidBell } from "react-icons/bi";
import goodDayTextData from "../../data/goodDayTextData";

export default function Dashboard() {
  const { username } = useContext(UsernameContext);
  const [persianDate, setPersianDate] = useState("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    updatePersianDate();
    const interval = setInterval(() => {
      setCurrentTextIndex(
        (prevIndex) => (prevIndex + 1) % goodDayTextData.length
      );
    }, 24 * 60 * 60 * 1000); // 24 hours in milliseconds

    return () => clearInterval(interval);
  }, []);

  const updatePersianDate = () => {
    const currentDate = moment().locale("fa");
    const persianYear = currentDate.format("jYYYY");
    const persianMonth = currentDate.format("jMM");
    const persianDay = currentDate.format("jDD");
    const persianDayName = currentDate.format("dddd");

    const formattedDate = `${persianYear}/${persianMonth}/${persianDay} - (${persianDayName})`;
    setPersianDate(formattedDate);
  };

  return (
    <div className="flex flex-col justify-between h-screen p-4">
      <div className="flex justify-between items-center">
        <div>
          <BiSolidBell className="text-3xl text-sky-500 cursor-pointer" />
        </div>
        <div>
          <span className="text-sm text-gray-500">{persianDate}</span>
        </div>
      </div>
      <div>
        <h2 className="text-xl text-neutral-900 font-bold">
          {username} عزیز خوش آمدید
        </h2>
        <p className="text-sm text-neutral-500 mt-1">
          {goodDayTextData[currentTextIndex]}
        </p>
      </div>
      <div>Tasks</div>
      <div>Daily Tasks</div>
    </div>
  );
}
