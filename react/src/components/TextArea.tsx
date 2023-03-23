import { TextareaHTMLAttributes, forwardRef } from "react";

const TextArea = forwardRef<
  {} & HTMLTextAreaElement,
  TextareaHTMLAttributes<HTMLTextAreaElement>
>((props, ref) => {
  return (
    <textarea
      {...props}
      rows={4}
      ref={ref}
      className={`w-full rounded-lg border-0 bg-white px-3 text-sm text-gray-700 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-500 dark:bg-slate-800 dark:text-slate-300 dark:placeholder-gray-400 md:text-base ${props.className}`}
      placeholder="Write a post..."
    ></textarea>
  );
});

export default TextArea;
