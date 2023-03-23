import { MutableRefObject, useEffect, useRef } from "react";

const useOnClickOutside = (
  ref: MutableRefObject<HTMLDivElement | null>,
  callback: VoidFunction
) => {
  const closeClickOutside = (e: MouseEvent) => {
    if (!ref.current?.contains(e.target as Node)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener("click", closeClickOutside);
    return () => {
      document.removeEventListener("click", closeClickOutside);
    };
  }, [callback, ref]);
};

export default useOnClickOutside;
