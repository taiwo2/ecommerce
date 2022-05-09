export const existingItem = ({ prevCartItems,nextCartItems }) => {
  return prevCartItems.find(cartItems => cartItems.documentId === nextCartItems.documentId)
}
export const handleAddToCart = ({prevCartItems,nextCartItems}) => {
 const quantityItem = 1;

 const cartItemExist = existingItem({prevCartItems,nextCartItems});

  if (cartItemExist) {
    return prevCartItems.map(cartItems => cartItems.documentId == nextCartItems.documentId
      ? {
        ...cartItems,
        quantity: cartItems.quantity + quantityItem
      }
      :cartItems
    )
  }
  return [
    ...prevCartItems,
    {
      ...nextCartItems,
      quantity: quantityItem
    }
  ]
}

export const handleRemoveCart = ({ prevCartItems,
  removeCartItems}) => {
 return prevCartItems.filter(item => item.documentId !== removeCartItems.documentId)
}

export const handleReduceCartItem = ({prevCartItems, cartItemToReduce})  => {
  const exitingCartItem = prevCartItems.find(cart => 
    cart.documentId === cartItemToReduce.documentId);

  if (exitingCartItem .quantity === 1) {
    return prevCartItems.filter(prev => prev.documentId !== exitingCartItem .documentId)
  }

  return prevCartItems.map(cartItem => cartItem.documentId === exitingCartItem .documentId 
    ? {...cartItem,
      quantity: cartItem.quantity - 1}
      : cartItem)
}