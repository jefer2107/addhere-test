import React from 'react';

import { FieldProps, getIn } from 'formik';
import { makeStyles, TextField, useTheme } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        width: '100%'
    },
        selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export const SelectFormField: React.FC<FieldProps> = ({
    field, 
    form,
    ...props
}) => {

    const theme = useTheme();
    const classes = useStyles(theme);
    const errorText = getIn(form.touched, field.name) && getIn(form.errors, field.name);

    return (
                                            
            <TextField
                select
                margin="dense"
                helperText={errorText}
                error={!errorText}
                {...field}
                {...props}
            >
                
                { props.children }
                
            </TextField>

    );


};
