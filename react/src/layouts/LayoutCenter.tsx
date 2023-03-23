import { FC, ReactNode } from "react";

const LayoutCenter: FC<{ children: ReactNode }> = ({ children }) => {
  return <div className="flex-[3] mx-3">{children}</div>;
};

export default LayoutCenter;
