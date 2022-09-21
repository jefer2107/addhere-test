import { CoreCare, Patient, SnapIv } from "@prisma/client";
import { prisma } from "../../pages/api/auth/[...nextauth]";

export const patientGetByUserId = async (
  userId: string
): Promise<Patient[]> => {
  try {
    const res = await prisma.coreCare.findMany({
      where: { userId },
      include: {
        Patient: true,
      },
    });
    return res.map((m) => m.Patient);
  } catch (err) {
    console.error("patientGetByUserId", err.message);
  }
  return null;
};

export const patientGetByUserIdWithEvolutions = async (
  userId: string
): Promise<
  { Patient: Patient & {SnapIv: SnapIv[];} }[]
> => {
  try {
    const res = await prisma.coreCare.findMany({
      where: { userId },
      include: {
        Patient: {
          include: {
            SnapIv: true,
          },
        },
      },
    });
    return res.map((m) => m.Patient);
  } catch (err) {
    console.error("patientGetByUserId", err.message);
  }
  return null;
};

export const patientGetById = async (id: string) => {
  try {
    const res = await prisma.user.findUnique({ where: { id } });
    return res;
  } catch (err) {
    console.error("patientGetById", err.message);
  }
  return null;
};
