
import React from 'react';

const SalvusLogo = ({ className = "w-64 h-auto" }: { className?: string }) => {
  return (
    <div className={`${className} flex flex-col items-center justify-center`}>
      <img 
        src="./lovable-uploads/d47e2f8d-f4db-4027-abda-d19aef571774.png" 
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
