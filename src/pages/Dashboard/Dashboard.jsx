import { useContext, useEffect, useState } from "react";
import UsernameContext from "../../contexts/UsernameContext";
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
      <div className="flex flex-col gap-4">
        <h4 className="text-gray-800 text-base font-semibold">
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
            <SwiperSlide>
              <div className="bg-sky-500 rounded-xl p-2 flex flex-col gap-8">
                <div className="bg-white p-1 rounded-xl w-2/4">
                  <span className="text-xs text-grau-700">10 روز</span>
                </div>
                <div>
                  <h5 className="text-base text-white">تسک اول</h5>
                </div>
                <div>
                  <p className="text-white text-sm">نوار پیشرفت</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-purple-500 rounded-xl p-2 flex flex-col gap-8">
                <div className="bg-white p-1 rounded-xl w-2/4">
                  <span className="text-xs text-grau-700">10 روز</span>
                </div>
                <div>
                  <h5 className="text-base text-white">تسک اول</h5>
                </div>
                <div>
                  <p className="text-white text-sm">نوار پیشرفت</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-red-500 rounded-xl p-2 flex flex-col gap-8">
                <div className="bg-white p-1 rounded-xl w-2/4">
                  <span className="text-xs text-grau-700">10 روز</span>
                </div>
                <div>
                  <h5 className="text-base text-white">تسک اول</h5>
                </div>
                <div>
                  <p className="text-white text-sm">نوار پیشرفت</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-yellow-500 rounded-xl p-2 flex flex-col gap-8">
                <div className="bg-white p-1 rounded-xl w-2/4">
                  <span className="text-xs text-grau-700">10 روز</span>
                </div>
                <div>
                  <h5 className="text-base text-white">تسک اول</h5>
                </div>
                <div>
                  <p className="text-white text-sm">نوار پیشرفت</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-green-500 rounded-xl p-2 flex flex-col gap-8">
                <div className="bg-white p-1 rounded-xl w-2/4">
                  <span className="text-xs text-grau-700">10 روز</span>
                </div>
                <div>
                  <h5 className="text-base text-white">تسک اول</h5>
                </div>
                <div>
                  <p className="text-white text-sm">نوار پیشرفت</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-orange-500 rounded-xl p-2 flex flex-col gap-8">
                <div className="bg-white p-1 rounded-xl w-2/4">
                  <span className="text-xs text-grau-700">10 روز</span>
                </div>
                <div>
                  <h5 className="text-base text-white">تسک اول</h5>
                </div>
                <div>
                  <p className="text-white text-sm">نوار پیشرفت</p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div>Daily Tasks</div>
    </div>
  );
}
