import React, { useState, useRef, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { X } from "lucide-react";

const FloatingSmartDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const drawerRef = useRef(null);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isOpen && drawerRef.current && !drawerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <div className="fixed bottom-24 right-0 z-50">
      {/* Peek Button */}
      {!isOpen && (
        <div className="group relative">
          <button
            onClick={() => setIsOpen(true)}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-l-full shadow-lg transition-all duration-300 ease-in-out group-hover:scale-105 group-hover:shadow-2xl"
            aria-label="Open WhatsApp Chat"
          >
            <FaWhatsapp size={22} />
          </button>

          {/* Tooltip */}
          <span className="absolute right-full top-1/2 -translate-y-1/2 mr-3 px-2 py-1 text-xs rounded bg-black text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-md">
            Click to Chat
          </span>
        </div>
      )}

      {/* Drawer Panel */}
      {isOpen && (
        <div
          ref={drawerRef}
          className="w-72 sm:w-80 bg-white text-black rounded-xl shadow-2xl border border-gray-200 overflow-hidden animate-slide-in-from-right relative"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 bg-green-500 text-white font-semibold shadow-sm">
            <span>👋 Let’s Chat on WhatsApp</span>
            <button onClick={() => setIsOpen(false)} aria-label="Close">
              <X size={20} />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 space-y-3 text-sm">
            <p>Hi there! 👋</p>
            <p>
              I’m here to help. Click the button below to start a chat with me on WhatsApp!
            </p>
            <a
              href="https://wa.me/919382988462?text=Hi%20Dipanshu%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect!"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center mt-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-md transition"
            >
              💬 Start Chat
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default FloatingSmartDrawer;
