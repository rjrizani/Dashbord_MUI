import { FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, TextField } from '@material-ui/core';
import React, { useEffect } from 'react'
import Controls from '../../Component/Controls/Controls';

import { useForm, Form} from '../../Component/useForm';

const genderItems = [
    {id:'male', title:'Male'},
    {id:'female', title:'Female'}
]

const initialFValues = {
    id: 0,
    fullName: '',
    email: '',
    mobile: '',
    city: '',
    gender: 'male',
    departmentId: '',
    hireDate: new Date(),
    isPermanent: false

}

export default function EmployeForm() {

 

    const {
        values,
        setValues,
        handleInputChange
    }=useForm(initialFValues);



    return (
        <Form>
            <Grid container>
                    <Grid item xs={6}>
                        <Controls.Input
                        label="Full Name"
                        name="fullName"
                        value={values.fullName}
                        onChange={handleInputChange}
                        />
                        <Controls.Input
                        label="Email"
                        name="email"
                        value={values.email}
                        onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid item xs={6}>
                    <Controls.RadioGroup 
                        name="gender"
                        label="Gender"
                        value={values.gender}
                        onChange={handleInputChange}
                        items={genderItems}
                    />


                    </Grid>
            </Grid>       
        </Form>
    )
}
