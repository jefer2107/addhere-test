import { CoreCare, Patient } from "@prisma/client";
import { getSession } from "next-auth/react";
import { patientGetByUserId, patientGetByUserIdWithEvolutions } from "../../../../utils/api/patient";

export default async function UserHandler(
  req: any,
  res: {
    status: (arg0: number) => {
      (): any;
      new (): any;
      json: {
        (
          arg0:
            | (CoreCare & {
                Patient: Patient;
              })[]
            | null
        ): void;
        new (): any;
      };
      end: { (arg0: string): void; new (): any };
    };
    setHeader: (arg0: string, arg1: string[]) => void;
  }
): Promise<void> {
  const { query, method, body } = req;
  const session = await getSession({ req });

  // if (!session) {
  //   // Not Signed in
  //   return res.status(401).end(`Unauthorized!`);
  // }

  const { userId } = query;
  console.log(`userId`, userId)
  if (typeof userId !== "string") {
    return res.status(404).end("invalid id:");
  }

  switch (method) {
    case "GET":
      const patients = await patientGetByUserIdWithEvolutions(userId);
      return res.status(200).json(patients);
    default:
      res.setHeader("Allow", ["GET"]);
      return res.status(405).end(`Method ${method} Not Allowed`);
  }
}
