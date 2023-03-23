import { FC, ReactNode } from "react";
import { Link } from "react-router-dom";

interface IProps {
  to: string;
  children: ReactNode;
}

const TextLink: FC<IProps> = ({ to, children }) => {
  return (
    <Link
      to={to}
      className="dark:text-blue-600 text-blue-500 no-underline sm:text-sm text-xs"
    >
      {children}
    </Link>
  );
};

export default TextLink;
