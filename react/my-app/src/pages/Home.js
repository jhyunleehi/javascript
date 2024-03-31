import React from "react";

// function Home () {
//     return (
//         <h1>Home page 입니다. </h1>
//     )
// }

function Profile() {
    return (
        <img src="./img/Feynman.jpeg" alt="Hedy Lamarr" className="photo" />
    )
}

function Home() {
    return (
        <>
            <h1>Richard Phillips Feynman</h1>
            <Profile />    <Profile />    <Profile />
            <ul>
                <li>행복</li>
                <li>파이만</li>
                <li>공부</li>
            </ul>
            
        </>

    )
}

export default Home
