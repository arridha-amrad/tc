import { Dispatch, SetStateAction } from "react";

export type TToast = {
  id: string;
  message: string;
};

export interface UIContextState {
  toasts: TToast[];
  setToasts?: Dispatch<SetStateAction<TToast[]>>;
  createToast?: (m: string) => void;
}
