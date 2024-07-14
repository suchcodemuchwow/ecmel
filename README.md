# Ecmel </br>

[//]: # (<a href="https://trendshift.io/repositories/8929" target="_blank"><img src="https://trendshift.io/api/badge/repositories/8929" alt="ecmel%2Fecmel | Trendshift" style="width: 250px; height: 55px;" width="250" height="55"/></a>)

[![GitHub Actions Workflow Status][check-workflow-badge]][check-workflow-badge-link] [![GitHub License][github-license-badge]][github-license-badge-link] 
![COMMIT_ACTIVITY](https://img.shields.io/github/commit-activity/m/suchcodemuchwow/ecmel?style=for-the-badge">)
[![Visitors](https://api.visitorbadge.io/api/visitors?path=https%3A%2F%2Fgithub.com%2Fsuchcodemuchwow%2Fecmel&label=visitors&countColor=%23a3027f&style=flat)](https://visitorbadge.io/status?path=https%3A%2F%2Fgithub.com%2Fsuchcodemuchwow%2Fecmel)

An easy-to-use and enterprise-grade Next.js boilerplate.

You don't need to buy templates anymore; Ecmel provides a complete, open-source solution for building SaaS applications quickly and easily.

## 🌟 Star History

[![Star History Chart](https://api.star-history.com/svg?repos=ecmel/ecmel&type=Timeline)](https://star-history.com/#ecmel/ecmel&Timeline)

## 🚀 Getting Started

### 🖱 One Click Template

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fecmel%2Fecmel&env=NEXT_PUBLIC_APP_URL,NEXTAUTH_URL,NEXTAUTH_SECRET,STRIPE_API_KEY,STRIPE_WEBHOOK_SECRET,POSTGRES_URL,GITHUB_CLIENT_ID,GITHUB_CLIENT_SECRET,RESEND_API_KEY,RESEND_FROM&install-command=bun%20install&build-command=bun%20run%20build&root-directory=apps%2Fnextjs)

### 📋 Prerequisites

Before you start, make sure you have the following installed:

1. [Bun](https://bun.sh/) & [Node.js](https://nodejs.org/) & [Git](https://git-scm.com/)

   1. Linux

    ```bash
      curl -sL https://gist.github.com/tianzx/874662fb204d32390bc2f2e9e4d2df0a/raw -o ~/downloaded_script.sh && chmod +x ~/downloaded_script.sh && source ~/downloaded_script.sh
    ```

   2. MacOS

    ```bash
      /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
      brew install git
      brew install oven-sh/bun/bun
      brew install nvm
    ```

2. [PostgreSQL](https://www.postgresql.org/)
   1. You can use Vercel Postgres or a local PostgreSQL server(add POSTGRES_URL env in .env.local)
      ```bash
         POSTGRES_URL = ''
      ```

### Installation

To get started with this boilerplate, we offer two options:

1. Use the `bun create` command(🌟Strongly recommend🌟):

```bash
bun create ecmel 
```

2. Manually clone the repository:

```bash
git clone https://github.com/suchcodemuchwow/ecmel.git
cd ecmel
bun install
```

### Setup

Follow these steps to set up your project:

1. Set up the environment variables:

```bash
cp .env.example .env.local
// (you must have a database prepared before running this command)
bun db:push
```

2. Run the development server:

```bash
bun run dev:web
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

4. (Optional alpha)`bun run tailwind-config-viewer` Open [http://localhost:3333](http://localhost:3333) in your browser to see your Tailwind CSS configuration


## ⭐ Features

### 🐭 Frameworks

- **[Next.js](https://nextjs.org/)** - The React Framework for the Web (with **App Directory**)
- **[NextAuth.js](https://next-auth.js.org/)** - Authentication for Next.js
- **[Kysely](https://kysely.dev/)** - The type-safe SQL query builder for TypeScript
- **[React-email](https://react.email/)** - A React renderer for creating beautiful emails using React components

### 🐮 Platforms

- **[Vercel](https://vercel.com/)** – Deploy your Next.js app with ease
- **[Stripe](https://stripe.com/)** – Payment processing for internet businesses
- **[Resend](https://resend.com/)** – Email marketing platform for developers

### 🐯 Enterprise Features

- **[i18n](https://nextjs.org/docs/app/building-your-application/routing/internationalization)** - Support for internationalization
- **[SEO](https://nextjs.org/docs/app/building-your-application/optimizing/metadata)** - Search engine optimization
- **[MonoRepo](https://turbo.build/)** - Monorepo for better code management
- **[T3 Env](https://env.t3.gg/)** - Manage your environment variables with ease

### 🐰 Data Fetching

- **[trpc](https://trpc.io/)** – End-to-end typesafe APIs made easy
- **[tanstack/react-query](https://react-query.tanstack.com/)** – Hooks for fetching, caching and updating asynchronous data in React

### 🐲 Global State Management

- **[Zustand](https://zustand.surge.sh/)** – Small, fast and scalable state management for React

### 🐒 UI

- **[Tailwind CSS](https://tailwindcss.com/)** – Utility-first CSS framework for rapid UI development
- **[Shadcn/ui](https://ui.shadcn.com/)** – Re-usable components built using Radix UI and Tailwind CSS
- **[Framer Motion](https://framer.com/motion)** – Motion library for React to animate components with ease
- **[Lucide](https://lucide.dev/)** – Beautifully simple, pixel-perfect icons
- **[next/font](https://nextjs.org/docs/basic-features/font-optimization)** – Optimize custom fonts and remove external network requests for improved performance

### 🐴 Code Quality

- **[TypeScript](https://www.typescriptlang.org/)** – Static type checker for end-to-end type safety
- **[Prettier](https://prettier.io/)** – Opinionated code formatter for consistent code style
- **[ESLint](https://eslint.org/)** – Pluggable linter for Next.js and TypeScript
- **[Husky](https://typicode.github.io/husky)** – Git hooks made easy

### 🐑 Performance

- **[Vercel Analytics](https://vercel.com/analytics)** – Real-time performance metrics for your Next.js app
- **[bun.sh](https://bun.sh/)** – npm alternative for faster and more reliable package management

### 🐘 Database

- **[PostgreSQL](https://www.postgresql.org/)** – The world's most advanced open source database

## 📦 Apps and Packages

- `web`: The main Next.js application
- `ui`: Shared UI components
- `db`: Database schema and utilities
- `auth`: Authentication utilities
- `email`: Email templates and utilities

## 📜 License

This project is licensed under the MIT License. For more information, see the [LICENSE](./LICENSE) file.

## 🙏 Credits

## 👨‍💻 Contributors

<a href="https://github.com/suchcodemuchwow/ecmel/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=suchcodemuchwow/ecmel" />
</a>

Made with [contrib.rocks](https://contrib.rocks).

[//]: # (Made with [contrib.rocks]&#40;https://contrib.rocks&#41;.)

<!-- Badges and links -->

[check-workflow-badge]: https://img.shields.io/github/actions/workflow/status/suchcodemuchwow/ecmel/ci.yml?label=ci
[github-license-badge]: https://img.shields.io/badge/License-MIT-green.svg

[check-workflow-badge-link]: https://github.com/suchcodemuchwow/ecmel/actions/workflows/check.yml
[github-license-badge-link]: https://github.com/suchcodemuchwow/ecmel/blob/main/LICENSE
