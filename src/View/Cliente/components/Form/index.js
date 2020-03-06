import React from 'react';
import {
  withStyles,
  makeStyles,

} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    flexWrap: 'wrap',        
    marginBottom: '60px',
    justifyContent: 'left'
  },
  marginName: {
    margin: theme.spacing(2),
    minWidth: '27.77777777777778vw',    
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    },
    marginLeft: '2.2343vw' 
  },
  marginEmail: {
    margin: theme.spacing(2),
    minWidth: '27.77777777777778vw',
    [theme.breakpoints.down('xs')]: {
      width: '100%'     
    },
    marginLeft: '2.2343vw' 
  },
  marginGender: {
    margin: theme.spacing(2),
    [theme.breakpoints.down('xs')]: {
      width: '100%'
    },
    marginLeft: '2.2343vw'
  },
  button: {
    backgroundColor: 'orange',
    color: 'white',
    fontWeight: '500px',
    textDecoration: 'uppercase',
    right: 'auto',
    fontSize: '10px',
    display: 'fixed',
    maxWidth: '150px'
  },
  submit:{
    display: 'flex',
    flexDirection: 'column',
    float: 'right',
    textAlign: 'center',
    maxWidth: '150px',
    margin: 0,
    padding: 0,
    marginBottom: '60px',
  },
  total:{
    marginBottom: '10px',
    fontWeight: 'bold',
    color: 'grey',
    fontSize: '1.2rem'
  }
}));

const ValidationTextField = withStyles({
  root: {
    '& input:valid + fieldset': {
      borderColor: 'green',
      borderWidth: 2,
    },
    '& input:invalid + fieldset': {
      borderColor: 'red',
      borderWidth: 2,
    },
    '& input:valid:focus + fieldset': {
      borderLeftWidth: 6,      
      padding: '4px !important', // override inline-style
    },
  },
})(TextField);

const onChangeHandle = (event) => {
    localStorage.setItem(event.target.name,event.target.value);
}
const Form = (props) => {
  const classes = useStyles();  
  

  return (
    <div>
    <form className={classes.root} noValidate>      
      <ValidationTextField
        className={classes.marginName}
        label="Digite seu nome aqui"
        required
        variant="outlined"
        name='nome'            
        onChange={onChangeHandle}
        id="validation-outlined-input"
      />
      <ValidationTextField
        className={classes.marginEmail}
        label="Digite seu e-mail"
        required        
        name='email'
        variant="outlined"   
        onChange={onChangeHandle}
        id="validation-outlined-input"
      />
      <ValidationTextField
        className={classes.marginGender}
        label="Selecione"
        required     
        name='gender'   
        variant="outlined"
        onChange={onChangeHandle}
        id="validation-outlined-input"
      />     
    </form>
      <div className={classes.submit}>
        <span className={classes.total}>Total: R$ 299,00</span>
        <Button className={classes.button}>
          Finalizar Compra
        </Button>
      </div>
    </div>
  );
}

export default Form;