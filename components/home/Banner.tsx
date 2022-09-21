import * as React from "react";
import { IBanner } from "../../interfaces/IBanner";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core";
import Image from "next/image";
import { FC } from "react";

interface IBannerProps {
  banner: IBanner;
}

const useBannerStyles = makeStyles((theme) => ({
  imgContainer: {
    width: "100%",
  },
  title: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    paddingBottom: 0,
    margin: 0,
    backgroundColor: "transparent",
    fontFamily: theme.typography.h2.fontFamily,
    fontSize: theme.typography.h2.fontSize,
    color: theme.palette.primary.contrastText,
    position: "relative",
    top: 30,
    left: 0,
  },
  header: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    paddingBottom: 0,
    margin: 0,
    backgroundColor: theme.palette.background.default,
    opacity: 0.7,
    position: "relative",
    bottom: 50,
    left: 0,
  },
  img: {
    display: "block",
    maxWidth: "100vw",
    overflow: "hidden",
    width: "100%",
  },
}));

const Banner: React.FunctionComponent<IBannerProps> = ({ banner }) => {
  const theme = useTheme();
  const classes = useBannerStyles(theme);
  return (
    (banner && (
      <div key={`ban-${banner.quadroNo}`} className={classes.imgContainer}>
        <BannerWithLink classes={classes} banner={banner} />

        <Paper square elevation={0} className={classes.header}>
          <Typography>{banner.quadroNome}</Typography>
        </Paper>
      </div>
    )) || <div></div>
  );
};

export default Banner;

const BannerWithLink: FC<{ classes: any; banner: any }> = ({
  classes,
  banner,
}) => {
  const Img = () => (
    <Image className={classes.img} src={banner.url} alt={banner.quadroNome} />
  );
  return banner.urlDestino ? (
    <a href={banner.urlDestino} target="_blank" rel="noreferrer">
      <Img />
    </a>
  ) : (
    <Img />
  );
};
