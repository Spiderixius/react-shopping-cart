/**
 *
 */

import React from 'react';

class Product extends React.Component {
  render() {
    const { image, name, price, description, status } = this.props.data;
    const isAvailable = status === 'available';

    return (
      <li className='product'>
        <img src={image} alt={name} />
        <h3 className='product-name'>
          {name}
          <span className='product-price'>{price} kr</span>
        </h3>
        <p className='product-description'>{description}</p>
        <button disabled={!isAvailable}>{isAvailable ? 'Add To Basket' : 'Out of Stock!'}</button>
      </li>
    );
  }
}

export default Product;
