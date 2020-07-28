export const AddItemsToCart = (prevCartItems, newCartItems) => {
  const existingCartItems = prevCartItems.find(
    (prevCart) => prevCart.id === newCartItems.id
  );

  if (existingCartItems) {
    return prevCartItems.map((cartItem) =>
      cartItem.id === newCartItems.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...prevCartItems,{...newCartItems, quantity : 1}]
};

export const decreaseItemsFromCart = (cartItems , itemToDecrease)=>{
  const existingCartItems = cartItems.find(
    (cartItem) => cartItem.id === itemToDecrease.id
  );

  if(existingCartItems.quantity ===1){
    return cartItems.filter(cartItem => cartItem.id !== itemToDecrease.id)
  }

  return cartItems.map(cartItem => 
    cartItem.id === itemToDecrease.id ?
    { ...cartItem, quantity : cartItem.quantity -1} :
    cartItem );
}