import TextLink from "../components/TextLink";
import LoginFeature from "../features/LoginFeature";
import SwitchThemeFeature from "../features/ChangeThemeFeature/SwitchThemeV1";

const LoginPage = () => {
  return (
    <main className="container mx-auto">
      <div className="h-14 w-full flex items-center justify-end">
        <SwitchThemeFeature />
      </div>
      <div className="flex items-center justify-center p-6 md:p-12">
        <div className="w-full max-w-[500px] space-y-5 md:bg-white md:dark:bg-black md:py-16 md:px-12 rounded-lg">
          <h1 className="text-3xl font-bold">Twitter</h1>
          <LoginFeature />
          <div className="flex justify-between">
            <TextLink to="/forgot-password">forgot password</TextLink>
            <TextLink to="/register">Register</TextLink>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
