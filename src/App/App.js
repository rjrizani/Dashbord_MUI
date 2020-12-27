import React from 'react';
import { makeStyles, CssBaseline, createMuiTheme, ThemeProvider } from '@material-ui/core';
import Header from '../Component/Header';
import SideMenu from '../Component/SideMenu';
import PageHeader from "../Component/PageHeader";
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';
import Employees from '../pages/Employees/Employees';

const theme = createMuiTheme({
  palette:{
      primary:{
          main: "#333996",
          light: '#3c44b126'
      },
      secondary:{
          main: "#f83246",
          light: 'f8324526'
      },
      background: {
        default: "#f4f5fd"
      }
  },
  overrides: {
    MuiAppBar: {
      root:{
        transform: 'translateZ(0)'
      }
    }
  },
  props: {
    MuiIconButton: {
      disableRipple: true
    }
  }
})

const useStyles = makeStyles({
  appMain: {
    paddingLeft: '320px',
    width: '100%'
  }
})

function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <SideMenu/>
      <div className={classes.appMain}>
        <Header/>
      <Employees/>
      </div>
      <CssBaseline/>
    </ThemeProvider>
  );
}

export default App;
