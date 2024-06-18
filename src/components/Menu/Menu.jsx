import { PiCalendarDotsFill, PiHouseFill, PiUserFill } from "react-icons/pi";

export default function Menu() {
  return (
    <div className="p-4 flex justify-between items-center">
      <a href="#">
        <PiHouseFill className="text-3xl text-sky-400 hover:text-sky-600" />
      </a>
      <a href="#">
        <PiCalendarDotsFill className="text-3xl text-sky-400 hover:text-sky-600" />
      </a>
      <a href="#">
        <PiUserFill className="text-3xl text-sky-400 hover:text-sky-600" />
      </a>
    </div>
  );
}
