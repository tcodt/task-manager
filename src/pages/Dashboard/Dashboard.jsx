import { useEffect, useState } from "react";
// import { UsernameContext } from "../../contexts/Contexts";
import moment from "moment-jalaali";
import { BiSolidBell } from "react-icons/bi";
import goodDayTextData from "../../data/goodDayTextData";

import { SwiperSlide, Swiper } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";

import "./Dashboard.css";
import { PiCheckCircleDuotone, PiCircleDuotone } from "react-icons/pi";
import { useSelector } from "react-redux";
import Menu from "../../components/Menu/Menu";
import priorityTasks from "../../data/priorityTasks";
import dailyTasks from "../../data/dailyTasks";
import { Link } from "react-router-dom";

export default function Dashboard() {
  // const { username } = useContext(UsernameContext);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [persianDate, setPersianDate] = useState("");
  const [persianDay, setPersianDay] = useState("");
  const [persianTime, setPersianTime] = useState("");
  const [priorityTask, setPriorityTask] = useState(priorityTasks);
  const [dailyTask, setDailyTask] = useState(dailyTasks);
  const [isChecked, setIsChecked] = useState(null);

  const username = useSelector((state) => state.username.value);

  const toggleTaskHandler = (taskID) => {
    const clickedTask = dailyTask.find((t) => t.id === taskID);
    clickedTask.checked = !clickedTask.checked;
    setIsChecked(true);
  };

  const persianDayNames = [
    "یکشنبه",
    "دوشنبه",
    "سه‌شنبه",
    "چهارشنبه",
    "پنجشنبه",
    "جمعه",
    "شنبه",
  ];

  useEffect(() => {
    setCurrentTextIndex((prevText) => (prevText + 1) % goodDayTextData.length);

    const interval = setInterval(() => {
      const currentTime = new Date();

      // Convert the current date to a Persian date
      const formattedPersianDate = moment(currentTime)
        .locale("fa")
        .format("jYYYY/jM/jD");
      setPersianDate(formattedPersianDate);

      // Get the Persian day name
      const dayIndex = currentTime.getDay();
      const persianDayName = persianDayNames[dayIndex];
      setPersianDay(persianDayName);

      // Get the Persian time
      const formattedPersianTime = moment(currentTime).format("HH:mm:ss");
      setPersianTime(formattedPersianTime);
    }, 1000);

    // Clean up the interval when the component is unmounted
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col justify-between gap-4 h-screen p-4">
      <div className="flex justify-between items-center">
        <div>
          <BiSolidBell className="text-3xl text-sky-500 cursor-pointer" />
        </div>
        <div>
          <span className="text-sm text-gray-500">
            {persianDate} - {persianDay} - {persianTime}
          </span>
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
      <div className="flex flex-col gap-4">
        <h4 className="text-gray-800 text-lg font-semibold">
          وظیفه های در الویت
        </h4>
        <div>
          <Swiper
            slidesPerView={2}
            spaceBetween={15}
            freeMode={true}
            modules={[FreeMode]}
            className="mySwiper"
          >
            {priorityTask.map((task) => (
              <SwiperSlide key={task.id}>
                <Link
                  to="/"
                  className={`bg-sky-500 rounded-xl p-2 flex flex-col gap-8`}
                  id="slider_bg"
                >
                  <div className="bg-white p-1 rounded-xl w-2/4">
                    <span className="text-xs text-grau-700">
                      {task.timeToFinish} روز
                    </span>
                  </div>
                  <div>
                    <h5 className="text-base text-white">{task.title}</h5>
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-white text-xs">پیشرفت</p>
                    <div className="bg-gray-800 bg-opacity-45 rounded-full h-2 w-full relative">
                      <div
                        className={`absolute top-0 bg-slate-100 h-2 rounded-full`}
                        style={{ width: `${task.progress}%` }}
                      ></div>
                    </div>
                    <span className="text-white text-xs w-full text-end">
                      %{task.progress}
                    </span>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div>
        <h4 className="text-gray-800 text-lg font-semibold">وظایف روزانه</h4>
        <ul className="flex flex-col gap-2 mt-4">
          {dailyTask.map((task) => (
            <li
              key={task.id}
              className="flex items-center justify-between hover:bg-slate-300 transition p-2 rounded-xl cursor-pointer"
              onClick={() => toggleTaskHandler(task.id)}
            >
              <p className="text-base text-gray-700">{task.title}</p>

              {isChecked && task.checked ? (
                <PiCheckCircleDuotone className="text-2xl text-sky-500" />
              ) : (
                <PiCircleDuotone className="text-2xl text-red-500" />
              )}
            </li>
          ))}
        </ul>
      </div>
      <Menu />
    </div>
  );
}
