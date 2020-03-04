import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import MediaCard from './components/item';
import Title from '../../components/Title';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: '20px 8.921146953405017vw 0px 8.921146953405017vw',         
  },
  title:{
    color: 'grey',
    fontWeight: '1.5px'

  },
  line: {
    color: 'lightgrey',    
    marginBottom: '30px',
    opacity: '0.2'
  },
  paper: {
    textAlign: 'center',    
    color: theme.palette.text.secondary,
  },
  container: {        
      display: 'block'
  }
}));

export default function Lista() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>
        <p className={classes.title}>Produtos</p>
        <hr className={classes.line}/>
      </div>
      <Grid className={classes.container} >
        <Grid xs={12} sm={12}>
        <Grid container justify="center">
          {[0, 1, 2, 3, 4, 5, 6, 7].map(value => (
              <MediaCard/>            
          ))}
        </Grid>    
        </Grid>
      </Grid>
    </div>
  );
}