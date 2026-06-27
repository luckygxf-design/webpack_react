import React, {useState, useEffect} from 'react'

function UseStateDemo() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `你点击了${count}次`;
    });

    return (
        <div>
            <p>你点击了{count}次</p>
            <button onClick={() => {setCount(count + 1)}}>疯狂戳我</button>
        </div>
    );
}

export default UseStateDemo;