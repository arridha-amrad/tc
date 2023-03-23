import { useRef, useState } from "react";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import IconButton from "../IconButton";
import MenuIcon from "@heroicons/react/24/solid/EllipsisHorizontalIcon";

const TweetCardOptions = () => {
  const menuRef = useRef<HTMLDivElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  useOnClickOutside(menuRef, () => setIsOpen(false));
  return (
    <>
      <IconButton
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen((val) => !val);
        }}
        className="hover:dark:bg-slate-800 group"
      >
        <MenuIcon className="w-5 h-5 group-hover:text-blue-500" />
      </IconButton>
      {isOpen && (
        <div ref={menuRef} className="absolute right-14 top-2 z-40">
          <ul
            onClick={(e) => e.stopPropagation()}
            className="dark:bg-black bg-white rounded-lg overflow-hidden border border-slate-300 dark:border-slate-700"
          >
            <Options
              label="Delete this tweet"
              onClick={() => console.log("delete this tweet")}
            />
            <Options
              label="Update this tweet"
              onClick={() => console.log("update this tweet")}
            />
          </ul>
        </div>
      )}
    </>
  );
};

export default TweetCardOptions;

const Options = (data: { label: string; onClick: VoidFunction }) => {
  return (
    <li className="hover:dark:bg-slate-700 hover:bg-slate-100 p-2">
      <button className="font-semibold text-sm" onClick={data.onClick}>
        {data.label}
      </button>
    </li>
  );
};
