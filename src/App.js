import React from 'react';
import ListaProduto from './View/Produto';
import Cliente from './View/Cliente';

function App() {
  return (
    <div className="App">    
      <ListaProduto/>
      <Cliente/>
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
