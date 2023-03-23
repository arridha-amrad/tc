import { FC, HTMLAttributes } from "react";

const LoginInfoCardMenu: FC<HTMLAttributes<HTMLDivElement>> = (props) => {
  return (
    <div
      {...props}
      className="py-3 flex items-center justify-center gap-3 px-4 bg-transparent cursor-pointer hover:dark:bg-slate-700 hover:bg-slate-300 w-full overflow-hidden"
    >
      {props.children}
    </div>
  );
};

export default LoginInfoCardMenu;
