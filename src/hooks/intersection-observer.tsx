import { useEffect, useState, useRef } from "react";

export const useIntersection = (margin: string, threshold: number) => {
  const [isOnScreen, setIsOnScreen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsOnScreen(entry.isIntersecting);
      },
      { rootMargin: margin, threshold: threshold },
    );

    const current = containerRef.current;

    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, [margin, threshold]);

  return { containerRef, isOnScreen };
};
