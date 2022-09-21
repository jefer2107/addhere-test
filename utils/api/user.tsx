import { prisma } from "../../pages/api/auth/[...nextauth]";

export const userGetByEmail = async (email: string) => {
  try {
    const res = await prisma.user.findUnique({ where: { email } });
    return res;
  } catch (err) {
    console.error("userGetByEmail", err.message);
  }
  return null;
};

export const userGetById = async (id: string) => {
  try {
    const res = await prisma.user.findUnique({ where: { id } });
    return res;
  } catch (err) {
    console.error("userGetById", err.message);
  }
  return null;
};
