import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Title from '../Tiltle';
import Form from './components/Form';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: '20px 8.921146953405017vw 0px 8.921146953405017vw',             
  },  
  paper: {
    textAlign: 'center',    
    color: theme.palette.text.secondary,
  },
  container: {        
      display: 'block'
  }
}));

export default function Cliente() {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>      
      <Title title='Dados do Cliente'/>
      <Form/>
    </div>
  );
}