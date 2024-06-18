import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export default function GetStarted() {
  useEffect(() => {
    Aos.init({
      duration: 3000,
      once: true,
    });
  }, []);

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col items-center gap-2">
          <img
            src="/images/tcod.jpg"
            alt="Starting Logo"
            className="h-48 object-contain rounded-full"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1500"
          />
          <span
            className="text-2xl text-sky-500 font-semibold"
            data-aos="fade-left"
          >
            TCOD TASK
          </span>
          <span
            className="text-2xl text-sky-400 font-semibold"
            data-aos="fade-right"
          >
            تیکد تسک
          </span>
        </div>
      </div>
    </>
  );
}
