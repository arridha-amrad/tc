import { FC, InputHTMLAttributes, ReactNode } from "react";

const LabeledCheckBox: FC<
  {
    children: ReactNode;
  } & InputHTMLAttributes<HTMLInputElement>
> = ({ children, ...props }) => {
  return (
    <div className="mb-4 flex items-center">
      <input
        {...props}
        id="default-Labeled"
        type="checkbox"
        className="h-5 w-5 cursor-pointer rounded-md text-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-500 focus:ring-offset-2 checked:bg-blue-500 dark:checked:bg-blue-600"
      />
      <label
        htmlFor="default-checkbox"
        className="ml-2 text-sm text-gray-500 subpixel-antialiased dark:text-gray-300  md:text-base"
      >
        {children}
      </label>
    </div>
  );
};

export default LabeledCheckBox;
