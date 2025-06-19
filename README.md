
# Clínica Salvus - Aplicativo de Gestão de Documentos

## Sobre o Projeto

Aplicativo móvel desenvolvido para a Clínica Salvus que facilita o acesso rápido às pastas específicas do Google Drive para upload de documentos importantes como comprovantes de pagamentos e notas fiscais.

## Funcionalidades

- **Interface Minimalista**: Design elegante com as cores da marca da Clínica Salvus
- **Acesso Direto**: Dois botões principais para acessar pastas específicas do Google Drive
- **Responsivo**: Otimizado para dispositivos móveis, especialmente iOS
- **Logo Personalizada**: Utiliza a identidade visual oficial da Clínica Salvus

## Pastas de Acesso

1. **Comprovantes Pagamentos Vendas**: Para upload de comprovantes de pagamentos e vendas
2. **Notas Fiscais**: Para organização e upload de notas fiscais

## Tecnologias Utilizadas

- **React** + **TypeScript**: Framework principal
- **Tailwind CSS**: Estilização com cores personalizadas da marca
- **Capacitor**: Para conversão em aplicativo móvel iOS
- **Lucide React**: Ícones
- **Vite**: Build tool

## Como Executar Localmente

```bash
# Instalar dependências
npm install

# Executar em modo desenvolvimento
npm run dev

# Build para produção
npm run build
```

## Deploy Mobile (iOS)

Para criar a versão iOS do aplicativo:

1. **Exportar para GitHub**: Use o botão "Export to Github" no Lovable
2. **Clonar o repositório**: `git pull` do seu repositório GitHub
3. **Instalar dependências**: `npm install`
4. **Adicionar plataforma iOS**: `npx cap add ios`
5. **Atualizar plataforma**: `npx cap update ios`
6. **Build do projeto**: `npm run build`
7. **Sincronizar**: `npx cap sync`
8. **Executar no iOS**: `npx cap run ios`

**Requisitos para iOS:**
- macOS com Xcode instalado
- Conta de desenvolvedor Apple (para distribuição)

## Configuração do Capacitor

O aplicativo está configurado com:
- **App ID**: `app.lovable.669d95b1f1334b81a93a624dcfd190e5`
- **Nome**: `Clínica Salvus`
- **Cor do tema**: `#172643` (azul da marca)

## Links das Pastas Google Drive

- **Comprovantes Pagamentos Vendas**: https://drive.google.com/drive/folders/1r0aN825OYzkk14hjlhs9vXzi_aKq7tbK?usp=sharing
- **Notas Fiscais**: https://drive.google.com/drive/folders/179JTvFAL8BNTYRi-ZEQUfyPLYaSqyDkO?usp=drive_link

## Design

- **Cor Principal**: `#172643` (Azul Salvus)
- **Cor Secundária**: `#B8860B` (Dourado)
- **Logo**: Clínica Salvus oficial
- **Fonte**: Sistema padrão (clean e legível)

## Limitações Técnicas

Devido às restrições de segurança do iOS (sandboxing), o aplicativo não pode automatizar ações dentro do Google Drive. Após abrir uma pasta, o usuário precisará:
1. Tocar no botão "+" dentro do Google Drive
2. Selecionar "Tirar Foto" ou "Fazer upload de arquivo"
3. Adicionar o documento desejado

## Suporte

Para suporte técnico ou modificações, entre em contato com a equipe de desenvolvimento.

---

**Clínica Salvus - Medicina e Estética Afetiva**
