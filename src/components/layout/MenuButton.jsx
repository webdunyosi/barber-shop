import React from 'react';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const MenuButton = ({ isOpen, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="md:hidden relative z-50 p-2 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 text-white transition-all duration-300 border border-emerald-500/40 hover:border-emerald-500/60"
      aria-label={isOpen ? "Menyuni yopish" : "Menyuni ochish"}
      aria-expanded={isOpen}
    >
      <div className="relative w-6 h-6 flex items-center justify-center">
        {/* Icon transitions */}
        <HiMenuAlt3 
          className={`absolute transition-all duration-300 ${
            isOpen ? 'opacity-0 rotate-180 scale-0' : 'opacity-100 rotate-0 scale-100'
          }`} 
          size={24} 
        />
        <HiX 
          className={`absolute transition-all duration-300 ${
            isOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-180 scale-0'
          }`} 
          size={24} 
        />
      </div>
    </button>
  );
};

export default MenuButton;
