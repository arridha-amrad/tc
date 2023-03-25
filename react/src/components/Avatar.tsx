import { FC, ImgHTMLAttributes } from "react";

const Avatar: FC<{ url: string } & ImgHTMLAttributes<HTMLImageElement>> = ({
  url,
  ...props
}) => {
  const source = url === "default" ? "http://localhost:3000/default.png" : url;
  return (
    <img
      className={`object-cover w-12 h-12 overflow-hidden rounded-full ${props.className}`}
      src={source}
      alt="avatar"
    />
  );
};

export default Avatar;
