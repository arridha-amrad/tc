import { useState } from "react";
import LoginInfoCardMenu from "../components/LoginInfoCardMenuButton";
import LogoutIcon from "@heroicons/react/24/solid/ArrowLeftOnRectangleIcon";
import Modal from "../components/Modal";

const LogoutFeature = () => {
  const [isOpen, setIsOpen] = useState(false);
  const logout = () => {
    console.log("logout");
  };
  return (
    <LoginInfoCardMenu
      className="flex items-center"
      onClick={() => setIsOpen(true)}
    >
      <LogoutIcon className="w-5 h-5" />
      <p className="font-bold text-sm">Logout</p>
      <Modal closeModal={() => setIsOpen(false)} isOpen={isOpen}>
        <p>logout</p>
      </Modal>
    </LoginInfoCardMenu>
  );
};

export default LogoutFeature;
