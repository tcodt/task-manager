import Aos from "aos";
import { useEffect, useState } from "react";
import StartSkipData from "../../data/StartSkipData.json";
import { Link, useNavigate } from "react-router-dom";
import GetStarted from "../../components/GetStarted/GetStarted";

export default function GetStartedExplain() {
  const [startSkipData, setStartSkipData] = useState(StartSkipData);
  const [dotActive, setDotActive] = useState(0);
  const [skipTitle, setSkipTitle] = useState(null);
  const [skipDesc, setSkipDesc] = useState(null);
  const [skipImage, setSkipImage] = useState(null);

  const [loader, setLoader] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    Aos.init({
      duration: 1500,
      once: true,
    });

    const timer = setTimeout(() => {
      setLoader(false);
    }, 2000);

    setSkipTitle(startSkipData[dotActive].title);
    setSkipDesc(startSkipData[dotActive].desc);
    setSkipImage(startSkipData[dotActive].img);

    return () => clearTimeout(timer);
  }, [dotActive]);

  const handleNextButton = () => {
    if (dotActive === startSkipData.length - 1) {
      navigate("/register_user");
    } else {
      setDotActive((prevDot) => (prevDot + 1) % startSkipData.length);
      setSkipTitle(startSkipData[dotActive].title);
      setSkipDesc(startSkipData[dotActive].desc);
      setSkipImage(startSkipData[dotActive].img);
    }
  };

  return (
    <>
      {loader ? (
        <GetStarted />
      ) : (
        <div className="p-4 flex flex-col justify-between h-screen">
          <div className="flex justify-between items-center">
            <div>
              <button
                className="text-base text-sky-500"
                onClick={handleNextButton}
              >
                بعدی
              </button>
            </div>
            <div className="flex items-center gap-1">
              <div
                className={`w-3 h-3 rounded-full ${
                  dotActive === 0 ? "bg-sky-500" : "bg-slate-300"
                } `}
              ></div>
              <div
                className={`w-3 h-3 rounded-full ${
                  dotActive === 1 ? "bg-sky-500" : "bg-slate-300"
                } `}
              ></div>
              <div
                className={`w-3 h-3 rounded-full ${
                  dotActive === 2 ? "bg-sky-500" : "bg-slate-300"
                } `}
              ></div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4">
            <img src={skipImage} alt={skipTitle} data-aos="flip-down" />
            <h3 className="text-xl text-gray-800 font-semibold">{skipTitle}</h3>
            <p className="text-base text-gray-500 text-center">{skipDesc}</p>
          </div>
          <Link
            to="/register_user"
            className="p-3 bg-sky-500 hover:bg-sky-600 w-full transition rounded-lg text-center text-white"
          >
            شروع
          </Link>
        </div>
      )}
    </>
  );
}
