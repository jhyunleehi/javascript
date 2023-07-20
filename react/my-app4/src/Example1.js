import { useEffect, useState } from 'react';

function Example1() {

    const [name, setName] = useState("");

    const changeName = (e) => {
        //setName(e.target.value)
    }

    //렌더링 될 때 마다 실행
    useEffect(() => {
        console.log('--->>>>렌더링 때마다 실행');
    });

    //처음 렌더링 되거나 배열 값이 바뀔때마다 실행
    useEffect(() => {
        console.log('name 변수가 바뀔 때마다 실행');
    }, [name]);

    //처음 렌더링이 될 때만 실행
    useEffect(() => {
        console.log('==>>처음 렌더링 때만 실행');
    }, []);

    //name변수를 변경시키기위한 input
    return (
        <input type="text" value={name} onChange={changeName} />
    )
}
export default Example1