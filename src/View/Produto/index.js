import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import MediaCard from './components/item';
import Title from '../Tiltle';

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

export default function Lista() {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>      
      <Title title='Produtos'/>
      <Grid className={classes.container}>    
        <Grid container justify='center'>
          {product.map(item => (
              <MediaCard key={item.id} xs={12} product={item}/>            
          ))}        
        </Grid>
      </Grid>      
    </div>
  );
}

const product = [
  {
    id:1,
    img_path: 'assets/img/produto-01.jpeg',
    name: 'AirPods Apple Fonde de ouvido',
    price: 1499,
    paymentDescription: [
      'Em até 12x de R$ 124,92',
      'R$ 1.349 à vista (10% de desconto'
    ]

  },
  {
    id:2,
    img_path: 'assets/img/produto-02.jpeg',
    name: 'Capa de silicone para iPhone 8/7 cor Areia - rosa',
    price: 299,
    paymentDescription:  [
      'Em até 12x de R$ 24,92',
      'R$ 269,10 à vista (10% de desconto'
    ]

  },
  {
    id:3,
    img_path: 'assets/img/produto-03.jpeg',
    name: 'Apple pencil',
    price: 729,
    paymentDescription: [
      'Em até 12x de R$ 60,75',
      'R$ 656,10 à vista (10% de desconto'
    ]

  },
  {
    id:4,
    img_path: 'assets/img/produto-04.jpeg',
    name: 'Magic Mouse 2 - Prateado',
    price: 549,
    paymentDescription: [
      'Em até 12x de R$ 45,75',
      'R$ 494,10 à vista (10% de desconto'
    ]

  },
  {
    id:5,
    img_path: 'assets/img/produto-05.jpeg',
    name: 'Caixa prateada de aluminio com pulseira esportiva branca',
    price: 2899,
    paymentDescription: [
      'Em até 12x de R$ 241,58',
      'R$ 2609,10 à vista (10% de desconto'
    ]

  },
  {
    id:6,
    img_path: 'assets/img/produto-06.jpeg',
    name: 'Cabo de lightning para USB (1m)',
    price: 149,
    paymentDescription: [
      'Em até 12x de R$ 12,42',
      'R$ 134,10 à vista (10% de desconto'
    ]

  },
  {
    id:7,
    img_path: 'assets/img/produto-07.jpeg',
    name: 'Smart Keyboard para iPad Pro 12,9 polegadas - inglês (EUA)',
    price: 1099,
    paymentDescription: [
      'Em até 12x de R$ 91,58',
      'R$ 989,10 à vista (10% de desconto'
    ]

  },
  {
    id:8,
    img_path: 'assets/img/produto-08.jpeg',
    name: 'Carregador USB de 5W Apple',
    price: 149,
    paymentDescription: [
      'Em até 12x de R$ 12,42',
      'R$ 134,10 à vista (10% de desconto'
    ]

  },
]