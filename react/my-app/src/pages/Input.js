import { useState } from 'react';

function Input() {
    const [txvalue, setTextValue] = useState("");

    function OnChange(e){
        setTextValue(e.target.value);
    }
    return (
        <>
            <input type="text" value={txvalue} onChange={OnChange()} />
            <br/>
            <p>{txvalue}</p>
        </>

    );
}

export default Input;