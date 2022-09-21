import {
  createStyles,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Theme,
  useTheme,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import StorefrontIcon from "@material-ui/icons/Storefront";
import HomeIcon from "@material-ui/icons/Home";
import MailIcon from "@material-ui/icons/Mail";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import CodeIcon from "@material-ui/icons/Code";
import DescriptionIcon from "@material-ui/icons/Description";
import React, { useState } from "react";
import { signOut } from "next-auth/react";
import { appRoutes } from "../../utils/data/routes";
import ConfirmationDialog from "../shared/ConfirmationDialog";

interface IMenuDrawerProps {}

interface IButtonAppState {
  isOpen: boolean;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    list: {
      width: 280,
    },
    fullList: {
      width: "auto",
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
  })
);

const toggleDrawer =
  (
    open: boolean,
    state: IButtonAppState,
    setState: React.Dispatch<IButtonAppState>
  ) =>
  (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }
    setState({ ...state, isOpen: open });
  };

const version = `version ${process.env.NEXT_PUBLIC_VERSION}`;

const handleClick = (e: any, href: string) => {
  e.preventDefault();
  window.location.href = href;
};

const handleLogout = (e: any) => {
  e.preventDefault();
  signOut();
};

const list = (
  state: IButtonAppState,
  setState: React.Dispatch<IButtonAppState>,
  setOpenDialog: React.Dispatch<boolean>,
  classes: any
) => (
  <div
    className={classes.list}
    role="presentation"
    onClick={toggleDrawer(false, state, setState)}
    onKeyDown={toggleDrawer(false, state, setState)}
  >
    <List>
      {[
        { text: "Home", icon: <HomeIcon />, href: appRoutes.HOME },
   
        { text: "Contato", icon: <MailIcon />, href: appRoutes.CONTACT },
        {
          text: "Política de Privacidade",
          icon: <DescriptionIcon />,
          href: appRoutes.PRIVACY_POLICY,
        },
      ].map((option, index) => (
        <ListItem
          button
          key={option.text}
          onClick={(e) => handleClick(e, option.href)}
        >
          <ListItemIcon>{option.icon || <MailIcon />}</ListItemIcon>
          <ListItemText primary={option.text} />
        </ListItem>
      ))}
    </List>

    <Divider />

    <List>
      {[
        {
          text: "Sair",
          icon: <ExitToAppIcon />,
          onClick: () => setOpenDialog(true),
        },
        { text: version, icon: <CodeIcon /> },
      ].map((option, index) => (
        <ListItem button key={option.text} onClick={option.onClick}>
          <ListItemIcon>{option.icon}</ListItemIcon>
          <ListItemText primary={option.text} />
        </ListItem>
      ))}
    </List>
  </div>
);

const MenuDrawer: React.FC<IMenuDrawerProps> = () => {
  const theme = useTheme();
  const classes = useStyles(theme);

  const [state, setState] = useState<IButtonAppState>({ isOpen: false });
  const [openDialog, setOpenDialog] = useState(false);

  return (
    <React.Fragment>
      <IconButton
        edge="start"
        className={classes.menuButton}
        color="inherit"
        aria-label="menu"
        onClick={toggleDrawer(true, state, setState)}
      >
        <MenuIcon />
      </IconButton>

      <Drawer
        anchor="left"
        open={state.isOpen}
        onClose={toggleDrawer(false, state, setState)}
      >
        {list(state, setState, setOpenDialog, classes)}
      </Drawer>

      <ConfirmationDialog
        handleCancel={() => setOpenDialog(false)}
        handleConfirm={handleLogout}
        title="Confirmação"
        subtitle="Tem certeza que quer sair?"
        open={openDialog}
        confirmTitle="CONFIRMAR"
        cancelTitle="CANCELAR"
      />
    </React.Fragment>
  );
};

export default MenuDrawer;
