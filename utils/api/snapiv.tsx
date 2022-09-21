import { SnapIv } from "@prisma/client";
import { prisma } from "../../pages/api/auth/[...nextauth]";

export const snapIvCreate = async (data: SnapIv) => {
  try {
    const res = await prisma.snapIv.create({ data });
    return res;
  } catch (e) {
    console.log("snapIvCreate", e.message);
  }
  return null;
};

export const snapIvGet = async (id: number, userId: string) => {
  const res = await prisma.snapIv.findFirst({
    where: {
      id,
      userId,
    },
  });
  return res;
};
