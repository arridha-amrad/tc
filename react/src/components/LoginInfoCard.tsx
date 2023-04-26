import { useRef, useState } from "react";
import Avatar from "./Avatar";
import useOnClickOutside from "../hooks/useOnClickOutside";
import LogoutFeature from "../features/LogoutFeature";
import SwitchThemeFeature from "../features/ChangeThemeFeature/SwitchThemeV2";
import useMe from "../hooks/auth/useMe";
import Spinner from "./Spinner";

const LoginInfoCard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useOnClickOutside(ref, () => setIsOpen(false));

  const { data, isLoading } = useMe();

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
        {isLoading ? (
          <div className="flex items-center justify-center">
            <Spinner className="w-8 h-8" />
          </div>
        ) : (
          <>
            <Avatar url={data?.imageURL ?? "default"} />
            <div>
              <h1 className="font-bold text-sm">{data?.fullName}</h1>
              <p className="text-sm font-light">@{data?.username}</p>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default LoginInfoCard;
