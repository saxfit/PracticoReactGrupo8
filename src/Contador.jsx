import './Contador.css'
import { useState } from 'react';


export default function Contador() { 
const [count, setCount] = useState(0);

function handleClick1() {
    setCount(count + 1);
}
function handleClick2() {
    setCount(count - 1);
}
        return (
        <div>
        <h3>{count}</h3>
        <button onClick={handleClick1}><b>+</b></button>
        <button onClick={handleClick2}><b>-</b></button>
        </div>
    )
}
