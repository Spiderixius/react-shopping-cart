import React from 'react';

class Basket extends React.Component {
  /**
   * Display the basket
   */
  displayBasket = key => {
    const product = this.props.products[key];
    const count = this.props.basket[key];
    const isAvailable = product && product.status === 'available';
    if (!product) return null;

    if (!isAvailable) {
      return <li key={key}>Sorry {product ? product.name : 'product'} is out of stock!</li>;
    }
    return (
      <li className='basket-line' key={key}>
        {`${count} x ${product.name} ${count * product.price} kr`}
        <button className='remove-from-basket' type='submit' onClick={() => this.props.deleteFromBasket(key)}>
          X
        </button>
      </li>
    );
  };

  render() {
    const basketIDs = Object.keys(this.props.basket);

    const totalPrice = basketIDs.reduce((previousTotal, key) => {
      const product = this.props.products[key];
      const count = this.props.basket[key];
      const isAvailable = product && product.status === 'available';

      if (isAvailable) {
        return previousTotal + count * product.price;
      }
      return previousTotal;
    }, 0);

    return (
      <div className='basket'>
        <ul>{basketIDs.map(this.displayBasket)}</ul>
        <p>
          Total: <strong>{totalPrice}</strong> kr
        </p>
      </div>
    );
  }
}

export default Basket;
