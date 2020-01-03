import React from 'react';

class AddProduct extends React.Component {
  // Used for getting the data from the inputs
  nameRef = React.createRef();
  priceRef = React.createRef();
  statusRef = React.createRef();
  descriptionRef = React.createRef();
  imageRef = React.createRef();

  createProduct = event => {
    event.preventDefault();
    const product = {
      name: this.nameRef.current.value,
      price: parseFloat(this.priceRef.current.value),
      status: this.statusRef.current.value,
      description: this.descriptionRef.current.value,
      image: this.imageRef.current.value
    };
    this.props.addProduct(product);
    event.currentTarget.reset();
  };
  render() {
    return (
      <form className='product-form' onSubmit={this.createProduct}>
        <input name='name' type='text' placeholder='Name' required ref={this.nameRef} />
        <input name='price' type='number' placeholder='Price' required ref={this.priceRef} />
        <select name='status' ref={this.statusRef}>
          <option value='available'>In Stock!</option>
          <option value='unavailable'>Out of Stock!</option>
        </select>
        <textarea name='description' placeholder='Description' required ref={this.descriptionRef} />
        <input name='image' type='text' placeholder='Image' required ref={this.imageRef} />
        <button className='main-button' type='submit'>
          Add Product
        </button>
      </form>
    );
  }
}

export default AddProduct;
