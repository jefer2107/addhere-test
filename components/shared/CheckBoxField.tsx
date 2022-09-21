import { FieldProps, getIn } from 'formik';
import React from 'react';
import { Checkbox, FormControlLabel, Grid } from '@material-ui/core';

export const CheckBoxField: React.FC<FieldProps & { label: string }> = ({
    field, 
    form,
    label,
    ...props
}) => {
    const errorText = getIn(form.touched, field.name) && getIn(form.errors, field.name);
    const handleChange = (_: any, v: any) => {
      form.setFieldValue(field.name, v);
    };

    return (
        <Grid container spacing={2}>
            
            <FormControlLabel
                    control={<Checkbox
                        onChange={handleChange}
                        inputProps={{ 'aria-label': 'primary checkbox' }}
                        {...field}
                        {...props}
                    />}
                    label={label} 
            />

        </Grid>
    );


};
