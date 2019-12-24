/**
 * The App component is the parent to the Products, Basket and Inventory components. It holds data for all these children components.
 * By having the state in the parent we will avoid having to micro manage each individual data that needs to be updated.
 */

import React from 'react';
import sampleProducts from '../sample-products';
import Products from './Products';
import Basket from './Basket';
import Inventory from './Inventory';

class App extends React.Component {
  state = {
    products: {},
    basket: {}
  };

  /**
   * Adds a product to the state by copying the existing state. This is necessary
   * in order to not mutate the state manually.
   * To ensure each added product is unique, the date in Epoch is appended to the product.
   */
  addProduct = product => {
    const products = { ...this.state.products };
    products[`product${Date.now()}`] = product;
    this.setState({ products });
  };

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
          <Inventory addProduct={this.addProduct}></Inventory>
        </div>
      </div>
    );
  }
}

export default App;
