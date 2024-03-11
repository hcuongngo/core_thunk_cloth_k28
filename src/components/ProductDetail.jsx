import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchProduct } from '../redux/actions/productAction';

function ProductDetailPage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  console.log("id", id);
  const { product } = useSelector(state => state.product)
  console.log("product in product detail component", product);
  console.log(Object.keys(product))
  // category
  // :
  // "men's clothing"
  // description
  // :
  // "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday"
  // id
  // :
  // 1
  // image
  // :
  // "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
  // price
  // :
  // 109.95
  // rating
  // :
  // { rate: 3.9, count: 120 }
  // title
  // :
  // "Fjallraven - Foldsack No. 

  useEffect(() => {
    if (id && id !== '') {
      dispatch(fetchProduct(id))
    }
  }, [id])

  return Object.keys(product).length === 0 ? (<div>Loading...</div>) : (
    <div style={{
      display: 'flex',
      height: '100vh'
    }}>
      <div style={{
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <img style={{
          width: 300,
          height: 300,
        }} src={product?.image} alt="" />
      </div>
      <div style={{
        flex: 1,
        borderLeft: '1px solid black',
        paddingLeft: 20
      }}>
        <h1>{product?.title}</h1>
        <p>{product?.price}</p>
        <p>{product?.description}</p>
      </div>
    </div>
  )
}

export default ProductDetailPage;
