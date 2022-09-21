import { User } from "@prisma/client";
import { getSession } from "next-auth/react";
import { userGetByEmail } from "../../../utils/api/user";

export default async function UserHandler(
  req: any,
  res: {
    status: (arg0: number) => {
      (): any;
      new (): any;
      json: { (arg0: User | null): void; new (): any };
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

  const { email } = query;
  if (typeof email !== "string") {
    return res.status(404).end("invalid email:");
  }

  switch (method) {
    case "GET":
      const user = await userGetByEmail(email);
      return res.status(200).json(user);
    default:
      res.setHeader("Allow", ["GET"]);
      return res.status(405).end(`Method ${method} Not Allowed`);
  }
}
