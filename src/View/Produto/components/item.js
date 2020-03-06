import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    width: 230,
    minHeight: 'auto',
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
  },
  price: {
    marginTop: '5px',
    fontWeight: 'bold',
    fontSize: '18px',
  },
  description: {
    fontSize: '10px',
    color: 'darkgrey',
    fontWeight: '200px',
  }
});

const MediaCard = (info) => {
  const classes = useStyles();
  const {product} = info;

  let bol = false;
  return (
    <Card className={classes.root} >
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={require('../../../'+product.img_path)}          
        />
      </CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
            { product.name || 'Nome_Produto'}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="h1" className={classes.price}>
            <span> {'R$ '+product.price+',00' || 'Produto_Preço'}</span>
            <br/>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <span className={classes.description}>
              { product.paymentDescription[0] || 'Pagamento_Descriçao1'}
            <br/>
              { product.paymentDescription[1] || 'Pagamento_Descriçao2'}
            </span>            
            <span className={classes.description}></span>
          </Typography>
        </CardContent>      
      {bol && (
      <CardActions >
        <Button size="small" color="primary">
          -
        </Button>
        <Button size="large" color="primary">
          +
        </Button>
      </CardActions>)}      
    </Card>
  );
}

export default MediaCard;