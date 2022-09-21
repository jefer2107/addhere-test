 import React from 'react';
 import { makeStyles, useTheme } from '@material-ui/core/styles';
 import BottomNavigation from '@material-ui/core/BottomNavigation';
 import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
 import AccountCircleIcon from '@material-ui/icons/AccountCircle';
 import PersonSearchIcon from '@material-ui/icons/PersonOutlineOutlined';
 import MessageIcon from '@material-ui/icons/Message';
 import HomeIcon from '@material-ui/icons/Home';
import { ISessionUser } from '../../interfaces/ISessionUser';
import { useRouter } from 'next/router';
import { useSession } from '../../utils/next-auth-react-query';

export interface IFooterApp {
    setIsMainLoading: any;
}

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'fixed',
        zIndex: 9998,
        bottom: 0,
        left: 0,
        margin: 'auto',
        width: '100%',
        background: 'linear-gradient(-90deg, #FF434A 50%, #FF891E 90%)',
        color: 'black',
        paddingTop: 3
    },
    copyright: {
        marginTop: 15
    },
    avatar: {
        paddingBottom: 20,
        width: 21,
        height: 41
    },
    btn: {
        color: 'white',
        "&:hover": {
          color: theme.palette.secondary.dark
        }
      }
  })
);
  
 const Footer: React.FC<IFooterApp> = ({ setIsMainLoading }) => {
  
  const theme = useTheme();      
  const classes = useStyles(theme);
  const [value, setValue] = React.useState(0);
  const [ session ] = useSession();

  const userId = (session?.user as ISessionUser)?.id || null;

  const router = useRouter();

  return (
    <footer className={classes.root} id="footer-menu">

        <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
                setIsMainLoading(true);
                setValue(newValue);
                switch(newValue) {
                    case 0:
                        router.push('/');
                        break;
                    case 1:
                        router.push('/search');
                        break;
                    case 2:
                        router.push(`/profiles/${userId}`);
                        break;
                    case 3:
                        router.push(`/message/${userId}`);
                        break;
                }
            }}
            showLabels
            className={classes.root}>
            
                <BottomNavigationAction showLabel={true} label="Home" className={classes.btn} icon={<HomeIcon />} />
            
                <BottomNavigationAction showLabel={true} label="Pessoas" className={classes.btn} icon={<PersonSearchIcon />} />
            
                {userId && <BottomNavigationAction showLabel={true} label="Meu Perfil" className={classes.btn} icon={<AccountCircleIcon />} /> }
                        
                {userId && <BottomNavigationAction showLabel={true} label="Mensagens" className={classes.btn} icon={<MessageIcon />} /> }

            {/* <Link href="/settings">
                <BottomNavigationAction showLabel={true} label="Configurações" className={classes.btn} icon={<SettingsIcon />} />
            </Link> */}

        </BottomNavigation>

        {/* <div className={classes.copyright}>© 2021 - ANAKI Comunity - Develop by Indústria-i</div> */}

    </footer>
  );
 }


export default Footer;
