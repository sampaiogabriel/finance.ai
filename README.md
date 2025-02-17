# FinanceAI

Este repositório contém o projeto **FinanceAI**, desenvolvido durante a Full Stack Week. O objetivo do projeto é fornecer uma plataforma financeira que utiliza Inteligência Artificial para auxiliar os usuários na gestão de suas finanças pessoais.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **Next.js 13**: Framework React que oferece renderização do lado do servidor e geração de sites estáticos.
- **Next Auth**: Biblioteca para autenticação de usuários com suporte a OAuth.
- **PostgreSQL**: Sistema de gerenciamento de banco de dados relacional.
- **Prisma**: ORM para Node.js e TypeScript que facilita o acesso ao banco de dados.
- **shadcn/ui**: Biblioteca de componentes de interface do usuário reutilizáveis e estilizados.
- **Tailwind CSS**: Framework CSS utilitário para estilização rápida e consistente.
- **Stripe API**: Plataforma de pagamentos online para processar transações de forma segura.

## Funcionalidades

- **Dashboard Financeira**: Visualize e gerencie suas finanças em um painel intuitivo.
- **Análise de Despesas**: Obtenha insights sobre seus gastos e identifique áreas de economia.
- **Previsão Financeira com IA**: Receba previsões personalizadas baseadas em seus hábitos financeiros.
- **Autenticação Segura**: Proteja suas informações com sistemas de login e registro robustos.
- **Integração com Pagamentos**: Gerencie transações e pagamentos através da integração com a API do Stripe.

## Instalação e Uso

1. **Clone o repositório**:

   ```bash
   git clone https://github.com/sampaiogabriel/finance.ai.git
   ```

2. **Instale as dependências**:

   ```bash
   cd fullstackweek-financeai
   npm install
   ```

3. **Configure as variáveis de ambiente**:

   Crie um arquivo `.env` na raiz do projeto e defina as seguintes variáveis:

   ```env
   DATABASE_URL=suabase_de_dados_url
   NEXTAUTH_URL=sua_url_de_autenticacao
   STRIPE_API_KEY=sua_chave_api_stripe
   ```

4. **Execute as migrações do banco de dados**:

   ```bash
   npx prisma migrate dev
   ```

5. **Inicie o servidor de desenvolvimento**:

   ```bash
   npm run dev
   ```

   O aplicativo estará disponível em `http://localhost:3000`.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests. Antes de contribuir, por favor, leia o arquivo `CONTRIBUTING.md` para entender as diretrizes do projeto.

## Licença

Este projeto está licenciado sob a Licença MIT. Consulte o arquivo `LICENSE` para mais informações.
