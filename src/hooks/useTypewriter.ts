import { useState, useEffect } from "react";

interface UseInfiniteTypewriterOptions {
  text: string;
  typeSpeed?: number;
  deleteSpeed?: number;
  pauseTime?: number;
  delay?: number;
}

export const useInfiniteTypewriter = ({
  text,
  typeSpeed = 150,
  deleteSpeed = 100,
  pauseTime = 2000,
  delay = 0,
}: UseInfiniteTypewriterOptions) => {
  const [displayText, setDisplayText] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      let index = 0;
      let isCurrentlyDeleting = false;

      const animate = () => {
        if (!isCurrentlyDeleting) {
          // Typing phase
          if (index < text.length) {
            setDisplayText(text.slice(0, index + 1));
            setIsComplete(false);
            index++;
            setTimeout(animate, typeSpeed);
          } else {
            // Finished typing, pause then start deleting
            setIsComplete(true);
            setTimeout(() => {
              isCurrentlyDeleting = true;
              setIsDeleting(true);
              animate();
            }, pauseTime);
          }
        } else {
          // Deleting phase
          if (index > 0) {
            setDisplayText(text.slice(0, index - 1));
            setIsComplete(false);
            index--;
            setTimeout(animate, deleteSpeed);
          } else {
            // Finished deleting, start typing again
            isCurrentlyDeleting = false;
            setIsDeleting(false);
            setTimeout(animate, typeSpeed);
          }
        }
      };

      animate();
    }, delay);

    return () => clearTimeout(startTimeout);
  }, [text, typeSpeed, deleteSpeed, pauseTime, delay]);

  return { displayText, isComplete, isDeleting };
};
