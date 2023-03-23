import { FC, ReactNode } from "react";

const LayoutLeft: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="sticky top-0 bottom-0 hidden h-screen md:flex-1 lg:flex-[1.5] md:block p-3">
      <div className="flex flex-col gap-2 h-full">{children}</div>
    </div>
  );
};

export default LayoutLeft;
