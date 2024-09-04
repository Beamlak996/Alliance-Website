import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

interface CounterProps {
  from: number;
  to: number;
  duration: number;
}

const Counter: React.FC<CounterProps> = ({ from, to, duration }) => {
  const [count, setCount] = useState<number>(from);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const increment = (to - from) / (duration * 60); // 60 frames per second

    const counter = setInterval(() => {
      if (!isVisible) return;

      setCount((prev) => {
        if (prev >= to) {
          clearInterval(counter);
          return to;
        }
        return prev + increment;
      });
    }, 1000 / 60);

    return () => clearInterval(counter);
  }, [from, to, duration, isVisible]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 } // Adjust the threshold as needed
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <motion.div ref={ref}>
      <motion.span>{Math.round(count)}</motion.span>
    </motion.div>
  );
};

export const Stats: React.FC = () => {
  return (
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
          Discover the Impact of Alliance College
        </h2>

        <p className="mt-4 text-gray-500 sm:text-xl">
          Experience the thriving community of over 3,000 students benefiting
          from 5 diverse courses and 3 cutting-edge programs, designed to
          empower and transform lives.
        </p>
      </div>

      <dl className="mt-6 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-3 lg:grid-cols-3">
        <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
          <dt className="order-last text-lg font-medium text-gray-500">
            Students Enrolled
          </dt>

          <dd className="text-4xl font-extrabold text-rose-500 md:text-5xl">
            <Counter from={0} to={3000} duration={2} />
          </dd>
        </div>

        <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
          <dt className="order-last text-lg font-medium text-gray-500">
            Courses Offered
          </dt>

          <dd className="text-4xl font-extrabold text-rose-500 md:text-5xl">
            <Counter from={0} to={5} duration={2} />
          </dd>
        </div>

        <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
          <dt className="order-last text-lg font-medium text-gray-500">
            Programs Available
          </dt>

          <dd className="text-4xl font-extrabold text-rose-500 md:text-5xl">
            <Counter from={0} to={4} duration={2} />
          </dd>
        </div>
      </dl>
    </div>
  );
};
