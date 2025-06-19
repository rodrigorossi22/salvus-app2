
import React from 'react';

const SalvusLogo = ({ className = "w-64 h-auto" }: { className?: string }) => {
  return (
    <div className={`${className} flex flex-col items-center justify-center`}>
      <img 
        src="./lovable-uploads/c20b8396-9938-4738-9eec-dfe248f5cc75.png" 
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
