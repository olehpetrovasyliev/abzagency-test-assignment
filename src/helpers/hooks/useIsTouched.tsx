import { useState } from "react";

export const useIsTouched = () => {
  const [isTouched, setIsTouched] = useState<boolean>(false);

  const handleBlur = () => {
    setIsTouched(true);
  };

  return { isTouched, handleBlur };
};
