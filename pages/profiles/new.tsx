import * as React from 'react';

import { makeStyles, Typography, useTheme } from '@material-ui/core';
import { IProps } from '../../interfaces/IProps';
import { useSession } from '../../utils/next-auth-react-query';
import Link from 'next/link';
import Loading from '../../components/shared/Loading';

export interface INewUserProps extends IProps {
}

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'grid',
        gridGap: 5,
        gridTemplateColumns: '1fr',
        justifyContent: 'center',
        alignContent: 'top',
        padding: theme.spacing(2),
        width: '100%',
        overflowX: 'hidden',
        overflowY: 'hidden',
        background: theme.palette.background.paper,
        [theme.breakpoints.up('sm')]: {
          padding: 60
        },
    },
    welcome: {
      marginBottom: 30,
      [theme.breakpoints.down('sm')]: {
        fontSize: '1.4em'
      }
    },
    instruction: {
      marginBottom: 10,
      [theme.breakpoints.down('sm')]: {
        fontSize: '1em'
      }
    },
    optionInstruction: {
      marginTop: 20,
      [theme.breakpoints.down('sm')]: {
        fontSize: '1em'
      }
    }
  }));

const NewUser: React.FC<INewUserProps> = ({setTitle, setShowMenu, setShowSearch, setIsMainLoading }) => {
    
    const theme = useTheme();
    const classes = useStyles(theme);
    const [ session, isLoading ] = useSession();
    
    React.useEffect(()=> {
      setIsMainLoading(false);
      setTitle('Primeiro acesso');
      setShowMenu(false);
      setShowSearch(false);
    }, [setIsMainLoading, setTitle, setShowMenu, setShowSearch]);
    
    if (isLoading || !session) return <Loading></Loading>;

    const userName = session.user.name ? ` ${session.user.name}` : '';
    return (
    <div id='NewUserPage' className={`${classes.root} max-w-5xl`}>

        <Typography className={classes.welcome} variant="h4">Olá{userName}, esse é seu primeiro acesso!</Typography>
        
        {/* <Typography className={classes.instruction} variant="h6">Para que você tenha uma melhor experiência, recomendamos que preencha o: </Typography>
       
        <Link href={`/profiles/${(session.user as ISessionUser).id}`}>
          <a onClick={() => setIsMainLoading(true)}><Typography variant="h6">Seu Perfil</Typography></a>
        </Link> */}

        <Typography className={classes.optionInstruction} variant="h6">Para preencher o seu perfil: </Typography>

        <Link href="/profiles">
          <a onClick={() => setIsMainLoading(true)}><Typography variant="h6">PERFIL</Typography></a>
        </Link>

    </div>
  );
}

export default NewUser;
