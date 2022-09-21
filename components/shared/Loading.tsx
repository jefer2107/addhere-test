import * as React from 'react';

import { makeStyles, Typography, useTheme } from '@material-ui/core';
import { MAIN_CONTENT_HEIGHT } from '../../utils/params';
import { css } from "@emotion/react";

import CircleLoader from "react-spinners/CircleLoader";

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 20px auto 12px;
  border-color: red;
`;

const useStyles = makeStyles((theme) => ({
    root: {
        justifyContent: 'center',
        alignContent: 'center',
        width: '100%',
        overflowX: 'hidden',
        overflowY: 'hidden',
        height: MAIN_CONTENT_HEIGHT,
        background: theme.palette.background.paper
        },
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        width: '120px',
        margin: 'auto',
        textAlign: 'center'
    },
    txt: {
        color: theme.palette.primary.light
    }
  }));

export interface ILoadingProps {
    size?: number;
    color?: string;
    isLoading?: boolean;
    text?: string;
}

const Loading: React.FC<ILoadingProps> = ({ size, color, isLoading, text }) => {
  
    const theme = useTheme();
    const classes = useStyles(theme);
    isLoading = isLoading !== undefined ? isLoading : true;
    color = color !== undefined ? color : '#F00';
    size = size !== undefined ? size : 32;
    text = text || 'Carregando...';
    return (
        <div className={classes.root}>
            
            <div className={classes.container}>
                {/* <ClipLoader color={color} loading={isLoading} css={override} size={size} /> */}
                <CircleLoader color={color} loading={isLoading} css={override} size={size} />
                <Typography className={classes.txt}>{text}</Typography>
            </div>

        </div>
    );

}

export default Loading;
