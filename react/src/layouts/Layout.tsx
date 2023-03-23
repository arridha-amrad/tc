import LayoutLeft from "./LayoutLeft";
import Sidebar from "../components/Sidebar";
import LayoutCenter from "./LayoutCenter";
import { Outlet } from "react-router-dom";
import LayoutRight from "./LayoutRight";
import SearchInput from "../components/SearchInput";
import LoginInfoCard from "../components/LoginInfoCard";
import Logo from "../components/Logo";
import Toast from "../components/Toast";

const Layout = () => {
  return (
    <div className="container mx-auto">
      <div className="flex">
        <LayoutLeft>
          <Logo size="normal" />
          <Sidebar />
          <LoginInfoCard />
        </LayoutLeft>
        <LayoutCenter>
          <Outlet />
        </LayoutCenter>
        <LayoutRight>
          <SearchInput />
        </LayoutRight>
      </div>
      <Toast />
    </div>
  );
};

export default Layout;
