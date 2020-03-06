import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    title:{
        color: 'grey',
        fontWeight: '1.5px',
        
      },
      line: {
        color: 'lightgrey',    
        marginBottom: '25px',
        opacity: '0.2'
      },
});

const Title = (info) => {
  const classes = useStyles();
  const {title} = info;
 console.log(title);
  return (
    <div>
    <p className={classes.title}>{title}</p>
    <hr className={classes.line}/>
  </div>
  );
}

export default Title;