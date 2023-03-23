import { FC, ImgHTMLAttributes } from "react";

const Logo: FC<
  { size: "small" | "normal" } & ImgHTMLAttributes<HTMLImageElement>
> = ({ size, ...props }) => {
  const ratio = size === "normal" ? "h-12 w-12" : "h-8 w-8";
  const className = props.className;
  return (
    <>
      <img
        className={`${ratio} ml-4 dark:block hidden ${className}`}
        src="/logo-dark.svg"
      />
      <img
        className={`${ratio} ml-4 block dark:hidden ${className}`}
        src="/logo-light.svg"
      />
    </>
  );
};

export default Logo;
