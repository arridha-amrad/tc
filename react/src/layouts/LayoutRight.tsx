import { FC, ReactNode } from "react";

const LayoutRight: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="hidden flex-[2] flex-shrink p-3 lg:block">{children}</div>
  );
};

export default LayoutRight;
