// components/ProductList.jsx
import { productApi } from '../api/client';
import React, { useEffect, useState } from 'react';

export default function ProductList() {
  const [product, setProduct] = useState(null);
  useEffect(() => {
    productApi.get('/product')
      .then(res => setProduct(res.data));
  }, []);
  return <div>{product?.name}</div>;
}