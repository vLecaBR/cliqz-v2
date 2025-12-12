import { useInView, useMotionValue, useSpring } from 'motion/react';
import { useEffect, useRef, memo } from 'react';

interface CounterProps {
  value: number;
  unit: string;
  type?: 'currency' | 'default';
}

export const Counter = memo(function Counter({ value, unit, type = 'default' }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 50,
    stiffness: 100,
    duration: 2000
  });

  useEffect(() => {
    if (inView) {
      motionValue.set(value);
    }
  }, [inView, value, motionValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        if (type === 'currency') {
          ref.current.textContent = latest.toFixed(0);
        } else if (unit === 'min') {
          ref.current.textContent = latest.toFixed(1);
        } else {
          ref.current.textContent = latest.toFixed(0);
        }
      }
    });
  }, [springValue, type, unit]);

  return <span ref={ref} />;
});