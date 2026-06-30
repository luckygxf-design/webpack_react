const path = require('path');
const webpack = require('webpack'); 
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // 开发模式
  mode: 'development',
  
  // 入口文件
  entry: './src/index.js',
  
  // 输出配置
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true, // 打包前清理 dist 目录
  },
  
  // 模块配置
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
        type: 'asset/resource'
      }
    ]
  },
  
  // 解析扩展名
  resolve: {
    extensions: ['.js', '.jsx']
  },
  
  // 插件
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html'
    }),
    new webpack.DefinePlugin({
      'process.env.REACT_APP_USER_API_URL': JSON.stringify(process.env.REACT_APP_USER_API_URL || 'http://localhost:4000/api'),
      'process.env.REACT_APP_PRODUCT_API_URL': JSON.stringify(process.env.REACT_APP_PRODUCT_API_URL || 'http://localhost:4000/api'),
      'process.env.REACT_APP_ORDER_API_URL': JSON.stringify(process.env.REACT_APP_ORDER_API_URL || 'http://localhost:4000/api'),
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
    })
  ],
  
  // 开发服务器
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    port: 4000,
    hot: true,
    open: true,
    proxy: {
      '/api': { // ① 匹配规则：当请求路径以 '/api' 开头
        target: 'http://localhost:3001', // ② 代理目标：你的后端服务器地址
        changeOrigin: true, // ③ 重要：修改请求头中的 host，建议设为 true
        // pathRewrite: { '^/api': '' }, // ④ 路径重写：移除 '/api' 前缀
        secure: false, // 如果 target 是 https 且证书是自签名，可能需要设为 false
      },
    }
  }
};