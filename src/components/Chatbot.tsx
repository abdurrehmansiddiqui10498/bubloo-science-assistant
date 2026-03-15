import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { ChatButton } from "./ChatButton";
import { ChatWindow } from "./ChatWindow";

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <AnimatePresence>
        {isOpen && <ChatWindow onClose={() => setIsOpen(false)} />}
      </AnimatePresence>
      {!isOpen && <ChatButton onClick={() => setIsOpen(true)} />}
    </>
  );
}
