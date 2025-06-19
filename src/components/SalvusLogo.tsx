
import React from 'react';

const SalvusLogo = ({ className = "w-64 h-auto" }: { className?: string }) => {
  return (
    <div className={`${className} flex flex-col items-center justify-center`}>
      <img 
        src="/salvus-app2/lovable-uploads/bd722c2b-f471-4a23-a1a7-793a63918781.png" 
        alt="Clínica Salvus - Medicina e Estética Afetiva" 
        className="w-full h-auto object-contain"
        onError={(e) => {
          console.log('Erro ao carregar imagem do logo');
          e.currentTarget.style.display = 'none';
        }}
      />
    </div>
  );
};

export default SalvusLogo;
