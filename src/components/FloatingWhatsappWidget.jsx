import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { X } from "lucide-react";

const FloatingWhatsappWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-24 right-6 z-50 flex flex-col items-end">
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition transform hover:scale-105 animate-bounce"
        aria-label="Chat on WhatsApp"
      >
        {isOpen ? <X size={22} /> : <FaWhatsapp size={28} />}
      </button>

      {/* Chatbox */}
      {isOpen && (
        <div className="mt-3 w-72 sm:w-80 bg-white text-black rounded-xl shadow-xl border border-gray-200 overflow-hidden animate-slide-in-up">
          <div className="p-4 bg-green-500 text-white font-semibold">
            👋 Let’s Chat on WhatsApp
          </div>
          <div className="p-4 space-y-2 text-sm">
            <p>Hi there! 👋</p>
            <p>I’m here to help. Click below to chat directly on WhatsApp!</p>
            <a
              href="https://wa.me/919382988462?text=Hi%20Dipanshu%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect!"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full mt-2 px-4 py-2 text-center bg-green-500 hover:bg-green-600 text-white rounded-md font-semibold transition"
            >
              💬 Start WhatsApp Chat
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default FloatingWhatsappWidget;
