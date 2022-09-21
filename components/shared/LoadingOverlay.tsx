import * as React from 'react';

import { makeStyles, useTheme } from '@material-ui/core';
import { css } from "@emotion/react";

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 20px auto 12px;
  border-color: blue;
`;

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'fixed',
        left: 0,
        top: 0,
        justifyContent: 'center',
        alignContent: 'center',
        width: '100vw',
        height: '100vh',
        overflowX: 'hidden',
        overflowY: 'hidden',
        background: '#EEE',
        opacity: 0.5,
        zIndex: 99999
        },
  }));

export interface IOverlayProps {
    size?: number;
    color?: string;
}

const LoadingOverlay: React.FC<IOverlayProps> = ({ color }) => {
  
    const theme = useTheme();
    const classes = useStyles(theme);

    color = color !== undefined ? color : '#F00';
    
    return (
        <div className={classes.root} style={ { backgroundColor: color } }>
        </div>
    );

}

export default LoadingOverlay;
