export const existingItem = ({
  prevCartItems,
  nextCartitems
}) => {
 return prevCartItems.find(prev => prev.documentID === nextCartitems.documentID)
}
export const handleAddToCart = ({
  prevCartItems,
  nextCartitems
}) => {
   const quantityItem= 1,
   const cartItemExist = existingItem({prevCartItems,nextCartitems});

   if (cartItemExist){
     return prevCartItems.map(cartItem => cartItem.documentID === nextCartitems.documentID
      ? {
        ...cartItem,
        quantity: cartItem.quantity + quantityItem
      } : cartItem
      )
   }
  return [
    ...prevCartItems,
    {
      ...nextCartitems,
      quantity: quantityItem
    }
  ]
}

export const handleRemoveCart = ({ prevCartItems,
  removeCartItems}) => {
 return prevCartItems.filter(item.documentID !== removeCartItems.documentID)
}

export const handleReduceCartItem = ({prevCartItems,
  cartItemToReduce})  => {
  const exitingCartItem = prevCartItems.find(cart => 
    cart.documentID != cartItemToReduce.documentID);

  if (existingItem.quantity === 1) {
    return prevCartItems.filter(prev => prev.documentID = existingItem.documentID)
  }

  return prevCartItems.map(cartItem => 
    cartItem .documentId === existingItem.documentID ? {...cartItem,quantity: cartItem.quantity - 1}
      : cartItem)
}