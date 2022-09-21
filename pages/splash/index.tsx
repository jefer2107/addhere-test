import * as React from 'react';

import { Button, makeStyles, useTheme } from '@material-ui/core';
import { IProps } from '../../interfaces/IProps';
import { MAX_MAIN_CONTENT_HEIGHT } from '../../utils/params';
import Image from 'next/image';
export interface ISplashProps extends IProps {
    userId: number;
  }

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'grid',
        gridTemplateRows: '1fr 40px',
        width: '100%',
        overflowX: 'hidden',
        overflowY: 'hidden',
        height: MAX_MAIN_CONTENT_HEIGHT,
        background: theme.palette.background.paper
    },
    btn: {
        position: 'relative',
        left: 0,
        bottom: 0
    }
  }));

const Splash: React.FC<ISplashProps> = ({ userId, setTitle, setShowMenu, setShowSearch }) => {

    const theme = useTheme();
    const classes = useStyles(theme);

    React.useEffect(()=> {
        setTitle('Welcome');
        setShowMenu(false);
        setShowSearch(false);
      }, [setTitle, setShowMenu, setShowSearch]);

    return (
        <div 
            className={classes.root}
            style={{
                'backgroundImage': `url("bg-anaki.jpeg")`,
                'backgroundRepeat': 'no-repeat',
                'backgroundSize': 'cover'
            }}
        >
        
            <Image src="anaki horizontal-colorida.png" alt="logo" title="logo" />

            <Button className={classes.btn} fullWidth variant="contained" color="primary">Entrar</Button>

        </div>
    );
}


export default Splash;