import { ButtonHTMLAttributes, FC, ReactNode } from "react";
import IconButton from "../IconButton";

const TweetCardButton: FC<
  { children: ReactNode } & ButtonHTMLAttributes<HTMLButtonElement>
> = ({ children, ...props }) => {
  return (
    <IconButton {...props} className="hover:dark:bg-slate-800 relative group">
      {children}
      <span className="absolute text-sm top-1/2 -translate-y-1/2 left-10 group-hover:text-blue-500">
        12
      </span>
    </IconButton>
  );
};

export default TweetCardButton;
