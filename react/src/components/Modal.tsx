import { FC, ReactNode, useEffect } from "react";
import { createPortal } from "react-dom";
import CloseIcon from "@heroicons/react/24/solid/XMarkIcon";
import IconButton from "./IconButton";

type TModal = {
  children: ReactNode;
  isOpen: boolean;
  closeModal: VoidFunction;
};

const Modal: FC<TModal> = ({ children, isOpen, closeModal }) => {
  const close = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      closeModal();
    }
  };
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", close);
      // document.addEventListener("click", closeOutside);
    }
    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener("keydown", close);
      // document.removeEventListener("click", closeOutside);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return createPortal(
    <>
      <div
        onClick={closeModal}
        className="fixed inset-0 flex items-center bg-opacity-50 justify-center bg-black backdrop-blur-lg"
      >
        <div className="absolute top-10 left-10 -translate-x-1/2 z-50">
          <IconButton
            onClick={closeModal}
            className="dark:bg-slate-600 transition ease-linear duration-300 bg-slate-400 rounded-full p-2 hover:bg-slate-300 group"
          >
            <CloseIcon className="w-8 h-8 text-slate-300 group-hover:text-slate-500" />
          </IconButton>
        </div>
        <div
          onClick={(e) => e.stopPropagation()}
          className="dark:bg-black p-2 overflow-auto border dark:border-slate-700 border-slate-400 rounded-lg"
        >
          {children}
        </div>
      </div>
    </>,
    document.getElementById("modal")!
  );
};

export default Modal;
