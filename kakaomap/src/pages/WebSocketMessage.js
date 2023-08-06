import React, { useState, useRef, useEffect } from 'react';

const socket = new WebSocket('ws://jhyunleehi.ipdisk.co.kr:18080/api/v1/ws');


function WebSocketMessage() {
    const [fdinfo, setFdInfo] = useState([{}]);
    const textareaRef = useRef(null);

    const appendText = (newText) => {
        // Generate new text to append
        //const newText = `New text added at ${new Date().toLocaleTimeString()}\n`;
        setFdInfo((prevText) => prevText + '\n' + newText);
    };

    useEffect(() => {
        //const socket = new WebSocket('ws://localhost:8080/api/v1/ws');
        socket.addEventListener('open', (event) => {
            socket.send('Hello Server!');
        });

        // Listen for messages
        socket.addEventListener('message', (event) => {
            console.log('Message from server:', event.data);
            try {
                const data = JSON.parse(event.data);
                console.log('Parsed data:', data);
                setFdInfo(null)
                setFdInfo(data)
                //appendText(data)
            } catch (e) {
                console.error('Could not parse JSON:', e);
            }
        });

        // Connection closed
        socket.addEventListener('close', (event) => {
            console.log('Connection closed');
        });

    }, []);

    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.scrollTop = textareaRef.current.scrollHeight;
        }
        console.log("count:", Object(fdinfo).length)

    }, [fdinfo]);

    const sendMessage = (event) => {
        event.preventDefault();
        console.log(event.target);
        socket.send(event.target.value);
    };

    return (
        <div>
            <div>
                <table border="1" cellPadding="5" cellSpacing="0">
                    <thead>
                        <tr>
                            <th>MeasuredTime</th>
                            <th>FACEIdRef</th>
                            <th>ZoneId</th>
                            <th>SourceDeviceIdRefs</th>
                            <th>FireStatus</th>
                            <th>Temperature</th>
                            <th>SmokeDensity</th>
                            <th>CODensity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {fdinfo.map(item => <Item key={item.FACEIdRef} d={item} />)}
                    </tbody>
                </table>
            </div>

            <form id="messageform">
                <input type="text" placeholder="Enter message"></input>
                <textarea ref={textareaRef} value={fdinfo} cols="50" rows="10"></textarea>
                <button type="submit" onClick={sendMessage}>Send</button>
            </form>
        </div>
    )
}

function Item(props) {
    return (
        <tr>
            <td> {props.d.MeasuredTime}</td>
            <td> {props.d.FACEIdRef}</td>
            <td> {props.d.ZoneId}</td>
            <td> {props.d.SourceDeviceIdRefs}</td>
            <td> {props.d.FireStatus}</td>
            <td> {props.d.Temperature}</td>
            <td> {props.d.SmokeDensity}</td>
            <td> {props.d.CODensity}</td>
        </tr>
    )
}


export default WebSocketMessage;
