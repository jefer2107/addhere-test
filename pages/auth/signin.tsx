import React, { useEffect, useState } from "react";
import { getProviders, signIn } from "next-auth/react";
import { getCsrfToken } from "next-auth/react";
import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Input,
  makeStyles,
  Typography,
  useTheme,
} from "@material-ui/core";
import { IProps } from "../../interfaces/IProps";
import LockRoundedIcon from "@material-ui/icons/LockRounded";
import FBLogin from "../../components/facebook/FBLogin";
import { useRouter } from "next/router";
import { appRoutes } from "../../utils/data/routes";
import { useSession } from '../../utils/next-auth-react-query';

const useStyles = makeStyles((theme) => ({
  root: {
    display: "grid",
    gap: 20,
    width: "100%",
    height: "100%",
    margin: "auto",
    overflowX: "hidden",
    overflowY: "auto",
    padding: 0,
    background: theme.palette.background.paper,
  },
  container: {
    display: "grid",
    textAlign: "center",
    width: "60%",
    minWidth: 350,
    margin: "auto",
    overflowX: "hidden",
    overflowY: "auto",
    padding: 10,
    marginTop: 10,
    background: theme.palette.background.paper,
  },
  form: {
    display: "grid",
    gap: 10,
    paddingTop: 10,
    maxWidth: 500,
    width: "100%",
    margin: "auto",
    marginBottom: 200,
  },
  login: {
    display: "grid",
    gridTemplateColumns: "1fr",
    justifyContent: "center",
    gap: 10,
    width: "100%",
    height: "100%",
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.8em",
    },
  },
  icon: {
    fontSize: 120,
    color: theme.palette.primary.main,
    background:
      "-webkit-gradient(linear, left top, left bottom, from(#f00), to(#333))",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    textAlign: "center",
    margin: "auto",
    maxWidth: 100,
    fontWeight: theme.typography.fontWeightBold,
    [theme.breakpoints.down("sm")]: {
      fontSize: 120,
    },
  },
  description: {
    color: theme.palette.grey[500],
    textAlign: "center",
    fontWeight: theme.typography.fontWeightBold,
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.h6.fontSize,
    },
  },
  title: {
    color: theme.palette.primary.light,
    textAlign: "center",
    textTransform: "uppercase",
    fontSize: theme.typography.h4.fontSize,
    fontWeight: theme.typography.fontWeightBold,
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.h4.fontSize,
    },
  },
  divBtn: {
    width: "100%",
  },
  btnFacebook: {
    backgroundColor: "#29487D",
    color: "white",
    borderRadius: 12,
    maxWidth: 500,
    margin: 0,
  },
  btnEmail: {
    color: "white",
    borderRadius: 12,
  },
  privacy: {
    color: theme.palette.primary.light,
  },
  link: {
    color: theme.palette.primary.main,
    "&:hover": {
      color: theme.palette.primary.dark,
      textDecoration: "underline",
    },
  },
  ouEntao: {
    color: theme.palette.grey[400],
    padding: 0,
    margin: 0,
  },
}));

interface ISignInProps extends IProps {
  propProviders: any;
  csrfToken: any;
}

const SignIn: React.FC<ISignInProps> = ({
  propProviders,
  csrfToken,
  setTitle,
  setShowMenu,
  setShowSearch,
  setIsMainLoading,
}) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  useEffect(() => {
    setIsMainLoading(false);
    setTitle("Login");
    setShowMenu(false);
    setShowSearch(false);

    const listener = (event: { code: string }) => {
      if (event.code === "Enter" || event.code === "NumpadEnter") {
        const form: any = document.getElementById("form");
        form.submit();
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, [setIsMainLoading, setTitle, setShowMenu, setShowSearch]);

  const [session] = useSession();
  const [checked, setIsChecked] = useState(false);
  const [isValid, setIsValid] = useState(false);

  const router = useRouter();
  if (session?.user) {
    router.push(appRoutes.HOME);
  }

  const handleChange = (e: { currentTarget: { value: string } }) => {
    const name: any = document.getElementById("name");
    let strName: string = e.currentTarget.value || "";
    setIsValid(
      strName.indexOf("@") > 0 && strName.length > 3 && strName.indexOf(".") > 0
    );
    strName = strName.split("@")[0];
    name.value = strName;
  };

  const handleCheckedChange = () => {
    setIsChecked(!checked);
  };

  return (
    <div id="fcSignin" className={`${classes.root} max-w-5xl`}>
      <div className={classes.container}>
        <div className={classes.login}>
          <LockRoundedIcon className={classes.icon} />

          <Typography className={classes.title} variant="h4">
            Faça o seu login:
          </Typography>
          <Typography className={classes.description} variant="h5">
            Entre através de seu perfil no Facebook, ou então por meio de um
            link que será disparado para seu e-mail.
          </Typography>
          <FormGroup row>
            <FormControlLabel
              control={
                <Checkbox
                  checked={checked}
                  onChange={handleCheckedChange}
                  name="checked"
                />
              }
              label={
                <span>
                  Você concorda com a{" "}
                  <a
                    className={classes.link}
                    href={appRoutes.PRIVACY_POLICY}
                    target="_blank"
                    rel="noreferrer"
                    title="política de privacidade"
                  >
                    Política de Privacidade
                  </a>
                  .
                </span>
              }
            />
          </FormGroup>
        </div>

        {checked && (
          <>
            {Object.values(propProviders)
              .filter((f: any) => f.type !== "email")
              .map((provider: any) => (
                <div key={provider.name} className={classes.divBtn}>
                  <Button
                    className={classes.btnFacebook}
                    fullWidth
                    onClick={() => {
                      setIsMainLoading(true);
                      signIn(provider.id);
                    }}
                    variant="contained"
                  >
                    Entrar com o {provider.name} 
                  </Button>
                </div>
              ))}

            <FBLogin width="100%"></FBLogin>

            <Typography className={classes.ouEntao} variant="h6" align="center">
              ou então
            </Typography>

            {/*<form
              id="form"
              className={classes.form}
              method="post"
              action="/api/auth/signin/email"
            >
              <input name="csrfToken" type="hidden" defaultValue={csrfToken} />

              <input id="name" name="name" type="hidden" defaultValue="" />

              <Input
                type="email"
                id="email"
                name="email"
                placeholder="Digite seu e-mail"
                onChange={handleChange}
              />

              <Button
                className={classes.btnEmail}
                type="submit"
                variant="contained"
                color="secondary"
                onClick={() => setIsMainLoading(true)}
                disabled={!isValid}
              >
                Entrar pelo e-mail
              </Button>
                  </form>*/}
          </>
        )}
      </div>
    </div>
  );
};

export async function getServerSideProps(context: any) {
  const propProviders = await getProviders();
  console.log(propProviders);
  const csrfToken = await getCsrfToken(context);
  return {
    props: { propProviders, csrfToken },
  };
}

export default SignIn;
