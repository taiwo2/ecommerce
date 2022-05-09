import React,{ useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { useParams,useNavigate } from 'react-router-dom'
import { addCart } from '../../redux/Cart/CartAction'
import { fetchProductDetails, setProducts } from '../../redux/Product/ProductAction'
import Button from '../Forms/Button/Button'
import './styles.scss'

const mapState = state =>({
  product: state.productData.product
})
const ProductCard = ({}) => {
  const {product} = useSelector(mapState)
  const {productID} = useParams();
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {productName,productThumbnail,productPrice,productDesc} = product
  useEffect(() => {
    dispatch(fetchProductDetails(productID))

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
    navigate('/cart')
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
            <Button {...configAddButton} 
            onClick={() => handleAddTocart(product)}
            >
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