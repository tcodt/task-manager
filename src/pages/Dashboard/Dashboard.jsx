import { useContext, useEffect, useState } from "react";
import { UserTasks, UsernameContext } from "../../contexts/Contexts";
import moment from "moment-jalaali";
import { BiSolidBell } from "react-icons/bi";
import goodDayTextData from "../../data/goodDayTextData";

import { SwiperSlide, Swiper } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";

import "./Dashboard.css";

export default function Dashboard() {
  const { username } = useContext(UsernameContext);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [persianDate, setPersianDate] = useState("");
  const [persianDay, setPersianDay] = useState("");
  const [persianTime, setPersianTime] = useState("");

  const persianDayNames = [
    "یکشنبه",
    "دوشنبه",
    "سه‌شنبه",
    "چهارشنبه",
    "پنجشنبه",
    "جمعه",
    "شنبه",
  ];

  const { tasks } = useContext(UserTasks);

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
    <div className="flex flex-col justify-between h-screen p-4">
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
          تسک های در الویت
        </h4>
        <div>
          <Swiper
            slidesPerView={2}
            spaceBetween={15}
            freeMode={true}
            modules={[FreeMode]}
            className="mySwiper"
          >
            {tasks.map((task) => (
              <SwiperSlide key={task.id}>
                <div
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
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div>Daily Tasks</div>
    </div>
  );
}
