// api/client.js
import axios from 'axios';

// 1. 定义 API 地址（带默认值）
const USER_API_URL = process.env.REACT_APP_USER_API_URL || 'http://localhost:4000/api';
const PRODUCT_API_URL = process.env.REACT_APP_PRODUCT_API_URL || 'http://localhost:4000/api';
const ORDER_API_URL = process.env.REACT_APP_ORDER_API_URL || 'http://localhost:4000/api';

// 2. 创建 axios 实例
export const userApi = axios.create({
  baseURL: USER_API_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  }
});

export const productApi = axios.create({
  baseURL: PRODUCT_API_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  }
});

export const orderApi = axios.create({
  baseURL: ORDER_API_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  }
});

// 3. 请求拦截器（添加 token）
userApi.interceptors.request.use(
  config => {
    const token = localStorage.getItem('userToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => Promise.reject(error)
);

// 4. 响应拦截器（统一处理数据）
userApi.interceptors.response.use(
  response => response.data,  // 直接返回 data
  error => {
    console.error('API Error:', error.response?.data || error.message);
    return Promise.reject(error);
  }
);

// 5. 开发环境打印配置信息（仅编译时判断）
if (process.env.NODE_ENV === 'development') {
  console.log('API Configuration:', {
    user: USER_API_URL,
    product: PRODUCT_API_URL,
    order: ORDER_API_URL,
  });
}