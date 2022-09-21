import React, { useState } from 'react';
import { createStyles, makeStyles, Theme, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import MenuDrawer from './MenuDrawer';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import { signIn, signOut } from 'next-auth/react';
import { Avatar } from '@material-ui/core';
import ConfirmationDialog from '../shared/ConfirmationDialog';
import { useSession } from '../../utils/next-auth-react-query';
interface IButtomAppBarProps {
    pageTitle: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
    },
    auth: {
    },
    avatar: {
    },
    btn: {
      width: 16,
      height: 21,
      '&:hover': {
        color: theme.palette.secondary.dark
      }
    }
  }),
);


const ButtonAppBar: React.FC<IButtomAppBarProps> = ({ pageTitle }) => {

  const theme = useTheme();
  const classes = useStyles(theme);

  const [ session, loading ] = useSession();
  const [ openDialog, setOpenDialog] = useState(false);

  const user = null;
  console.log('session', session);
  
  return (
      <div className={`${classes.root} no-print`}>
        <AppBar position="static">

            <Toolbar>

              <MenuDrawer></MenuDrawer>

              <Typography variant="h6" align="center" className={classes.title}>
                  { pageTitle }
              </Typography>

              <div className={classes.auth}>

                  {!session && 
                      <Button className={classes.btn} onClick={() => signIn()} color="inherit">
                        Entrar
                      </Button>
                  }

                  {session && 
                  <Button className={classes.btn} onClick={() => setOpenDialog(true)} color="inherit">
                    { 
                      !session.user.image && <><AccountBoxIcon /> {session.user.name}</> || 
                      <Avatar className={classes.avatar} alt={session.user.name} src={session.user.image}>{<span>{session.user.name?.toUpperCase().slice(0, 1)}</span>}</Avatar>
                    }
                  </Button>
                  }

              </div>

            </Toolbar>

        </AppBar>

        <ConfirmationDialog 
              handleCancel={() => setOpenDialog(false)} 
              handleConfirm={signOut}
              title="Confirmação"
              subtitle="Tem certeza que quer sair?"
              open={openDialog}
              confirmTitle="CONFIRMAR"
              cancelTitle="CANCELAR"
          />
          
      </div>
  );
}

export default ButtonAppBar;