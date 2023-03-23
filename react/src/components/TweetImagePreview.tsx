import { FC, useState } from "react";
import Modal from "./Modal";
import PostMedia from "./PostMedia";

const TweetImagePreview: FC<{ urls: string[] }> = ({ urls }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <ul
        onClick={() => setIsOpen(true)}
        className="-space-x-3 flex cursor-pointer"
      >
        {urls.map((url, i) => (
          <li key={i}>
            <img
              src={url}
              className="w-8 h-8 rounded-full border dark:border-gray-600 object-cover object-center"
              alt="avatar"
            />
          </li>
        ))}
      </ul>
      <Modal isOpen={isOpen} closeModal={() => setIsOpen(false)}>
        <div className="w-auto max-w-[600px] h-full max-h-[600px]">
          <PostMedia urls={urls} />
        </div>
      </Modal>
    </>
  );
};

export default TweetImagePreview;
