/**
 *
 */

import React from 'react';
import AddProduct from './AddProduct';

class Inventory extends React.Component {
  render() {
    return <AddProduct addProduct={this.props.addProduct}></AddProduct>;
  }
}

export default Inventory;
