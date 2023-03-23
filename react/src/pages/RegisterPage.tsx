import TextLink from "../components/TextLink";
import RegisterFeature from "../features/RegisterFeature";

const RegisterPage = () => {
  return (
    <main className="container mx-auto">
      <div className="flex h-screen items-center justify-center p-6 md:p-12">
        <div className="w-full max-w-[500px] space-y-5 md:bg-white md:dark:bg-black md:py-16 md:px-12 rounded-lg">
          <h1 className="text-3xl font-bold">Twitter</h1>
          <RegisterFeature />
          <div className="flex justify-center sm:text-sm text-xs">
            <span>
              have an account ? <TextLink to="/login">login</TextLink>
            </span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default RegisterPage;
