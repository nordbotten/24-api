import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// TODO: Add soft deletes.

export default prisma;
