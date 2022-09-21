import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

interface  IMockupImageProps {
   width: number | string;
   height: number | string;
   maxWidth?: number | string;
   maxHeight?: number | string;
   bgColor?: string;
   color?: string;
   title?: string;
}

const useStyles = makeStyles((theme) => ({
   root: {
       display: 'flex',
       margin: 'auto',
       width: '100%',
       background: 'black',
       color: 'white',
       verticalAlign: 'middle',
       alignItems: 'center',
       justifyContent: 'center',
       cursor: 'pointer'
   },
   container: {
      padding: theme.spacing(2)
   }
 })
);
 
const MockupImage: React.FC<IMockupImageProps> = ({ width, height, maxWidth, maxHeight, color, bgColor, title }) => {
 
 const theme = useTheme();      
 const classes = useStyles(theme);

 color = color || 'white';
 bgColor = bgColor || 'black';

 return (
   <div className={classes.root} style={{ 'backgroundColor': bgColor, 'color': color, width, height, maxWidth, maxHeight }}>
      
       <div className={classes.container}>
          <Typography variant="h6">{title}</Typography>
          <Typography variant="h6">{maxWidth || width} x {maxHeight || height} pixels</Typography>
       </div>
       
   </div>
 );
}


export default MockupImage;
