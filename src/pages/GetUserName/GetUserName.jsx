import { useContext } from "react";
import { useForm } from "react-hook-form";
import { FaUser } from "react-icons/fa";
import { UsernameContext } from "../../contexts/Contexts";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function GetUserName() {
  const { username, setUsername } = useContext(UsernameContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const getUserNameHandler = (data) => {
    setUsername(data.username);
    localStorage.setItem("username", JSON.stringify(data.username));
    console.log(data);
    toast.success("با موفقیت فرم را پر کردید");
    navigate("/dashboard");
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <Toaster position="top-center" />
      <div className="flex flex-col gap-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-sky-500">تیکد تسک</h3>
          <span className="text-gray-500 text-xl">برنامه مدیریت وظایف</span>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="text-base text-gray-600 text-center">
            نام خود را وارد کنید
          </h4>
          <form
            className="flex flex-col gap-4"
            onSubmit={handleSubmit(getUserNameHandler)}
          >
            <div className="relative">
              <label
                htmlFor="user_input"
                className={`p-2 rounded-s-lg h-[99%] w-12 absolute start-0 top-0 ${
                  errors.username ? "bg-red-500" : "bg-sky-500"
                }`}
              >
                <FaUser className="text-white text-xl mx-auto" />
              </label>
              <input
                type="text"
                className={`p-2 ps-14 border-2 border-gray-300 outline-none rounded-lg ${
                  errors.username
                    ? "border-red-500 focus-visible:border-red-500"
                    : "focus-visible:border-sky-500"
                }`}
                id="user_input"
                {...register("username", {
                  required: true,
                  minLength: 4,
                })}
              />
            </div>
            {errors.username && (
              <div className="text-red-500">
                {errors.username.type === "required"
                  ? "وارد کردن نام اجباری است"
                  : "نام شما باید بیشتر از 4 کاراکتر باشد"}
              </div>
            )}
            <div>
              <button className="p-2 bg-sky-500 hover:bg-sky-600 transition rounded-lg text-center text-white w-full block">
                تایید
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
