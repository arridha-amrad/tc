import LoginInfoCardMenu from "../components/LoginInfoCardMenuButton";
import SunIcon from "@heroicons/react/24/solid/SunIcon";
import MoonIcon from "@heroicons/react/24/solid/MoonIcon";

const SwitchThemeFeature = () => {
  const switchTheme = () => {
    const theme = localStorage.getItem("theme");
    if (theme && theme === "dark") {
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    } else {
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    }
  };
  return (
    <LoginInfoCardMenu className="flex items-center" onClick={switchTheme}>
      <SunIcon className="w-5 h-5 dark:block hidden" />
      <MoonIcon className="w-5 h-5 dark:hidden block" />
      <p className="font-bold text-sm">Change Theme</p>
    </LoginInfoCardMenu>
  );
};

export default SwitchThemeFeature;
