import { makeStyles, Paper } from '@material-ui/core';
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';
import React from 'react'
import PageHeader from '../../Component/PageHeader'
import useForm from '../../Component/useForm';
import EmployeForm from './EmployeForm'

const useStyles = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    }
}))

export default function Employees() {

    const classes = useStyles();

    return (
        <>
            <PageHeader
            title="New Employee"
            subtitle="Form design with validation"
            icon={<PeopleOutlineTwoToneIcon fontSize="large" />}
            />
            <Paper className={classes.pageContent}>
                <EmployeForm/>          
            </Paper>

        </>
    )
}
