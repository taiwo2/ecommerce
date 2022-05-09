import React from 'react';
import { useDispatch} from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
// import { addCart } from '../../../redux/Cart/CartAction';
import { addCart } from '../../../redux/Cart/CartAction';
import Button from '../../Forms/Button/Button';

import '../style.scss'
  const Product = (product) => {
    const {documentId,productThumbnail, productName, productPrice}= product;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
 
  if (!documentId ||!productThumbnail || !productName || 
    typeof productPrice === 'undefined') return null;

    const configAddtoBtn = {
      type: 'button'
    }

    const handleAddtoCart = (product) => {
      if (!product) return null;
      dispatch(addCart(product))
      // navigate('/cart')
    }
  return (
  <div className='product'>
    <div className='thumb'>
      <Link to={`/product/${documentId}`}>
      <img src={productThumbnail} alt={productName}/>
      </Link>
    </div>
    <div className='details'>
      <ul>
        <li>
          <span className='name'>
            <Link to={`/product/${documentId}`}>
            {productName}
      </Link>
          </span>
        </li>
        <li>
          <span className='price'>
            $ {productPrice}
          </span>
        </li>
        <li>
          <div className='addtocart'>
          <Button
          {...configAddtoBtn} onClick={() => handleAddtoCart(product)} >
            Add to Cart 
          </Button>
          </div>
          
          </li>
      </ul>
    </div>
  </div>
  );
};

export default Product;
