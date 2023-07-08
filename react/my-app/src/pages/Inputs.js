import { useState } from 'react';

function Inputs() {
    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        tel: ""
    });


    function OnChange(e) {
        const id = e.target.id;
        const value = e.target.value
        setInputs({
            ...inputs,
            [id]: value,
        });
    }

    return (
        <div>
            <label>Name</label>
            <input type="text" id="name" value={inputs.name} onChange={OnChange} />
            <br />
            <label>Email</label>
            <input type="email" id="email" value={inputs.email} onChange={OnChange} />
            <br />
            <label>Tel</label>
            <input type="tel" id="tel" value={inputs.tel} onChange={OnChange} />
            <br />
            <p>{inputs.name},{inputs.email},{inputs.tel}</p>
        </div>
    );
}

export default Inputs;