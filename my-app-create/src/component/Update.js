import React from 'react'

const Update = (props) => {
    return (
        <div><article>
            <h2>Update</h2>
            <form onSubmit={event => {
                event.preventDefault();
                const titel = event.target.title.value;
                const body = event.target.body.value;
                props.onUpdate(titel, body);
            }}>
                <p><input type="text" name="title" placeholder='title'></input></p>
                <textarea name="body" id="" cols="30" rows="10"></textarea>
                <p><input type="submit" value="Update" ></input></p>
            </form>
        </article></div>
    )
}

export default Update