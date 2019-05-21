import { useState } from "react";

export const useOpen = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return { isOpen, toggle };
};
