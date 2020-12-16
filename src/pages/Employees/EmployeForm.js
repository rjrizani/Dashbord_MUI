import { FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, TextField } from '@material-ui/core';
import React, { useEffect } from 'react'
import Controls from '../../Component/Controls/Controls';

import { useForm, Form} from '../../Component/useForm';
import * as employeeService from "../../Services/employeeService";

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

    const validate = (fieldValues = values) => {
        let temp = {...errors}
        if ('fullName' in fieldValues)
            temp.fullName = fieldValues.fullName?"":"this field is required."
        //S^ allow start string if i not wrong
        if ('email' in fieldValues)
        temp.email = (/$^|.+@.+..+/).test(fieldValues.email) ?"":"Email is not valid."
        if ('mobile' in fieldValues)
        temp.mobile = fieldValues.mobile.length>9?"":"Minimum 10 numbers required."
        if ('departmentId' in fieldValues)
        temp.departmentId = fieldValues.departmentId.length != 0 ?"":"this field is required."
        setErrors({
            ...temp
        })
        if (fieldValues == values)
        //return booland value
        return Object.values(temp).every(x => x == "")
    }

    //strategi call function when use reusable 
    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm
    }=useForm(initialFValues, true, validate);

    const handleSubmit = e => {
        e.preventDefault()
        if (validate()){
            employeeService.insertEmployee(values)
           // resetForm()
        }
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Grid container>
                    <Grid item xs={6}>
                        <Controls.Input
                            label="Full Name"
                            name="fullName"
                            value={values.fullName}
                            onChange={handleInputChange}
                            error={errors.fullName}
                        />
                        <Controls.Input
                            label="Email"
                            name="email"
                            value={values.email}
                            onChange={handleInputChange}
                            error={errors.email}
                        />
                    <Controls.Input
                        label="Mobile"
                        name="mobile"
                        value={values.mobile}
                        onChange={handleInputChange}
                        error={errors.mobile}
                    />
                    <Controls.Input
                        label="City"
                        name="city"
                        value={values.city}
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
                    <Controls.Select
                        name="departmentId"
                        label="Department"
                        value={values.departmentId}
                        onChange={handleInputChange}
                        //for get back-and API
                        options={employeeService.getDepartmentCollection()}
                        error={errors.departmentId}
                    />
                    <Controls.DatePicker
                        name="hireDate"
                        label="Hire Date"
                        value={values.hireDate}
                        onChange={handleInputChange}
                    />  
                    <Controls.Checkbox 
                        name="isPermanent"
                        label="Permanent Employee"
                        value={values.isPermanent}
                        onChange={handleInputChange}
                    />
                <div>
                    <Controls.Button
                        type="submit" 
                        text="Submit"
                    />
                    <Controls.Button
                        text="Reset"
                        color="default"
                        onClick={resetForm}
                    />
                </div>
                    </Grid>
            </Grid>       
        </Form>
    )
}
