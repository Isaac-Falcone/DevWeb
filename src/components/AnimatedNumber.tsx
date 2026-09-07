import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

/**
 * Propriedades para o contador animado.
 */
interface AnimatedNumberProps {
  value: number;
  duration?: number;
  suffix?: string;
}

/**
 * AnimatedNumber Component
 * Renderiza um número que conta de zero até o valor alvo de forma fluida.
 * Utiliza `requestAnimationFrame` para otimização de performance (evitando gaps de rendering).
 */
export function AnimatedNumber({ value, duration = 2.5, suffix = "" }: AnimatedNumberProps) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const isElementInView = useInView(elementRef, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isElementInView) return;

    let startTime: number | null = null;
    let animationFrameId: number;

    const endValue = value;
    const durationMs = duration * 1000;

    const updateCounter = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsedTime = timestamp - startTime;
      
      const progress = Math.min(elapsedTime / durationMs, 1);
      
      // Curva de aceleração: Ease Out Quart (Início rápido, final suave)
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.round(endValue * easeOutQuart);
      
      setCount(currentCount);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(updateCounter);
      } else {
        setCount(endValue);
      }
    };

    animationFrameId = requestAnimationFrame(updateCounter);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isElementInView, value, duration]);

  return <span ref={elementRef}>{count}{suffix}</span>;
}
