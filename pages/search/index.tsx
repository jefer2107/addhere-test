import * as React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { IUser } from "../../interfaces/IUser";
import { useQuery } from "react-query";
import { getUsersFilteredBySearch } from "../../utils/fetch-data";
import { IProps } from "../../interfaces/IProps";
import { MAIN_CONTENT_HEIGHT, MIN_CHARS_TO_SEARCH } from "../../utils/params";
import { GlobalService } from "../../utils/global.service";
import { Grid } from "@material-ui/core";
import { getRandomColor } from "../../utils/color";
import { capitalize } from "../../utils/capitalize";
import Image from "next/image";

const glb = new GlobalService();

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: MAIN_CONTENT_HEIGHT,
    backgroundColor: theme.palette.background.default,
    paddingTop: theme.spacing(2),
    overflowY: "auto",
  },
  inline: {
    display: "inline",
  },
  empty: {
    padding: theme.spacing(4),
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.grey[500],
    width: "60%",
    minWidth: 350,
    margin: "auto",
  },
  img: {
    paddingTop: 80,
    paddingBottom: 40,
    display: "block",
    width: 140,
    margin: "auto",
  },
  secondary: {},
  listItem: {
    "&:hover": {
      backgroundColor: theme.palette.primary.light,
      color: "white",
      cursor: "pointer",
    },
    fontFamily: theme.typography.fontFamily,
  },
}));

export interface ISearchProps extends IProps {}

const Search: React.FC<ISearchProps> = ({
  search,
  setSearch,
  setTitle,
  setShowMenu,
  setShowSearch,
  setIsMainLoading,
}) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  React.useEffect(() => {
    setIsMainLoading(false);
    setTitle("Encontrar pessoas");
    setShowMenu(true);
    setShowSearch(true);
  }, [setIsMainLoading, setTitle, setShowMenu, setShowSearch]);

  const {
    data: users,
    error,
    isLoading,
  } = useQuery(
    ["users", search],
    async (ctx) =>
      await getUsersFilteredBySearch(ctx.queryKey[1], MIN_CHARS_TO_SEARCH)
  );

  if (search?.length < MIN_CHARS_TO_SEARCH || isLoading || users?.length <= 0)
    return (
      <div className={classes.root}>
        <Image className={classes.img} alt="search" src="user-search.jpeg" />
        <Typography className={classes.empty} variant="h5" align="center">
          Use a &quot;Busca&quot; e encontre amigos ou faça novas amizades!
        </Typography>
      </div>
    );
  if (error)
    return (
      <div className={classes.root}>
        <Typography className={classes.empty} variant="h5" align="center">
          Houve falha no carregamento dos usuários. Tente mais tarde!
        </Typography>
      </div>
    );

  return (
    <List className={classes.root}>
      {users &&
        users.map((user: IUser) =>
          listItem(user, classes, setSearch, setIsMainLoading)
        )}
    </List>
  );
};

const listItem = (
  user: IUser,
  classes: any,
  setSearch: React.Dispatch<string>,
  setIsMainLoading: any
) => {
  const handlerClick = (e) => {
    e.preventDefault();
    setIsMainLoading(true);
    setSearch("");
    window.location.href = `/profiles/${user.usuarioNo}`;
  };

  return (
    <>
      <ListItem alignItems="flex-start" className={classes.listItem}>
        <ListItemAvatar>
          <Avatar
            alt={user.nome}
            src={user.imgUrl}
            style={{ backgroundColor: getRandomColor() }}
          />
        </ListItemAvatar>

        <ListItemText
          onClick={handlerClick}
          primary={capitalize(user.nome)}
          secondary={
            <Grid container className={classes.secondary}>
              <Grid item xs={12} direction="row">
                <Typography
                  component="span"
                  variant="body2"
                  className={classes.inline}
                >
                  {capitalize(user.pais)},{" "}
                </Typography>

                <Typography
                  component="span"
                  variant="body2"
                  className={classes.inline}
                >
                  {glb.getTypedValue(user.dtCadastro).string}
                </Typography>
              </Grid>

              <Grid item>
                <Typography component="span" className={classes.inline}>
                  {user.categorias?.map((m) => capitalize(m)).join(", ")}{" "}
                </Typography>
              </Grid>
            </Grid>
          }
        />
      </ListItem>

      <Divider variant="inset" component="li" />
    </>
  );
};

export default Search;
