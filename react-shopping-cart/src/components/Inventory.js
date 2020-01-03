/**
 *
 */

import React from 'react';
import AddProduct from './AddProduct';
import EditProduct from './EditProduct';

class Inventory extends React.Component {
  render() {
    return (
      <>
        <AddProduct addProduct={this.props.addProduct}></AddProduct>
        {Object.keys(this.props.products).map(key => (
          <EditProduct key={key} index={key} product={this.props.products[key]} editProduct={this.props.editProduct} />
        ))}
      </>
    );
  }
}

export default Inventory;
