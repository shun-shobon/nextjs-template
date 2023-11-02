import type { ReactNode } from "react";

export type ButtonProps = {
  onClick?: () => void;
  children: ReactNode;
};

export const Button = ({ children, onClick }: ButtonProps): JSX.Element => (
  <button
    className="rounded-full bg-blue-400 px-4 py-1 text-white"
    onClick={onClick}
  >
    {children}
  </button>
);
