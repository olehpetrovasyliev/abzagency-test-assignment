import React, { FC } from "react";

export const Button: FC<{
  className?: string;
  func: () => void;
  text: string;
  disabled?: boolean;
}> = ({ className, func, text, disabled }) => {
  return (
    <button
      className={`button ${className}`}
      onClick={func}
      disabled={disabled}
    >
      {text}
    </button>
  );
};
