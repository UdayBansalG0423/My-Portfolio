"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal as TerminalIcon, X, Maximize2, Minus } from "lucide-react";
import { usePathname } from "next/navigation";

type HistoryItem = {
  type: "input" | "output" | "error" | "system";
  text: React.ReactNode;
};

export default function InteractiveTerminal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<HistoryItem[]>([
    { type: "system", text: "UdayOS v1.0.0 (AI/ML Edition)" },
    { type: "system", text: "Type 'help' to see available commands." },
  ]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [yoloMode, setYoloMode] = useState(false);
  const [temp, setTemp] = useState(0.7);

  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const pathname = usePathname();

  // Auto-scroll to bottom
  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [history]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen && !isMinimized && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen, isMinimized]);

  // Handle global CSS modes based on Easter Eggs
  useEffect(() => {
    if (typeof document !== 'undefined') {
      if (yoloMode) document.body.classList.add('yolo-mode');
      else document.body.classList.remove('yolo-mode');

      if (temp >= 1.5) document.body.classList.add('hallucinate-mode');
      else document.body.classList.remove('hallucinate-mode');
    }
  }, [yoloMode, temp]);

  const addToHistory = (item: HistoryItem) => {
    setHistory((prev) => [...prev, item]);
  };

  const handleCommand = async (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    addToHistory({ type: "input", text: `> ${cmd}` });
    setInput("");

    if (!trimmedCmd) return;

    setIsProcessing(true);

    switch (trimmedCmd) {
      case "help":
        addToHistory({
          type: "output",
          text: (
            <div className="flex flex-col gap-1 text-emerald-400">
              <span>Available commands:</span>
              <span>  help          - Show this message</span>
              <span>  whoami        - Display basic info</span>
              <span>  train_model   - Initialize neural network training</span>
              <span>  run_rag       - Execute RAG pipeline</span>
              <span>  enable_yolo   - Toggle Computer Vision bounding boxes</span>
              <span>  clear         - Clear terminal</span>
            </div>
          ),
        });
        break;

      case "whoami":
        addToHistory({
          type: "output",
          text: (
            <div className="text-blue-400">
              {"{"}
              <br />
              &nbsp;&nbsp;"name": "Uday Bansal",
              <br />
              &nbsp;&nbsp;"role": "AI/ML Engineer",
              <br />
              &nbsp;&nbsp;"status": "Ready to build",
              <br />
              {"}"}
            </div>
          ),
        });
        break;

      case "clear":
        setHistory([
          { type: "system", text: "UdayOS v1.0.0 (AI/ML Edition)" },
        ]);
        break;

      case "run_rag":
        addToHistory({ type: "system", text: "Initializing VectorDB connection..." });
        await new Promise((r) => setTimeout(r, 600));
        addToHistory({ type: "system", text: "Embedding query: 'Why hire Uday?'" });
        await new Promise((r) => setTimeout(r, 800));
        addToHistory({ type: "system", text: "Retrieving top-k chunks..." });
        await new Promise((r) => setTimeout(r, 600));
        addToHistory({
          type: "output",
          text: (
            <div className="text-emerald-400">
              <span className="text-white">LLM Response:</span> Uday possesses a rare blend of theoretical AI knowledge and practical engineering skills. He doesn't just build notebooks; he builds production-ready systems.
            </div>
          ),
        });
        break;

      case "train_model":
        addToHistory({ type: "system", text: "Loading dataset (10,000 samples)..." });
        await new Promise((r) => setTimeout(r, 800));
        addToHistory({ type: "system", text: "Initializing PyTorch ResNet-50..." });
        await new Promise((r) => setTimeout(r, 800));

        for (let i = 1; i <= 5; i++) {
          await new Promise((r) => setTimeout(r, 500));
          const loss = (2.5 / i + Math.random() * 0.1).toFixed(4);
          const acc = (40 + i * 11 + Math.random() * 2).toFixed(2);
          addToHistory({
            type: "output",
            text: `Epoch [${i}/5] | Loss: ${loss} | Accuracy: ${acc}%`,
          });
        }
        
        await new Promise((r) => setTimeout(r, 500));
        addToHistory({
          type: "system",
          text: (
            <span className="text-emerald-400 font-bold">
              ✓ Model converged successfully. Weights saved to 'uday_brain.pt'.
            </span>
          ),
        });
        break;

      case "sudo":
        addToHistory({ type: "error", text: "Nice try. You don't have root privileges here." });
        break;

      case "enable_yolo":
        setYoloMode(prev => !prev);
        addToHistory({ 
          type: "system", 
          text: !yoloMode 
            ? "YOLOv8 Object Detection Initialized. Generating bounding boxes..." 
            : "Computer Vision disabled." 
        });
        break;

      default:
        addToHistory({ type: "error", text: `Command not found: ${trimmedCmd}` });
    }

    setIsProcessing(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !isProcessing) {
      handleCommand(input);
    }
  };

  // Hide on resume page to keep it clean
  if (pathname === "/resume") return null;

  return (
    <>
      {/* Floating Action Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-black border border-emerald-500/30 text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.2)] hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] transition-all group overflow-hidden"
          >
            <div className="absolute inset-0 bg-emerald-500/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <TerminalIcon className="h-6 w-6 relative z-10" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Terminal Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{
              opacity: 1,
              y: isMinimized ? "calc(100vh - 100px)" : 0,
              scale: 1,
            }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className={`fixed bottom-6 right-6 z-50 w-[350px] sm:w-[450px] shadow-2xl rounded-lg overflow-hidden border border-white/10 bg-black/90 backdrop-blur-xl font-mono text-sm ${
              isMinimized ? "h-12" : "h-[400px]"
            } flex flex-col`}
          >
            {/* Title Bar */}
            <div className="flex items-center justify-between px-4 py-2 bg-white/5 border-b border-white/10 select-none">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <TerminalIcon className="h-4 w-4 text-emerald-400" />
                  <span className="text-xs text-muted font-sans font-medium hidden sm:inline-block">
                    uday@portfolio:~
                  </span>
                </div>
                {/* Temperature Slider Easter Egg */}
                {!isMinimized && (
                  <div className="flex items-center gap-2" title="LLM Temperature (Hallucination Control)">
                    <span className="text-[10px] text-muted font-mono uppercase">Temp: {temp.toFixed(1)}</span>
                    <input 
                      type="range" 
                      min="0" max="2" step="0.1" 
                      value={temp} 
                      onChange={(e) => setTemp(parseFloat(e.target.value))}
                      className="w-16 h-1 bg-white/20 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                    />
                  </div>
                )}
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="text-muted hover:text-white transition-colors"
                >
                  <Minus className="h-3 w-3" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-muted hover:text-red-400 transition-colors"
                >
                  <X className="h-3 w-3" />
                </button>
              </div>
            </div>

            {/* Terminal Body */}
            {!isMinimized && (
              <div
                className="flex-1 p-4 overflow-y-auto space-y-2 text-white/80"
                onClick={() => inputRef.current?.focus()}
              >
                {history.map((item, i) => (
                  <div
                    key={i}
                    className={`${
                      item.type === "input"
                        ? "text-white font-semibold"
                        : item.type === "error"
                        ? "text-red-400"
                        : item.type === "system"
                        ? "text-muted text-xs uppercase tracking-wider"
                        : "text-white/70"
                    } break-words whitespace-pre-wrap`}
                  >
                    {item.text}
                  </div>
                ))}
                
                {/* Active Input Line */}
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-emerald-400 font-semibold">{'>'}</span>
                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    disabled={isProcessing}
                    className="flex-1 bg-transparent outline-none border-none text-white focus:ring-0 p-0"
                    spellCheck={false}
                    autoComplete="off"
                  />
                </div>
                {isProcessing && (
                  <div className="text-emerald-400/50 animate-pulse text-xs mt-1">
                    Processing...
                  </div>
                )}
                <div ref={bottomRef} />
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
