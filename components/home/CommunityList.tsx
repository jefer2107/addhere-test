import { GridList, makeStyles, useTheme } from '@material-ui/core';
import * as React from 'react';
import { ICommunity } from '../../interfaces/ICommunity';
import CommunityButton from './CommunityButton';

interface ICommunityListProps {
  communities: ICommunity[];
  setIsMainLoading: any;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: '100%',
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
}));

const CommunityList: React.FunctionComponent<ICommunityListProps> = ({ communities, setIsMainLoading }) => {
  const theme = useTheme();
  const classes = useStyles(theme);
  return (communities &&
    <div className={classes.root}>
       
       <GridList className={classes.gridList} cols={5}>
        
        {
            communities.map((community, idx) => (
              <CommunityButton key={`com-${idx}`} community={community} setIsMainLoading={setIsMainLoading}></CommunityButton>
              )
            )
        }

       </GridList>

    </div> || <div></div>
  );
};

export default CommunityList;
