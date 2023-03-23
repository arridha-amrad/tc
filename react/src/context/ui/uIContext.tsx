import { createContext, ReactNode, useContext, useState } from "react";
import { TToast, UIContextState } from "./ui.type";
import { v4 } from "uuid";

const UIContext = createContext<UIContextState>({
  toasts: [],
  setToasts: undefined,
  createToast: undefined,
});

export const UIProvider = ({ children }: { children: ReactNode }) => {
  const [toasts, setToasts] = useState<TToast[]>([]);

  const createToast = (message: string) => {
    const id = v4();
    setToasts((toasts) => [...toasts, { id, message }]);
    setTimeout(() => {
      deleteToast(id);
    }, 3000);
  };

  const deleteToast = (id: string) => {
    setToasts((toasts) => toasts.filter((t) => t.id !== id));
  };

  return (
    <UIContext.Provider value={{ toasts, setToasts, createToast }}>
      {children}
    </UIContext.Provider>
  );
};

export const useUI = () => {
  const { toasts, setToasts, createToast } = useContext(UIContext);
  return {
    toasts,
    setToasts: setToasts!,
    createToast: createToast!,
  };
};
