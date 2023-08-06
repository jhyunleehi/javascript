import React from 'react'

const Create = (props) => {
    function recall(event) {
        event.preventDefault();
        const titel = event.target.title.value;
        const body = event.target.body.value;
        props.onCreate(titel, body);
    }
    return (
        <div style={{ border: "10px" }}>
            <h2>Create</h2>
            <form onSubmit={recall}>
                <p>
                    <input type="text" name="title" placeholder='title'></input>
                </p>
                <p>    
                <textarea name="body" id="" cols="30" rows="10"></textarea>
                </p>
                <p>
                <input type="submit" ></input>
                </p>
            </form>
        </div>
    )
}

export default Create