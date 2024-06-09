import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function GetUserName() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col gap-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-sky-500">تیکد تسک</h3>
          <span className="text-gray-500 text-xl">برنامه مدیریت وظایف</span>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="text-base text-gray-600 text-center">
            نام خود را وارد کنید
          </h4>
          <form className="flex flex-col gap-4">
            <div className="relative">
              <label
                htmlFor="user_input"
                className="p-2 bg-sky-500 rounded-s-lg h-[99%] w-12 absolute start-0 top-0"
              >
                <FaUser className="text-white text-xl mx-auto" />
              </label>
              <input
                type="text"
                className="p-2 ps-14 border-2 border-gray-300 outline-none rounded-lg focus-visible:border-sky-500"
                id="user_input"
              />
            </div>
            <div>
              <Link
                to="/register_user"
                className="p-2 bg-sky-500 hover:bg-sky-600 transition rounded-lg text-center text-white w-full block"
              >
                تایید
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
