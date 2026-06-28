// components/ProductList.jsx
import { productApi } from '../api/client';
import React, { useEffect, useState } from 'react';

export default function ProductList() {
  console.log("#####")
  // 创建一个 Promise
  const myPromise = new Promise((resolve, reject) => {
  // 模拟异步操作
  setTimeout(() => {
    const success = false;
    if (success) {
      resolve("操作成功！数据：{ id: 1, name: '张三' }");
    } else {
      reject("操作失败！");
    }
  }, 100);
});

// 使用 Promise
myPromise
  .then(result => {
    console.log("成功:", result);
  })
  .catch(error => {
    console.error("失败:", error);
  })
  .finally(() => {
    console.log("无论成功失败都会执行");
  });


  const [product, setProduct] = useState(null);
  useEffect(() => {
    productApi.get('/product')
      .then(res => setProduct(res.data));
  }, []);
  return <div>{product?.name}</div>;
}