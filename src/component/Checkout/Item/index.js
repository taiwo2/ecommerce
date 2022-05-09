import React from 'react'
import { useDispatch } from 'react-redux'
import { addCart, removeCart,reduceCart } from '../../../redux/Cart/CartAction'

import '../style.scss'
const Item = (product) => {
  const dispatch = useDispatch()
  const {productName,productThumbnail,productPrice,quantity,documentId} = product;

  const handleRemoveCartItem = (documentId) => {
    dispatch(
      removeCart({documentId})
    )
  }
  const handleAddproduct = product => {
    dispatch(
      addCart(product)
    )
  }

  const handlereduceCart = (product) => {
    dispatch(reduceCart(product))
  }
  return (
    <div>
       <table className='cartitem' cellSpacing={0} cellPadding={10} border='0'>
          <tbody>
            <tr>
              <td>
              <img src={productThumbnail} alt={productName} />
              </td>
            <td>
              {productName}
            </td>
            <td>
              <span className='cartbtn' 
              onClick={() => handlereduceCart(product)}
              >{'<'}</span>
              <span>{quantity}</span>
              <span className='cartbtn'
               onClick={() => handleAddproduct(product)}
               >{'>'}</span>
            </td>
            <td>
              ${productPrice}
            </td>
            <td align='center'>
              <span className='cartbtn' 
              onClick={() => handleRemoveCartItem(documentId)}
              >
                X
                </span>
            </td>
            </tr>
          </tbody>
       </table>
       </div>
  )
}

export default Item