import { getSession, signIn } from "next-auth/react";
import { appRoutes } from "../../utils/data/routes";

export async function getServerSideProps(context: any) {
  const session = await getSession(context);
  const isAuthenticated = session;

  let protectedRoutes = [appRoutes.ADD_POST_COMMENT, appRoutes.MESSAGES];
  let pathIsProtected = (protectedRoutes?.indexOf(context.pathname) || -1) >= 0;

  if (!isAuthenticated && pathIsProtected) {
    signIn();
  }

  return {
    props: { session },
  };
}
