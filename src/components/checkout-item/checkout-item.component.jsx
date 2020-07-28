import React from 'react';
import { connect } from 'react-redux';
import { removeItem,addItem,decreaseItemCount } from '../../redux/cart/cart.actions'

import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem, clearItem ,addItem, decreaseItemCount}) => {
  const { name, imageUrl, price, quantity } = cartItem
  return (<div className='checkout-item'>
    <div className='image-container'>
      <img src={imageUrl} alt='item' />
    </div>
    <span className='name'>{name}</span>
    <span className='quantity'>
      <div className="arrow" onClick={() => decreaseItemCount(cartItem)}>&#10094;</div>
      <span className="value">{quantity}</span>
      <div className="arrow" onClick={() => addItem(cartItem)}>&#10095;</div>
    </span>
    <span className='price'>{price}</span>
    <div className='remove-button' onClick={() => clearItem(cartItem)}>&#10005;</div>
  </div>)
};

const mapDispatchToProps = dispatch => ({
  clearItem: (cartItem) => dispatch(removeItem(cartItem)),
  addItem : (cartItem) => dispatch(addItem(cartItem)),
  decreaseItemCount : (cartItem) => dispatch(decreaseItemCount(cartItem))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);