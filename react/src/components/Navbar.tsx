import ArrowLeft from "@heroicons/react/24/solid/ArrowLeftIcon";
import { useNavigate, useRoutes } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate("/")}
      className="w-full cursor-pointer flex items-center justify-start gap-3 py-3"
    >
      <ArrowLeft className="w-5 h-5" />
      <h1 className="font-semibold text-lg">Tweet</h1>
    </div>
  );
};

export default Navbar;
