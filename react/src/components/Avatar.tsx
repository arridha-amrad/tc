import { FC, ImgHTMLAttributes } from "react";

const Avatar: FC<{ url: string } & ImgHTMLAttributes<HTMLImageElement>> = ({
  url,
  ...props
}) => {
  return (
    <img
      className={`object-cover w-12 h-12 overflow-hidden rounded-full ${props.className}`}
      src={url}
      alt="avatar"
    />
  );
};

export default Avatar;
