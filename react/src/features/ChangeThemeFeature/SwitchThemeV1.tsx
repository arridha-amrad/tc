import MoonIcon from "@heroicons/react/24/solid/MoonIcon";
import SunIcon from "@heroicons/react/24/solid/SunIcon";
import switchTheme from "./switchTheme";

const SwitchThemeV1 = () => {
  return (
    <button onClick={switchTheme}>
      <MoonIcon className="w-6 h-6 dark:hidden block" />
      <SunIcon className="h-6 w-6 dark:block hidden" />
    </button>
  );
};

export default SwitchThemeV1;
