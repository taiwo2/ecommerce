import React,{ useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { addCart } from '../../Redux/Cart/CartAction'
import { fetchProductStart, setProducts } from '../../Redux/Product/ProductAction'
import Button from './Forms/Button/Button'

const mapState = state =>({
  product: state.productsData.product
})
const ProductCard = ({}) => {
  const {product} = useSelector(mapState)
  const {productID} = useParams();
  const history = useHistory()
  const dispatch = useDispatch()
  const {productName,productThumbnail,productPrice,productDesc} = product
  useEffect(() => {
    fetchProductStart(productID)

    return () => {
      dispatch(
        setProducts({})
      )
    }
  },[])

  const handleAddTocart = (product) => {
    if (!product) return;
    dispatch(
      addCart(product)
    )
    history.push('./cart')
  }
  const configAddButton = {
    type: 'button'
  }
  return (
    <div className='productcard'>
      <div className='hero'>
        <img src={productThumbnail} alt='image' />
      </div>
      <div className='productdetail'>
        <ul>
          <li>
            <h1>
            {productName}
            </h1>
          </li>
          <li>
            <span>
            ${productPrice}
            </span>
          </li>
          <li>
           <div className='addtocart'>
            <Button {...configAddButton} onClick={() => handleAddTocart(product)}>
              Add to Cart
            </Button>
           </div>
          </li>
          <li>
            <span dangerouslySetInnerHTML={{__html: productDesc}} />
          </li>
        </ul>
      </div>
      </div>
  )
}

export default ProductCard