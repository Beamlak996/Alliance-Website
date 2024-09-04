import React, { useEffect, useRef, useState } from "react";
import { TestimonialCard } from "./testimonial-card";

interface Testimonial {
  quote: string;
  name: string;
  title: string;
}

interface InfiniteScrollingTestimonialsProps {
  items: Testimonial[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}

export const InfiniteScrollingTestimonials: React.FC<
  InfiniteScrollingTestimonialsProps
> = ({
  items,
  direction = "left",
  speed = "normal",
  pauseOnHover = true,
  className,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  useEffect(() => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerRef.current?.appendChild(duplicatedItem);
      });

      setAnimationProperties();
    }
  }, [direction, speed]);

  const setAnimationProperties = () => {
    if (containerRef.current) {
      const directionValue =
        direction === "left" ? "scroll-left" : "scroll-right";
      const speedValue =
        speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s";

      containerRef.current.style.setProperty(
        "--animation-direction",
        directionValue
      );
      containerRef.current.style.setProperty(
        "--animation-duration",
        speedValue
      );
    }
  };

  const handleToggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
      style={{
        maskImage:
          "linear-gradient(to right, transparent, white 20%, white 80%, transparent)",
      }}
    >
      <ul
        ref={scrollerRef}
        className={`flex whitespace-nowrap gap-6 py-4 ${
          pauseOnHover ? "hover:[animation-play-state:paused]" : ""
        } animate-scroll`}
      >
        {items.map((item, idx) => (
          <TestimonialCard
            key={idx}
            index={idx}
            quote={item.quote}
            name={item.name}
            title={item.title}
            expandedIndex={expandedIndex}
            onToggleExpand={handleToggleExpand}
          />
        ))}
      </ul>
    </div>
  );
};
