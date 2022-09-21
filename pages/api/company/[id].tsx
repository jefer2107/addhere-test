import { Company } from "@prisma/client";
import { getSession } from "next-auth/client";
import { companyGetAll, companyCreate } from "../../../utils/api/company";

export default async function companyHandler(
  req: any,
  res: {
    status: (arg0?: number) => {
      (): any;
      new (): any;
      json: { (arg0: Company | Company[] | null): void; new (): any };
      end: { (arg0: string): void; new (): any };
    };
    setHeader: (arg0: string, arg1: string[]) => void;
  }
): Promise<void> {
  const { query, method, body } = req;

  const session = await getSession({ req });
  if (!session) {
    // Not Signed in
    res.status(401).end(`Unauthorized!`);
  }

  switch (method) {
    case "GET":
      // Get data from your database
      const userId = session ? (session.user as any).id : null;
      if (!userId) {
        res.status(405).end(`Method ${method} Not Allowed`);
      }
      const companies = await companyGetAll();
      res.status(200).json(companies);
      break;
    case "PUT":
      // Update or create data in your database
      const companyNew = await companyCreate(body);
      res.status(200).json(companyNew);
      break;
    default:
      res.setHeader("Allow", ["GET", "PUT"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
