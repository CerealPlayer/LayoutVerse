import { ReactNode } from "react";

interface Props {
  onClick: () => void;
  children: ReactNode
}

export default function Button({ children, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className="border-blue-900 hover:bg-blue-600 shadow-md hover:shadow-lg active:bg-blue-700 shadow-neutral-400 transition-all ease-out duration-200 border px-4 py-2 rounded-lg bg-blue-500 font-bold text-white"
    >
      {children}
    </button>
  );
}