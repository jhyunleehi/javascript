import React from 'react'

const Nav = (props) => {
    const item = [];
    function callback(event) {
        event.preventDefault();
        props.onChangeMode(Number(event.target.id));
    }

    for (let i = 0; i < props.topics.length; i++) {
        let t = props.topics[i];
        item.push(
            <li key={t.id} >
                <a id={t.id} href={'/read/' + t.id} onClick={callback}> {t.title} </a>
            </li>)
    };

    return (
        <div>
            <nav>
                <ol>
                    {item}
                </ol>
            </nav>
        </div>

    )
}

export default Nav