
import React from 'react';
import { ExternalLink } from 'lucide-react';

interface DriveButtonProps {
  title: string;
  url: string;
  description?: string;
}

const DriveButton = ({ title, url, description }: DriveButtonProps) => {
  const handleClick = () => {
    console.log(`Abrindo pasta: ${title}`);
    console.log(`URL: ${url}`);
    window.open(url, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="w-full bg-white/10 backdrop-blur-sm border border-salvus-gold/30 rounded-2xl p-6 transition-all duration-300 hover:bg-white/20 hover:border-salvus-gold/50 hover:scale-105 active:scale-95 shadow-lg"
    >
      <div className="flex items-center justify-between">
        <div className="text-left flex-1">
          <h3 className="text-white font-semibold text-lg mb-2">{title}</h3>
          {description && (
            <p className="text-white/80 text-sm">{description}</p>
          )}
        </div>
        <ExternalLink className="text-salvus-gold ml-4 flex-shrink-0" size={24} />
      </div>
    </button>
  );
};

export default DriveButton;
