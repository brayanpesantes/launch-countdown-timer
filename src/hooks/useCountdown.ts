import { useEffect, useState } from "react";

export function useCountdown(initialSeconds: number) {
  const [timeLeft, setTimeLeft] = useState(initialSeconds);
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        setIsFlipped(true);
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return { timeLeft, isFlipped };
}
