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
- `@repo/db`: Database package with Prisma ORM and type definitions
- `@repo/eslint-config`: ESLint configurations (includes eslint-config-next and eslint-config-prettier)
- `@repo/typescript-config`: TypeScript configurations used throughout the monorepo

All packages and applications are written in 100% [TypeScript](https://www.typescriptlang.org/).

## 🛠️ Utilities and Tools

This project uses the following tools:

- **[TypeScript](https://www.typescriptlang.org/)**: Static type checking
- **[ESLint](https://eslint.org/)**: Code quality and standards
- **[Prettier](https://prettier.io)**: Code formatting
- **[PNPM](https://pnpm.io)**: Fast and disk space efficient package manager
- **[Prisma](https://www.prisma.io/)**: Type-safe database ORM with PostgreSQL

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

#### Database Configuration

The project uses PostgreSQL with Prisma ORM. Add the following to your `.env` file:

```bash
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/infrawatch?schema=public"
```

Replace `username`, `password`, and database name with your PostgreSQL credentials.

### Database Setup

After setting up your environment variables:

```bash
# Generate Prisma client
pnpm db:generate

# Run database migrations
pnpm db:migrate

# For production deployment
pnpm db:migrate:deploy
```

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

- `turbo dev` - Starts development servers (automatically generates Prisma client)
- `turbo build` - Creates production builds (includes Prisma client generation)
- `turbo start` - Starts production servers
- `turbo lint` - Runs code quality checks
- `turbo test` - Runs tests

### Database Commands

- `pnpm db:generate` - Generate Prisma client from schema
- `pnpm db:migrate` - Create and apply database migrations
- `pnpm db:migrate:deploy` - Deploy migrations to production

### Working with Specific Packages using Filtering

```bash
# For web application only
turbo dev --filter=web
turbo build --filter=web

# For UI package
turbo build --filter=@repo/ui
```

## 🔄 Development Workflow

This project follows a structured Git workflow for development. Here's the step-by-step process:

### 1. Create Feature Branch

```bash
# Create and switch to a new feature branch
git checkout -b feature/your-feature-name

# Example: git checkout -b feature/user-authentication
```

### 2. Development Process

```bash
# Make your changes
# Add files
# Test your changes locally

# Stage changes
git add .

# Commit with descriptive message
git commit -m "feat: add user authentication system

- Add login and register components
- Implement JWT token handling
- Add protected route wrapper
- Update navigation for authenticated users"
```

### 3. Push Feature Branch

```bash
# Push branch to remote
git push origin feature/your-feature-name
```

### 4. Create Pull Request

When you push a feature branch, GitHub will provide a link to create a Pull Request:

```
Create a pull request for 'feature/your-feature-name' on GitHub by visiting:
https://github.com/ilcann/infrawatch/pull/new/feature/your-feature-name
```

**Pull Request Template:**
- **Title**: Use conventional commits format (`feat:`, `fix:`, `docs:`, etc.)
- **Description**: Include detailed explanation of changes
- **Add GitHub Copilot as Reviewer**: Always add `@github-copilot` as a reviewer for automated code review

### 5. Review Process

1. **Automated Review**: GitHub Copilot will automatically review your code
2. **Team Review**: Wait for human reviewers to approve
3. **Address Feedback**: Make necessary changes based on review comments
4. **Update PR**: Push additional commits if needed

### 6. Merge Pull Request

After approval, merge the Pull Request:

```bash
# Switch to main branch
git checkout main

# Pull latest changes
git pull origin main

# Merge feature branch (if merging locally)
git merge feature/your-feature-name

# Push merged changes
git push origin main

# Clean up: Delete local feature branch
git branch -d feature/your-feature-name

# Clean up: Delete remote feature branch
git push origin --delete feature/your-feature-name
```

### 📋 Pull Request Checklist

Before creating a Pull Request, ensure:

- [ ] Code follows project conventions
- [ ] All tests pass locally
- [ ] Documentation is updated if needed
- [ ] Commit messages follow conventional format
- [ ] GitHub Copilot is added as reviewer
- [ ] PR description clearly explains the changes
- [ ] No sensitive data is committed

### 🤖 GitHub Copilot Integration

This project uses GitHub Copilot for automated code reviews:

1. **Automatic Assignment**: Copilot is automatically assigned as a reviewer
2. **Code Analysis**: Provides suggestions for code improvements
3. **Security Scanning**: Identifies potential security issues
4. **Best Practices**: Ensures code follows established patterns

To enable Copilot reviews:
- Add `@github-copilot` as a reviewer in every Pull Request
- Address Copilot's suggestions before requesting human review
- Use Copilot's feedback to improve code quality

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

## 🗄️ Database Management with Prisma

This project uses Prisma as the ORM with PostgreSQL database. Here's how to work with the database:

### Using Database Models

All Prisma models are automatically exported from `@repo/db`:

```typescript
// Import types and prisma client
import type { User, Post, Comment } from '@repo/db';
import { prisma } from '@repo/db';

// Create a user
const user = await prisma.user.create({
  data: {
    name: "John Doe",
    email: "john@example.com"
  }
});

// Find users
const users = await prisma.user.findMany();
const user = await prisma.user.findUnique({
  where: { email: "john@example.com" }
});
```

### Adding New Models

1. **Edit the schema** in `packages/db/prisma/schema.prisma`:

```prisma
model Post {
  id        String   @id @default(cuid())
  title     String
  content   String?
  published Boolean  @default(false)
  authorId  String
  author    User     @relation(fields: [authorId], references: [id])
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

model User {
  id        String   @id @default(cuid())
  name      String
  email     String   @unique
  posts     Post[]   // Add relation
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

2. **Generate migration**:

```bash
pnpm db:migrate
# This will prompt you to name your migration
```

3. **Generate Prisma client**:

```bash
pnpm db:generate
# Or just run `pnpm dev` - it's automatic!
```

4. **Use in your apps**:

```typescript
import type { Post, User } from '@repo/db';
import { prisma } from '@repo/db';

// Now you can use the new Post model
const post = await prisma.post.create({
  data: {
    title: "My First Post",
    content: "Hello World!",
    authorId: user.id
  }
});
```

### Turbo Integration

The project is configured so that:

- **Development (`pnpm dev`)**: Automatically generates Prisma client before starting
- **Build (`pnpm build`)**: Ensures Prisma client is generated before building apps
- **Database changes**: Run `pnpm db:generate` or restart dev server

### Environment Variables

Required in your `.env` file:

```bash
# PostgreSQL connection string
DATABASE_URL="postgresql://username:password@localhost:5432/infrawatch?schema=public"

# Example for different environments:
# Local: postgresql://postgres:password@localhost:5432/infrawatch_dev
# Production: postgresql://user:pass@host:5432/infrawatch_prod
```

### Migration Workflow

1. **Development**: Use `pnpm db:migrate` for schema changes
2. **Production**: Use `pnpm db:migrate:deploy` for deployment
3. **Reset database**: `npx prisma migrate reset` (⚠️ This deletes all data!)

## 📚 Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turborepo.com/docs/crafting-your-repository/running-tasks)
- [Caching](https://turborepo.com/docs/crafting-your-repository/caching)
- [Remote Caching](https://turborepo.com/docs/core-concepts/remote-caching)
- [Filtering](https://turborepo.com/docs/crafting-your-repository/running-tasks#using-filters)
- [Configuration Options](https://turborepo.com/docs/reference/configuration)
- [CLI Usage](https://turborepo.com/docs/reference/command-line-reference)
