import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { selectedProduct } from '../redux/actions/productActions';

const ProductDetail = () => {
  const product = useSelector((state) => state.product);
  const productI = useParams();
  const { productId } = productI;
  const dispatch = useDispatch();
  console.log(product);

  const fetchProductDetail = async (id) => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${id} `)
      .catch((err) => {
        console.log('Err', err);
      });
    console.log(response.data);
    dispatch(selectedProduct(response));
  };
  useEffect(() => {
    if (productId && productId !== '') fetchProductDetail(productId);
  }, []);
  return (
    <div>
      <h1>ProductDetail</h1>
    </div>
  );
};

export default ProductDetail;
