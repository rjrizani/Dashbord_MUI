import { makeStyles, Paper, TableBody, TableCell, TableRow } from '@material-ui/core';
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';
import React,{useState} from 'react'
import PageHeader from '../../Component/PageHeader'
import useForm from '../../Component/useForm';
import EmployeForm from './EmployeForm'
import useTable from '../../Component/useTable'
import * as employeeService from '../../Services/employeeService'

const useStyles = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    }
}))

const headCells = [
    {id: 'fullName', label: 'Employee Name'},
    {id: 'email', label: 'Email Address (Personal)'},
    {id: 'mobile', label: 'Mobile Number'},
    {id: 'department', label: 'Department', disableSorting: true}
]

export default function Employees() {

    const classes = useStyles();
    //react hook
    const [records, setRecords] = useState(employeeService.getAllEmployees())

//distruction component/index
    const {
        TblContainer,
        TblHead,
        TblPagination,
        recordsAfterPagingAndSorting
    }=useTable(records, headCells);

    return (
        <>
            <PageHeader
            title="New Employee"
            subtitle="Form design with validation"
            icon={<PeopleOutlineTwoToneIcon fontSize="large" />}
            />
            <Paper className={classes.pageContent}>
               <EmployeForm/>
               <TblContainer>
                    <TblHead />
                    <TableBody>
                        {
                            recordsAfterPagingAndSorting().map(item => (
                                <TableRow key={item.id}>
                                    <TableCell>{item.fullName}</TableCell>
                                    <TableCell>{item.email}</TableCell>
                                    <TableCell>{item.mobile}</TableCell>
                                    <TableCell>{item.department}</TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
               </TblContainer>     
               <TblPagination />  
            </Paper>

        </>
    )
}
