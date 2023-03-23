import { useRef, useState } from "react";
import Avatar from "./Avatar";
import useOnClickOutside from "../hooks/useOnClickOutside";
import LogoutFeature from "../features/LogoutFeature";
import SwitchThemeFeature from "../features/SwitchThemeFeature";

const LoginInfoCard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useOnClickOutside(ref, () => setIsOpen(false));

  return (
    <section ref={ref} className="relative select-none">
      {isOpen ? (
        <div className="absolute -top-24 left-0 right-0 dark:bg-slate-800 bg-slate-200 rounded-lg overflow-hidden">
          <ul className="flex flex-col overflow-hidden">
            <li>
              <LogoutFeature />
            </li>
            <hr className="dark:border-slate-700 border-slate-300" />
            <li>
              <SwitchThemeFeature />
            </li>
          </ul>
        </div>
      ) : (
        <div />
      )}
      <div
        onClick={() => setIsOpen((val) => !val)}
        className="w-full h-20 dark:bg-slate-800 bg-slate-200 rounded-lg mb-4 flex justify-center items-center p-2 gap-4 cursor-pointer relative"
      >
        <Avatar url="./img-3.jpeg" />
        <div>
          <h1 className="font-bold text-sm">Marcus Rashford</h1>
          <p className="text-sm font-light">@rashford10</p>
        </div>
      </div>
    </section>
  );
};

export default LoginInfoCard;
