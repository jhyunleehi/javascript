import { useState } from 'react';

function Inputs() {
    const [inputs, setTextValue] = useState({
        name:"",
        email:"",
        tel:""
    });


    function OnChange(e){
        setTextValue(e.target.value);
    }
    return (
        <>
            <labe Name/> <input type="text" value={inputs.name} onChange={OnChange()} />
            <labe Email/><input type="email" value={inputs.email} onChange={OnChange()} />
            <label Tel/><input type="tel" value={inputs.tel} onChange={OnChange()} />
            <br/>
            <p>{inputs.name},{inputs.email},{inputs.tel}</p>
        </>

    );
}

export default Inputs;