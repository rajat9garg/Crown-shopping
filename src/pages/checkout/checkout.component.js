import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartItemTotal,
  selectCartItems,
} from "../../redux/cart/cart.selectors";

import CheckoutItem  from "../../components/checkout-item/checkout-item.component";
import StripeCheckoutButton from '../../components/stripe/stripe.component';

import "./checkout.styles.scss";

const CheckoutPage = ({ item, total }) => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Desription</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {item.map((oneItem) => (
        <CheckoutItem key={ oneItem.id } cartItem = {oneItem}/>
      ))}
      <div className="total">
        <span>${total}</span>
      </div>
      <StripeCheckoutButton price={total}/>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  item: selectCartItems,
  total: selectCartItemTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
