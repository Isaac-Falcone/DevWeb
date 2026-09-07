import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

interface AnimatedNumberProps {
  value: number;
  duration?: number;
  suffix?: string;
}

export function AnimatedNumber({ value, duration = 2.5, suffix = "" }: AnimatedNumberProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    // Assume 60fps (16ms per frame)
    const totalFrames = Math.round((duration * 1000) / 16);
    let frame = 0;

    const counter = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      // Ease Out Quart for a fast start and slow smooth finish
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const current = Math.round(end * easeOutQuart);
      
      setCount(current);

      if (frame >= totalFrames) {
        setCount(end);
        clearInterval(counter);
      }
    }, 16);

    return () => clearInterval(counter);
  }, [isInView, value, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}
