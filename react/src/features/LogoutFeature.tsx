import { useState } from "react";
import LoginInfoCardMenu from "../components/LoginInfoCardMenuButton";
import LogoutIcon from "@heroicons/react/24/solid/ArrowLeftOnRectangleIcon";
import Modal from "../components/Modal";
import Button from "../components/Button";
import useLogout from "../hooks/auth/useLogout";
import { useNavigate } from "react-router-dom";

const LogoutFeature = () => {
  const [isOpen, setIsOpen] = useState(false);
  const mutation = useLogout();
  const navigate = useNavigate();
  const logout = () => {
    mutation.mutate();
    navigate("/login", { replace: true, preventScrollReset: true });
  };
  return (
    <LoginInfoCardMenu
      className="flex items-center"
      onClick={() => setIsOpen(true)}
    >
      <LogoutIcon className="w-5 h-5" />
      <p className="font-bold text-sm">Logout</p>
      <Modal closeModal={() => setIsOpen(false)} isOpen={isOpen}>
        <div className="p-4 flex flex-col items-center justify-center lg:max-w-[400px] gap-5">
          <h1 className="text-2xl font-bold">Continue to logout?</h1>
          <p className="text-center text-sm">
            This action will clear your sessions and you need to re-login next
            time.
          </p>
          <div className="space-x-5">
            <Button
              onClick={logout}
              status="ok"
              size="normal"
              variant="fill-primary"
            >
              Yes
            </Button>
            <Button
              onClick={() => setIsOpen(false)}
              status="ok"
              size="normal"
              variant="outlined-primary"
            >
              Cancel
            </Button>
          </div>
        </div>
      </Modal>
    </LoginInfoCardMenu>
  );
};

export default LogoutFeature;
