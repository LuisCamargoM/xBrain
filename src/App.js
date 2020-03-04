import React from 'react';
import ListaProduto from './View/Produto';

function App() {
  return (
    <div className="App">    
      <ListaProduto/>
      {/* 
        if(getCheckout){
          <Checkout/>
        }else{
          <ListaProduto />
          <Cliente/>
        }
      */}


    </div>
  );
}

export default App;
