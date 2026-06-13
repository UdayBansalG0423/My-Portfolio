"use client";

import { useState, useRef, useEffect } from "react";

const CHARS = "!<>-_\\/[]{}—=+*^?#_01";

interface ScrambleTextProps {
  text: string;
  className?: string;
}

export default function ScrambleText({ text, className = "" }: ScrambleTextProps) {
  const [displayText, setDisplayText] = useState(text);
  const [isScrambling, setIsScrambling] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const handleMouseEnter = () => {
    if (isScrambling) return;
    setIsScrambling(true);

    let iteration = 0;
    const maxIterations = 15;
    
    if (intervalRef.current) clearInterval(intervalRef.current);
    
    intervalRef.current = setInterval(() => {
      setDisplayText(prev => 
        text.split("")
          .map((char, index) => {
            if (char === " ") return " ";
            // Reveal actual character as iteration progresses
            if (index < (iteration / maxIterations) * text.length) {
              return text[index];
            }
            // Random character for unscrambled part
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("")
      );

      iteration += 1;
      if (iteration > maxIterations) {
        if (intervalRef.current) clearInterval(intervalRef.current);
        setDisplayText(text);
        setIsScrambling(false);
      }
    }, 30);
  };

  return (
    <span 
      onMouseEnter={handleMouseEnter} 
      className={`inline-block ${className} cursor-default`}
    >
      {displayText}
    </span>
  );
}
