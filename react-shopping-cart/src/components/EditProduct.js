/**
 *
 */

import React from 'react';

class EditProduct extends React.Component {
  handleEdit = event => {
    const editProduct = {
      ...this.props.product,
      [event.currentTarget.name]: event.currentTarget.value
    };
    this.props.editProduct(this.props.index, editProduct);
  };

  render() {
    return (
      <form className='product-form' onSubmit={() => this.props.deleteProduct(this.props.index)}>
        <input name='name' type='text' value={this.props.product.name} onChange={this.handleEdit} />
        <input name='price' type='number' value={this.props.product.price} onChange={this.handleEdit} />
        <select name='status' value={this.props.product.status} onChange={this.handleEdit}>
          <option value='available'>In Stock!</option>
          <option value='unavailable'>Out of Stock!</option>
        </select>
        <textarea name='description' value={this.props.product.description} onChange={this.handleEdit} />
        <input name='image' type='text' value={this.props.product.image} onChange={this.handleEdit} />
        <button className='main-button remove-button' type='submit'>
          Remove Product
        </button>
      </form>
    );
  }
}

export default EditProduct;
