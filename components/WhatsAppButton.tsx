
import React from 'react';
import { WhatsAppIcon } from './icons/Icons';

const WhatsAppButton: React.FC = () => (
  <div className="fixed bottom-6 right-6 z-50">
    <a
      href="https://wa.me/923009464789"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center w-14 h-14 rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 hover:scale-110 transition-all duration-300"
      aria-label="Chat on WhatsApp"
      title="WhatsApp"
    >
      <WhatsAppIcon />
    </a>
  </div>
);

export default WhatsAppButton;
