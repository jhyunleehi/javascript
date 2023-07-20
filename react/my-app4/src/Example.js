import React, { useState, useEffect } from 'react';

let n = 1;

function Example() {
    const [count, setCount] = useState(0);
    console.log(n);
    
    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        // Update the document title using the browser API
        //document.title = `You clicked ${count} times`;
        console.log("===>>>")
    },[]);

    n++;

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    );
}

export default Example