import { useState } from 'react';
let value = 50;

function Counter() {
    const [age, setAge] = useState(value);

    function increment() {
        setAge(a => a + 1);
    }
    function decrement() {
        setAge(a => a - 1);
    }

    return (
        <>
            <h1>Your age: {age}</h1>
            <button onClick={() => {
                increment();
                increment();
                increment();
            }}>+3</button>
            <button onClick={() => {
                increment();
            }}>+1</button>
        </>
    );
}

export default Counter;