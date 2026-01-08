"use client";

import { CSSProperties, useEffect, useRef, useState } from "react";

interface IProps {
  onIntersect ? : () => void;
  onNotIntersect ? : () => void;
  beforeAnimation ? : string;
  afterAnimation ? : string;
  children: React.ReactNode;
  className ?: string;
  style? : CSSProperties | undefined;
}

const IntersectionObserverComponent = ({
  onIntersect,
  onNotIntersect,
  beforeAnimation,
  afterAnimation,
  children,
  className,
  style
}: IProps) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const observerRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.2, // Change threshold as needed
    };

    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
      if (entry.isIntersecting) {
        if (onIntersect) {
          onIntersect();
        }
      } else {
        if (onNotIntersect) {
          onNotIntersect();
        }
      }
    }, observerOptions);

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, [onIntersect, onNotIntersect]);

  return (
    <div ref={observerRef} className="inline-block">
      <div
        style={style}
        className={`${
          isIntersecting ? afterAnimation : beforeAnimation
        } transition-all inline-block duration-1000 ease-in-out ${className}`}
      >
        {children}
      </div>
    </div>
  );
};

export default IntersectionObserverComponent;
