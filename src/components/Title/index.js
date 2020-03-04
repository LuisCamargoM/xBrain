import React, { Component } from 'react';
import {makeStyles} from '@material-ui/core/styles';

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
  }
}));

class Title extends Component{
    constructor(props){
        super(props);
        this.state = {
            title: this.props.title
        }
    }
  render(){
    const classes = useStyles();
    return (
        <div className={classes.root}>
          <div>
            <p className={classes.title}>{this.state.title}</p>
            <hr className={classes.line}/>
          </div>      
        </div>
      );
  }
}

export default Title;