import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { createStructuredSelector } from 'reselect'
import { selectorCartItems , selectCartTotal} from '../../redux/Cart/CartSelector'
import Button from '../Forms/Button/Button'
import Item from './Item'
import './style.scss'
const mapState = createStructuredSelector({
  cartItems: selectorCartItems,
  total: selectCartTotal,
})
const Checkout = () => {
  const {cartItems ,total }= useSelector(mapState)
  const navigate = useNavigate()

  return (
    <div className='checkout'> 
      <h1>
        checkout
      </h1>
      <div className='cart'>
        { cartItems.length > 0 ? (
           <table cellPadding='0' cellSpacing='0' border='0'>
           <tbody> 
             <tr>
               <table className='checkoutheader' cellPadding='10' cellSpacing='0' border='0'>
                 <tbody>
                   <tr>
                     <th>
                       Product
                     </th>
                     <th>
                       Description
                     </th>
                     <th>
                       Quantity
                     </th>
                     <th>
                       price
                     </th>
                     <th>
                       Remove
                     </th>
                   </tr>
                 </tbody>
               </table>
             </tr>
 
             <tr>
               <table  cellPadding='0' cellSpacing='0' border='0'>
                 <tbody>
                   {cartItems.map((cart,pos) => (
                     <tr>
                       <td key={pos}>
                         <Item {...cart} />
                       </td>
                     </tr>
                   ))}
                 </tbody>
               </table>
             </tr>
 
             <tr>
               <table align='right' cellPadding='0' cellSpacing='0' border='0'>
                 <tbody>
                  <tr align='left'>
                    <td>
                      <h3>
                        Total: {total}
                      </h3>
                    </td>
                  </tr>
                  <tr align='right'>
                    <table border='0' cellSpacing='0' cellPadding='10'>
                      <tbody>
                        <tr>
                          <td>
                            <Button 
                            onClick={() => navigate('/search')}
                            >
                              continue shopping
                            </Button>
                          </td>
                          <td>
                            <Button>
                              checkout
                            </Button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </tr>
                 </tbody>
               </table>
             </tr>
           </tbody>
         </table>
         ): ( 
         <p>no cart in available</p>)
        }
       

      </div>
      </div>
  )
}

export default Checkout