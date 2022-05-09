import React from 'react';
import './style.scss'
import { fetchProductStart } from '../../redux/Product/ProductAction';
import { useEffect} from 'react';
import { useSelector,useDispatch  } from 'react-redux';
import Product from './Product';
import FormSelect from '../Forms/FormSelect';
import { useNavigate } from 'react-router-dom';
import LoadMore from '../LoadMore';
import { useParams } from 'react-router-dom';

const mapState = ({ productData }) => ({
  products: productData.products
});

const ProductResult = () => {
  const {products} = useSelector(mapState)
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const {filterType} = useParams();
  const {data,queryDoc,isLastPage} = products

  useEffect(() => {
    dispatch(fetchProductStart({filterType}))
    // console.log('fff',products.data)
  },[filterType])
  if (!Array.isArray(data)) return null;

  if (data.length < 1) {
    return (
      <div className='products'>
        NO search result
      </div>
      );
    
  }
  const handlefilter = (e) => {
    const nextFilter = e.target.value;
    navigate(`/search/${nextFilter}`)
  }

  const configFilter = {
    defaultValue: filterType, 
    options: [
      {
        name: 'ALL product',
        value: ''
      },
      {
        name: 'mens',
        value: 'mens'
      },
      {
        name: 'womens',
        value: 'womens'
      }
    ], 
    handleChange: handlefilter
  }

  const handleLoadMore = () => {
    dispatch(fetchProductStart({
      filterType, 
      startAfterDocs: queryDoc,
      persistproducts: data
    }))
  }
  const configLoadMore = {
    onLoadMoreEvt: handleLoadMore,
  }
  return( 
  <div className='products'>
    <h1>Browse  Product</h1>
    <FormSelect {...configFilter } />
   <div className='productresult'>
   {data.map((product,pos) => {
      const {productThumbnail, productName, productPrice} = product;
      if (!productThumbnail || !productName || 
        typeof productPrice === 'undefined') return null;

        const configProduct = {
          ...product
        }
      return (
          // <div key={pos}>
            <Product {...configProduct}/>
          // </div> 
      )
    })}
   </div>
   {!isLastPage && (
 <LoadMore {...configLoadMore}/>
   )}
    
  </div>
  );
};

export default ProductResult;
