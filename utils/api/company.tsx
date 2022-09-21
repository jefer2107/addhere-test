import { Company } from "@prisma/client";
import { prisma } from "../../pages/api/auth/[...nextauth]";

export const companyCreate = async (data: Company) => {
  try {
    const res = await prisma.company.create({ data });
    return res;
  } catch (e) {
    console.log("companyCreate", e.message);
  }
  return null;
};

export const companyGetAll = async () => {
  const res = await prisma.company.findMany();
  return res;
};

export const companyGet = async (id: number, userId: string) => {
  const res = await prisma.company.findFirst({
    where: {
      id,
      userId,
    },
  });
  return res;
};
