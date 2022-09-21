import React, { useEffect } from "react";
import { getProviders } from "next-auth/react";
import { getCsrfToken } from "next-auth/react";
import { makeStyles, Typography, useTheme } from "@material-ui/core";
import { IProps } from "../../interfaces/IProps";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import InfoIcon from "@material-ui/icons/Info";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "grid",
    gap: 20,
    width: "100%",
    height: "100%",
    margin: "auto",
    textAlign: "center",
    overflowX: "hidden",
    overflowY: "auto",
    padding: "0 20px",
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
    paddingRight: 20,
    marginTop: 10,
    background: theme.palette.background.paper,
  },
  form: {
    display: "grid",
    gap: 10,
    paddingTop: 10,
    maxWidth: 500,
    width: "100%",
    margin: "0 auto",
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
  alert: {
    display: "flex",
    width: "60%",
    minWidth: 350,
    height: 46,
    backgroundColor: theme.palette.warning.main,
    margin: "0 auto",
    padding: 7,
    color: "white",
    alignContent: "space-evenly",
    justifyContent: "center",
    borderRadius: 10,
  },
  info: {
    marginRight: 10,
    marginTop: 5,
  },
}));

interface IVerifyRequestProps extends IProps {
  propProviders: any;
  csrfToken: any;
}

const VerifyRequest: React.FC<IVerifyRequestProps> = ({
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
    setTitle("Verificação do Email");
    setShowMenu(false);
    setShowSearch(false);
  }, [setIsMainLoading, setTitle, setShowMenu, setShowSearch]);

  return (
    <div className={`${classes.root} max-w-5xl`}>
      <div className={classes.login}>
        <LockOpenIcon className={classes.icon} />
        <Typography className={classes.title} variant="h4">
          Verifique seu E-mail:
        </Typography>
        <Typography className={classes.description} variant="h6">
          Foi enviado um link de acesso para seu e-mail. <br />
          Acesse sua caixa e clique no botão ENTRAR!
        </Typography>
      </div>

      <div className={classes.alert}>
        <InfoIcon className={classes.info} />
        <Typography variant="h6">
          Lembre-se de checar sua caixa de SPAM
        </Typography>
      </div>
    </div>
  );
};

export async function getServerSideProps(context: any) {
  const res = await getProviders();
  const csrfToken = await getCsrfToken(context);
  return {
    props: { propProviders: res, csrfToken },
  };
}

export default VerifyRequest;
