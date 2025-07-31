import { PrismaClient } from '../generated/prisma/';

export const prisma = new PrismaClient();

// Export all Prisma types
export * from '../generated/prisma/';