import { FC } from "react";

export const Button: FC<{
  className?: string;
  func?: () => void;
  text: string;
  disabled?: boolean;
  type: "button" | "submit" | "reset";
}> = ({ className, func, text, disabled, type }) => {
  return (
    <button
      className={`button ${className}`}
      onClick={func}
      disabled={disabled}
      type={type}
    >
      {text}
    </button>
  );
};
