import React, {useState} from 'react';

function Counter() {
    const [count, setCount] = useState(0);
  return (
    <div>
        <p>{count}</p>
        <button onClick={() =>{setCount(count + 1)}}>Plus</button>
        <button onClick={() =>{setCount(count - 1)}}>Minus</button>
        <button onClick={() =>{setCount(0)}}>Reset</button>
    </div>
  )
}

export default Counter