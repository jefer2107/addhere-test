import { appRoutes } from "./data/routes";

export const redirectToLogin = (res: any = null, router: any = null) => {
  console.log("res", res)
  if (res) {
    res.writeHead(302, { Location: appRoutes.LOGIN_PAGE });
    res.end();
    res.finished = true;
  } else {
    router.push(appRoutes.LOGIN_PAGE);
  }
};
