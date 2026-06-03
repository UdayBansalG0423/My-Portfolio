"use client";

import { useEffect, useState } from "react";

interface TypewriterProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetweenWords?: number;
}

export default function Typewriter({
  words,
  typingSpeed = 80,
  deletingSpeed = 40,
  delayBetweenWords = 2000,
}: TypewriterProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const activeWord = words[currentWordIndex];

    if (!isDeleting) {
      // Typing state
      if (currentText.length < activeWord.length) {
        timer = setTimeout(() => {
          setCurrentText(activeWord.substring(0, currentText.length + 1));
        }, typingSpeed);
      } else {
        // Pause before deleting
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, delayBetweenWords);
      }
    } else {
      // Deleting state
      if (currentText.length > 0) {
        timer = setTimeout(() => {
          setCurrentText(activeWord.substring(0, currentText.length - 1));
        }, deletingSpeed);
      } else {
        // Pause briefly before typing the next word to avoid synchronous setState inside the effect body
        timer = setTimeout(() => {
          setIsDeleting(false);
          setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, 300);
      }
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, words, typingSpeed, deletingSpeed, delayBetweenWords]);

  return (
    <span className="inline-flex items-center">
      <span className="text-white">
        {currentText}
      </span>
      <span className="ml-1 w-[2px] h-[1em] bg-white animate-pulse inline-block align-middle opacity-70" />
    </span>
  );
}
