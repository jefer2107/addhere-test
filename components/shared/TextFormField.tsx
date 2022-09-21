import { FieldProps, getIn } from 'formik';
import React from 'react';
import { makeStyles, TextField, useTheme } from '@material-ui/core';
import HelpIcon from './HelpIcon';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        overflowX: 'hidden',
        overflowY: 'hidden',
        display: 'grid',
        gridTemplateColumns: '1fr 45px',
        background: theme.palette.background.paper
        },
    icon: {
        paddingTop: 15
    }
  }));

export const TextFormField: React.FC<FieldProps> = ({
    field, 
    form,
    ...props
}) => {

    const theme = useTheme();
    const classes = useStyles(theme);

    const { helpMessage } = props as any;

    const errorText = getIn(form.touched, field.name) && getIn(form.errors, field.name);

    return (
        <div className={classes.root}>
            <TextField
                fullWidth
                margin="normal"
                helperText={errorText}
                error={!errorText}
                {...field}
                {...props}
            />
            {helpMessage && <HelpIcon className={classes.icon} message={helpMessage} /> }
        </div>
    );


};
