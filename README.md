# InfraWatch

This project is a monorepo structure built using Turborepo. It's optimized for efficient development and build processes.

## 📦 What is Turborepo?

Turborepo is a high-performance build system designed for JavaScript and TypeScript monorepos. It accelerates the development process with intelligent caching and parallel task execution.

## 🏗️ Project Structure

This monorepo includes the following packages and applications:

### Applications
- `apps/web`: Web application built with [Vite](https://vitejs.dev/) + [React](https://reactjs.org/)
- `apps/api`: Express.js API server with TypeScript

### Shared Packages
- `@repo/ui`: React component library used by all applications
- `@repo/eslint-config`: ESLint configurations (includes eslint-config-next and eslint-config-prettier)
- `@repo/typescript-config`: TypeScript configurations used throughout the monorepo

All packages and applications are written in 100% [TypeScript](https://www.typescriptlang.org/).

## 🛠️ Utilities and Tools

This project uses the following tools:

- **[TypeScript](https://www.typescriptlang.org/)**: Static type checking
- **[ESLint](https://eslint.org/)**: Code quality and standards
- **[Prettier](https://prettier.io)**: Code formatting
- **[PNPM](https://pnpm.io)**: Fast and disk space efficient package manager

## 🚀 Getting Started

### Installing Dependencies

```bash
# Install dependencies for the entire monorepo
pnpm install
```

### Environment Setup

Before starting the development environment, you need to set up your environment variables:

```bash
# Copy the example environment file
cp .env.example .env

# Edit the .env file with your specific configuration
# The .env.example file contains all available environment variables with example values
```

**Important**: The `.env` file contains sensitive information and should never be committed to version control. Always use `.env.example` as a template.

### Starting Development Environment

```bash
# Start development server for all applications
pnpm dev

# Or use turbo command
turbo dev

# Run only the web application
turbo dev --filter=web
```

### Building

```bash
# Build all applications and packages
pnpm build

# Or use turbo command
turbo build

# Build only a specific package
turbo build --filter=web
```

### Starting Production

```bash
# Start production server after building
pnpm start

# Or use turbo command
turbo start
```

## 🔧 Turbo Commands

The project supports the following core turbo commands:

- `turbo dev` - Starts development servers
- `turbo build` - Creates production builds
- `turbo start` - Starts production servers
- `turbo lint` - Runs code quality checks
- `turbo test` - Runs tests

### Working with Specific Packages using Filtering

```bash
# For web application only
turbo dev --filter=web
turbo build --filter=web

# For UI package
turbo build --filter=@repo/ui
```

## ☁️ Remote Caching

Turborepo uses [Remote Caching](https://turborepo.com/docs/core-concepts/remote-caching) technology to share build caches between team members and CI/CD pipelines.

### Setting up Remote Cache

1. Login to your Vercel account:
```bash
turbo login
```

2. Link your project with Remote Cache:
```bash
turbo link
```

This significantly reduces build times and enables cache sharing among team members.

## 📚 Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turborepo.com/docs/crafting-your-repository/running-tasks)
- [Caching](https://turborepo.com/docs/crafting-your-repository/caching)
- [Remote Caching](https://turborepo.com/docs/core-concepts/remote-caching)
- [Filtering](https://turborepo.com/docs/crafting-your-repository/running-tasks#using-filters)
- [Configuration Options](https://turborepo.com/docs/reference/configuration)
- [CLI Usage](https://turborepo.com/docs/reference/command-line-reference)
