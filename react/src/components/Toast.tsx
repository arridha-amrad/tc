import { useUI } from "../context/ui/uIContext";

const Toast = () => {
  const { toasts } = useUI();

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2">
      {toasts.map((t) => (
        <div
          key={t.id}
          className="bg-blue-300 mt-2 h-12 flex items-center justify-center gap-2 px-4 rounded-lg"
        >
          <span className="text-sm text-black font-semibold">{t.message}</span>
        </div>
      ))}
    </div>
  );
};

export default Toast;
