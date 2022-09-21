import { SnapIv } from "@prisma/client";
import { getSession } from "next-auth/react";
import { snapIvGet, snapIvCreate } from "../../../utils/api/snapiv";

export default async function snapIvHandler(
  req: any,
  res: {
    status: (arg0: number) => {
      (): any;
      new (): any;
      json: { (arg0: SnapIv | null): void; new (): any };
      end: { (arg0: string): void; new (): any };
    };
    setHeader: (arg0: string, arg1: string[]) => void;
  }
): Promise<void> {
  const { query, method, body } = req;

  const session = await getSession({ req });
  // if (!session) {
  //   // Not Signed in
  //   res.status(401).end(`Unauthorized!`);
  // }

  switch (method) {
    case "GET":
      // Get data from your database
      const userId = session ? (session.user as any).id : null;
      if (!userId) {
        res.status(405).end(`Method ${method} Not Allowed`);
      }
      const snapIv = await snapIvGet(query.id, userId);
      res.status(200).json(snapIv);
      break;
    case "PUT":
      // Update or create data in your database
      const snapIvNew = await snapIvCreate(body);
      res.status(200).json(snapIvNew);
      break;
    default:
      res.setHeader("Allow", ["GET", "PUT"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
