/**
 * This the main app. Here we control anything related to the entire page such as states.
 */

import React from 'react';
import sampleProducts from '../sample-products';
import Products from './Products';
import Basket from './Basket';
import Inventory from './Inventory';

class App extends React.Component {
  render() {
    return (
      <div className='row'>
        <div className='column'>
          <h2 className='column-title'>PRODUCTS</h2>
          <Products>{console.log(sampleProducts)}</Products>
        </div>
        <div className='column'>
          <h2 className='column-title'>BASKET</h2>
          <Basket></Basket>
        </div>
        <div className='column'>
          <h2 className='column-title'>INVENTORY</h2>
          <Inventory></Inventory>
        </div>
      </div>
    );
  }
}

export default App;
