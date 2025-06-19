
import React from 'react';
import SalvusLogo from '@/components/SalvusLogo';
import DriveButton from '@/components/DriveButton';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();

  const handleFeedback = (folderName: string) => {
    toast({
      title: "Pasta Aberta",
      description: `Redirecionando para ${folderName}`,
      duration: 2000,
    });
  };

  console.log('Index component carregando...');

  return (
    <div className="min-h-screen bg-[#172643] flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Fundo com gradiente sutil */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#172643] via-[#172643] to-blue-900/50"></div>
      
      {/* Elementos decorativos de fundo */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-[#B8860B]/5 rounded-full blur-xl"></div>
      <div className="absolute bottom-32 right-16 w-32 h-32 bg-[#B8860B]/5 rounded-full blur-xl"></div>
      
      <div className="relative z-10 w-full max-w-md mx-auto space-y-8">
        {/* Logo da Clínica */}
        <div className="text-center mb-12">
          <SalvusLogo className="w-72 h-auto mx-auto mb-4" />
          <div className="w-16 h-1 bg-[#B8860B] mx-auto rounded-full"></div>
        </div>

        {/* Título */}
        <div className="text-center mb-8">
          <h1 className="text-white text-2xl font-light mb-2">Gestão de Documentos</h1>
          <p className="text-white/70 text-sm">Acesso rápido às suas pastas</p>
        </div>

        {/* Botões de Acesso */}
        <div className="space-y-4">
          <DriveButton
            title="Comprovantes Pagamentos Vendas"
            description="Adicionar comprovantes de pagamentos e vendas"
            url="https://drive.google.com/drive/folders/1r0aN825OYzkk14hjlhs9vXzi_aKq7tbK?usp=sharing"
          />
          
          <DriveButton
            title="Notas Fiscais"
            description="Adicionar e organizar notas fiscais"
            url="https://drive.google.com/drive/folders/179JTvFAL8BNTYRi-ZEQUfyPLYaSqyDkO?usp=drive_link"
          />
        </div>

        {/* Instrução */}
        <div className="text-center mt-8">
          <p className="text-white/60 text-xs leading-relaxed">
            Toque em uma pasta para abrir no Google Drive e adicionar seus documentos
          </p>
        </div>
      </div>

      {/* Rodapé */}
      <div className="absolute bottom-4 left-0 right-0 text-center">
        <p className="text-white/40 text-xs">Clínica Salvus © 2024</p>
      </div>
    </div>
  );
};

export default Index;
