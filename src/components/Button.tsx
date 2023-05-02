import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
  className?: string;
  onClick: () => void;
}

export const Button = ({ children, className, onClick }: Props) => {

  return (
    <button
      className={`button ${className}`}
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
