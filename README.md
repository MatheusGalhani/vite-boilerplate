# React + Vite + TypeScript Template (vite-boilerplate)

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/MatheusGalhani/vite-boilerplate/blob/main/LICENSE)

A React + Vite template using shadcn/ui.

## 🎉 Features

- **React** - A JavaScript library for building user interfaces.
- **Vite** - A fast, opinionated frontend build tool.
- **TypeScript** - A typed superset of JavaScript that compiles to plain JavaScript.
- **Tailwind CSS** - A utility-first CSS framework (`v4`).
- **Tailwind Prettier Plugin** - A Prettier plugin for formatting Tailwind CSS classes.
- **ESLint** - A pluggable linting utility for JavaScript and TypeScript.
- **shadcn/ui** - Beautifully designed components that you can copy and paste into your apps.
- **Zustand v4** - A small, fast and scalable bearbones state-management solution.
- **React Router v6** - Declarative routing for React with nested routes and data loading.


## ⚙️ Prerequisites

Make sure you have the following installed on your development machine:

- Node.js (version 22 or above)
- yarn (package manager)

## 🚀 Getting Started

Follow these steps to get started with the vite-boilerplate template:

1. Clone the repository:

   ```bash
   git clone https://github.com/MatheusGalhani/vite-boilerplate.git
   ```

2. Navigate to the project directory:

   ```bash
   cd vite-boilerplate
   ```

3. Install the dependencies:

   ```bash
   yarn
   ```

4. Start the development server:

   ```bash
   yarn dev
   ```

## 📜 Available Scripts

- yarn dev - Starts the development server.
- yarn build - Builds the production-ready code.
- yarn lint - Runs ESLint to analyze and lint the code.
- yarn preview - Starts the Vite development server in preview mode.

## 📂 Project Structure

The project structure follows a standard React application layout:

```python
vite-boilerplate/
├── node_modules/         # Módulos instalados via npm/yarn
├── public/               # Arquivos públicos (favicon, etc.)
├── src/                  # Código-fonte da aplicação
│   ├── assets/           # Imagens, ícones, SVGs etc.
│   ├── components/       # Componentes reutilizáveis
│   │   └── ui/           # Componentes visuais da UI
│   ├── lib/              # Funções utilitárias
│   ├── pages/            # Páginas principais da aplicação
│   ├── routers/          # Definição de rotas da aplicação
│   ├── stores/           # Gerenciamento de estado (ex: Zustand)
│   ├── styles/           # Estilos globais e utilitários
│   ├── App.tsx           # Componente principal da aplicação
│   ├── main.tsx          # Ponto de entrada do React
│   └── vite-env.d.ts     # Tipagens para o ambiente Vite
├── .gitignore            # Arquivos/diretórios ignorados pelo Git
├── components.json       # Configurações de componentes (Shadcn/UI)
├── eslint.config.js      # Configuração do ESLint
├── index.html            # Arquivo HTML principal
├── LICENSE               # Licença do projeto
├── package.json          # Scripts e dependências npm/yarn
├── tsconfig.json         # Configuração base do TypeScript
├── tsconfig.app.json     # TS para código da aplicação
├── tsconfig.node.json    # TS para código de Node.js (se necessário)
├── vite.config.ts        # Configuração do Vite
└── yarn.lock             # Versões travadas de dependências (yarn)
```

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](https://choosealicense.com/licenses/mit/) file for details.
