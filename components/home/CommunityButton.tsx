import { Avatar, createStyles, makeStyles, Theme, Typography, useTheme } from '@material-ui/core';
import Link from 'next/link';
import { ICommunity } from '../../interfaces/ICommunity';
import { getRandomColor } from '../../utils/color';

import * as React from 'react';

interface ICommunityButtonProps {
  community: ICommunity;
  setIsMainLoading: any;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      width: '100%',
      height: '100px',
      justifyContent: 'center',
      margin: 'auto',
      alignContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      cursor: 'pointer',
      '&:hover': {
        opacity: 0.7
      },
      '&:active': {
        paddingTop: 5,
        paddingLeft: 5
      }
    },
    avatar: {
      width: theme.spacing(6),
      height: theme.spacing(6),
      margin: 'auto',
    },
    gridItem: {
      display: 'block',
      alignContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      margin: 'auto',
      paddingTop: theme.spacing(1),
      color: theme.palette.text.primary,
      [theme.breakpoints.down('sm')]: {
        fontSize: '0.6em'
      },
      [theme.breakpoints.up('md')]: {
        fontSize: '0.8em'
      },
      [theme.breakpoints.up('lg')]: {
        fontSize: '1em'
      },
    },
  }),
);

const CommunityButton: React.FunctionComponent<ICommunityButtonProps> = ({ community, setIsMainLoading }) => {
    
    const theme = useTheme();
    const classes = useStyles(theme);
    
    return (
        // eslint-disable-next-line @next/next/link-passhref
        <Link href={`/community/${community.id}`}>

            <div className={classes.root} onClick={() => setIsMainLoading(true)}>

              <Avatar className={classes.avatar} alt={community.title} src={community.imgUrl}><span>{community.title?.toUpperCase().slice(0, 1)}</span></Avatar>
              <Typography className={classes.gridItem} style={ { 'color': community.color || getRandomColor() } } variant="subtitle2">{community.title?.toUpperCase()}</Typography>
            
            </div>

        </Link>
    );
};

export default CommunityButton;
