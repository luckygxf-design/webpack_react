import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <h1>🚀 React + Webpack 项目</h1>
      <div className="counter">
        <h2>计数器: {count}</h2>
        <div className="buttons">
          <button onClick={() => setCount(count - 1)}>-</button>
          <button onClick={() => setCount(0)}>重置</button>
          <button onClick={() => setCount(count + 1)}>+</button>
        </div>
      </div>
    </div>
  );
}

export default App;