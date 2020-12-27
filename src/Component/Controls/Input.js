import { TextField } from '@material-ui/core';
import React from 'react'

export default function Input(props) {
  
    //destructuction index
    const {name, label, value, error=null, onChange, ...other} = props;
    return (
        <TextField 
        variant="outlined"
        label={label}
        name={name}
        value={value}
        onChange={onChange}
        {...other}
        //menampilkan error message ketika klik submit
        {...(error && {error:true,helperText:error})}
        />
    )
}
