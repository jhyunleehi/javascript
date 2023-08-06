import React from "react";
import Profile from "./component/Profile";
import { useState, useEffect } from "react";

function Home() {
    const [name, setItem] = useState("");
    useEffect(() => {
    }

    )
    function OnChange(e) {
        setItem(e.target.value);
    }
    function OnClick(e) {
        console.log(e)
        console.log({name})
        const target = document.getElementById('topiclist');
        const li = document.createElement('li');
        const str={name}
        const text = document.createTextNode(str);
        console.log(text)
        li.appendChild(text);
        target.appendChild(li);
    }

    return (
        <>
            <h1>Richard Phillips Feynman</h1>
            <Profile />
            <div>
                <input type="text" id="item" value={name} onChange={OnChange} />
                <button onClick={OnClick}>add</button>
            </div>
            <ul id="topiclist">
                <li>행복</li>
                <li>파이만</li>
                <li>공부</li>                
            </ul>
            <p>{name}</p>
        </>

    )
}

export default Home
