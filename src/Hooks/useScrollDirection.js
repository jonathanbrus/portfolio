import { useState, useEffect } from "react";

export const useScrollDirection = () => {
  const [isScrollingUp, setIsScollingUp] = useState(true);
  const [lastY, setLastY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setIsScollingUp(currentY < lastY);
      setLastY(currentY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });

  return { isScrollingUp: isScrollingUp };
};
