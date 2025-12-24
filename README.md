📒 Note App Backend — API REST em Node.js + TypeScript

API RESTful para gerenciamento de notas pessoais, com autenticação JWT, controle por usuário e persistência em MongoDB.

Projeto desenvolvido com foco em boas práticas de backend, arquitetura limpa e padrões utilizados no mercado.

🚀 Tecnologias Utilizadas

Node.js

TypeScript

Express

MongoDB + Mongoose

JWT (JSON Web Token)

bcryptjs

dotenv

express-validator

Cors

🧠 Funcionalidades
🔐 Autenticação

Cadastro de usuário

Login com email e senha

Senhas criptografadas

Autenticação via JWT

Middleware de proteção de rotas

📝 Notas

Criar notas

Listar notas do usuário autenticado

Atualizar notas

Deletar notas

Notas associadas ao usuário

Campo de categoria, tags, cor e fixação

Busca por texto (title/content)

Ordenação por data

📁 Estrutura do Projeto
src/
 ├── config/
 │   └── database.ts
 ├── controllers/
 │   ├── authController.ts
 │   └── noteController.ts
 ├── middleware/
 │   └── authMiddleware.ts
 ├── models/
 │   ├── User.ts
 │   └── Note.ts
 ├── routes/
 │   ├── authRoutes.ts
 │   └── noteRoutes.ts
 ├── types/
 │   └── index.ts
 └── server.ts

⚙️ Configuração do Ambiente
1️⃣ Clonar o repositório
git clone https://github.com/SEU_USUARIO/note-app-backend.git
cd note-app-backend

2️⃣ Instalar dependências
npm install

3️⃣ Criar arquivo .env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/noteapp
JWT_SECRET=sua_chave_secreta
NODE_ENV=development

4️⃣ Rodar o projeto
npm run dev


Servidor disponível em:

http://localhost:5000

🔑 Autenticação (JWT)

Após o login, a API retorna um token JWT.
Esse token deve ser enviado no header das requisições protegidas:

Authorization: Bearer SEU_TOKEN_AQUI

📌 Endpoints Principais
Auth
Método	Rota	Descrição
POST	/api/auth/register	Registrar usuário
POST	/api/auth/login	Login
Notes (rotas protegidas)
Método	Rota	Descrição
POST	/api/notes	Criar nota
GET	/api/notes	Listar notas
PUT	/api/notes/:id	Atualizar nota
DELETE	/api/notes/:id	Deletar nota
🧪 Testes com Postman

Todas as rotas foram testadas manualmente com Postman

Autenticação via Bearer Token

Respostas padronizadas em JSON

Códigos HTTP adequados

📈 Melhorias Planejadas

Validação avançada de dados

Middleware global de erros

Paginação de resultados

Testes automatizados (Jest + Supertest)

Deploy em ambiente de produção

Integração com frontend React

👨‍💻 Autor

Alexandre Diógenes
Desenvolvedor Backend | Node.js | TypeScript | MongoDB

📌 Projeto criado para fins de aprendizado, portfólio e demonstração de boas práticas em desenvolvimento backend.

⭐ Diferenciais do Projeto (para recrutadores)

TypeScript com tipagem forte

Separação clara de responsabilidades

Autenticação segura

Código organizado e escalável

Padrões reais de mercado

Histórico de commits bem estruturado
