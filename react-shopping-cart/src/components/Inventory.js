/**
 *
 */

import React from 'react';
import AddProduct from './AddProduct';

class Inventory extends React.Component {
  render() {
    return (
      <>
        <button onClick={this.props.loadSampleData}>Load Sample Data</button>
        <AddProduct addProduct={this.props.addProduct}></AddProduct>
      </>
    );
  }
}

export default Inventory;
