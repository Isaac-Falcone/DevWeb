import { useEffect, useRef, useMemo } from "react";
import { motion, useAnimation, useInView, MotionStyle, Variants } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * Propriedades do componente MotionReveal.
 * Centraliza a configuração das animações de entrada (reveal) dos elementos da interface.
 */
interface MotionRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  duration?: number;
  once?: boolean;
  style?: MotionStyle;
}

/**
 * MotionReveal Component
 * Componente wrapper para revelar elementos quando entram no viewport.
 * Utiliza o intersection observer integrado do Framer Motion para otimização de performance.
 */
export function MotionReveal({
  children,
  className,
  delay = 0,
  direction = "up",
  duration = 0.6,
  once = true,
  style,
}: MotionRevealProps) {
  // Referências e Hooks de Animação
  const elementRef = useRef<HTMLDivElement>(null);
  const animationControls = useAnimation();
  const isElementInView = useInView(elementRef, { once, margin: "-10%" });

  // Controle do ciclo de vida da animação baseado na visibilidade (Viewport)
  useEffect(() => {
    if (isElementInView) {
      animationControls.start("visible");
    } else if (!once) {
      animationControls.start("hidden");
    }
  }, [isElementInView, animationControls, once]);

  // Memoização das variantes de animação para evitar recálculo em re-renderizações
  const animationVariants = useMemo<Variants>(() => ({
    hidden: {
      opacity: 0,
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
      scale: direction === "none" ? 0.9 : 1,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: {
        duration,
        ease: [0.16, 1, 0.3, 1] as const, // Curva de aceleração suave (easeSmooth)
        delay: delay / 1000,
      },
    },
  }), [direction, duration, delay]);

  return (
    <motion.div
      ref={elementRef}
      variants={animationVariants}
      initial="hidden"
      animate={animationControls}
      className={cn(className)}
      {...(style ? { style } : {})}
    >
      {children}
    </motion.div>
  );
}
