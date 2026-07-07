"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { GoArrowUpRight } from "react-icons/go";

export default function CustomCursor({ customRef }) {
  const cursorRef = useRef(null);

  useEffect(() => {
    if (!customRef.current || !cursorRef.current) return;

    const element = customRef.current;
    const cursor = cursorRef.current;

    const handleMove = (e) => {
      gsap.to(cursor, {
        x: e.x - 32,
        y: e.y - 32,
        duration: 1,
        ease: "power3",
      });
    };

    const handleEnter = () => {
      gsap.to(cursor, {
        scale: 1,
        opacity: 1,
        duration: 0.3,
        ease: "back.out(1.7)",
      });
    };

    const handleLeave = () => {
      gsap.to(cursor, { scale: 0, opacity: 0, duration: 0.3, ease: "power3" });
    };

    // 3. Attach event listeners
    element.addEventListener("mouseenter", handleEnter);
    element.addEventListener("mousemove", handleMove);
    element.addEventListener("mouseleave", handleLeave);

    // 4. Cleanup
    return () => {
      element.removeEventListener("mouseenter", handleEnter);
      element.removeEventListener("mousemove", handleMove);
      element.removeEventListener("mouseleave", handleLeave);
    };
  }, [customRef]);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-28 h-28 bg-black rounded-full pointer-events-none z-80 scale-0 opacity-0 flex justify-center items-center"
    >
      <GoArrowUpRight className="text-(--text-white) text-2xl" />
    </div>
  );
}
