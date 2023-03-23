import { ButtonHTMLAttributes, FC, ReactNode } from "react";

const IconButton: FC<
  {
    children: ReactNode;
    tooltip?: string;
  } & ButtonHTMLAttributes<HTMLButtonElement>
> = ({ children, tooltip, ...props }) => {
  return (
    <button
      {...props}
      className={`p-2 rounded-full relative group z-[100] ${props.className}`}
    >
      {children}
      <div className="absolute transition-opacity duration-100 ease-linear group-hover:opacity-100 opacity-0 top-full left-1/2 -translate-x-1/2">
        {tooltip && (
          <div className="bg-slate-800 rounded-lg min-h-[30px] px-2 flex items-center">
            <span className="text-slate-200 font-light text-sm">{tooltip}</span>
          </div>
        )}
      </div>
    </button>
  );
};

export default IconButton;
