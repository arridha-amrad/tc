import HomeIcon from "@heroicons/react/24/outline/HomeIcon";
import FilledHomeIcon from "@heroicons/react/24/solid/HomeIcon";
import ProfileIcon from "@heroicons/react/24/outline/UserIcon";
import FilledProfileIcon from "@heroicons/react/24/solid/UserIcon";
import { useLocation, useNavigate } from "react-router-dom";

const sidebarLinks = [
  {
    name: "Home",
    link: "/",
    icon: <HomeIcon className="w-8 h-8" />,
    filledIcon: <FilledHomeIcon className="w-8 h-8" />,
  },
  {
    name: "Profile",
    link: "/profile/:username",
    icon: <ProfileIcon className="w-8 h-8" />,
    filledIcon: <FilledProfileIcon className="w-8 h-8" />,
  },
];

const Sidebar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <section className="flex flex-1 gap-4 flex-col w-full max-w-[300px] overflow-auto">
      {sidebarLinks.map((s, i) => (
        <div
          key={i}
          className="rounded-lg relative w-full px-5 py-2.5 outline-none transition duration-200 ease-in focus:ring-4 flex items-center gap-3 cursor-pointer"
          onClick={() => navigate(`${s.link}`)}
        >
          {pathname === s.link ? s.filledIcon : s.icon}
          <span
            className={`md:text-xl font-bold text-sm ${
              pathname === s.link ? "font-bold" : "font-medium"
            }`}
          >
            {s.name}
          </span>
          {pathname === s.link && (
            <span className="h-3 w-3 dark:bg-blue-700 bg-blue-500 rounded-full absolute top-1 left-1"></span>
          )}
        </div>
      ))}
    </section>
  );
};

export default Sidebar;
