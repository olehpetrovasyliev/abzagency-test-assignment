import React, { FC } from "react";

export const Button: FC<{
  className?: string;
  func: () => void;
  text: string;
}> = ({ className, func, text }) => {
  return (
    <button className={`button ${className}`} onClick={func}>
      {text}
    </button>
  );
};
