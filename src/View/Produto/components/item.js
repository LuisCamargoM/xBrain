import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import clsx from 'clsx';

import Collapse from '@material-ui/core/Collapse';

const useStyles = makeStyles({
  root: {
    width: 230,
    minHeight: 'auto',
    position: 'relative',
    margin: '20px 20px 20px 20px',     
    color: 'grey'
  },
  media: {
    height: 150,
    width:  160,    
    margin: '0 auto 0 auto', 
  },
  title: {
    fontSize: '12px',   
    paddingBottom: '10px'   
  },
  price: {
    marginTop: '5px',
    fontWeight: 'bold',
    fontSize: '18px',
  },
  description: {
    fontSize: '10px',
    color: 'darkgrey',
    marginTop: '20px',
    fontWeight: '200px',
  },
  controller:{
    justifyContent: 'center',
    padding: '0px !important',    
  },
  footer: {
    position: 'relative',
    bottom: '0'
  },
  content:{    
    paddingTop: '10px !important',
    paddingBottom: '10px !important',    
  },
  numberField:{
    appearance: 'textfield',
    justify: 'center'
  }  
});



const MediaCard = (info) => {
  const classes = useStyles();
  const {product} = info;
  
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  //clearStorage();
  if(!localStorage.getItem('cart')){
    initCart();
  }

  const handleMinusClick = (product) => {
    const {id, price} = product;
    const exist = localStorage.getItem(id);  

    if(!checkNegative(parseInt(exist)) && exist!==0){
      if(exist){      
        let value = parseInt(localStorage.getItem(id));
        localStorage.setItem(id,value-1);   
        handleCart(id,-price);               
      }else{
        localStorage.setItem(id,0);      
      }    
    }    
  }

  const handlePlusClick = (product) => {    
    const {id,price} = product;
    const exist = localStorage.getItem(id); 

    if(exist ){      
      let value = parseInt(localStorage.getItem(id));
      localStorage.setItem(id,value+1);                 
    }else{
      localStorage.setItem(id,1);            
    }    
    handleCart(id,price);
  }


   function handleCart(id,value){
      let actualQtd = localStorage.getItem(id);
      let cartValue = parseInt(localStorage.getItem('cart'));
      let total = cartValue+value
      if((total) >= 0 && (actualQtd >= 0)){
        localStorage.setItem('cart',total);
      }else{
        localStorage.setItem('cart',0);
      }
    }    
   
  function checkNegative(num){    
    return (num-1) < 0;
  }
  function initCart(){
    localStorage.setItem('cart',0);     
  }
  function clearStorage(){
    localStorage.clear();
  }
  return (
    <Card className={classes.root} >
      <CardActionArea>
        <CardMedia
          className={clsx(classes.media,classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
          image={require('../../../'+product.img_path)}          
        />
      </CardActionArea>
        <CardContent className={classes.content}>
          <div >
            <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
              { product.name || 'Nome_Produto'}
            </Typography>
            
            <Typography variant="body2" color="textSecondary" component="h1" className={classes.price}>
              <span> {'R$ '+product.price+',00' || 'Produto_Preço'}</span>
              <br/>
            </Typography>
            <div className={classes.footer}>
              <Typography variant="body2" color="textSecondary" component="p">
                <span className={classes.description}>
                  { product.paymentDescription[0] || 'Pagamento_Descriçao1'}
                <br/>
                  { product.paymentDescription[1] || 'Pagamento_Descriçao2'}
                </span>            
                <span className={classes.description}></span>
              </Typography>          
              <Collapse in={expanded} timeout="auto" unmountOnExit component={'div'}>
                <CardActions className={classes.controller}>
                  <Button size="small" color="primary" onClick={() => handleMinusClick(product)}>
                    <RemoveIcon/>
                  </Button>
                  <TextField
                    id="standard-number"
                    className={classes.numberField}                  
                  />
                  <Button size="large" color="primary" onClick={() => handlePlusClick(product)}>
                    <AddIcon/>
                  </Button>
                </CardActions>
              </Collapse>   
            </div>
                     
          </div>
        </CardContent>                  
    </Card>
  );
}

export default MediaCard;