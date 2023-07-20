import React, { useState, useRef, useEffect } from 'react';

const socket = new WebSocket('ws://localhost:8080/api/v1/ws');


function WebSocketMessage() {
    const [text, setText] = useState('');
    const textareaRef = useRef(null);

    const appendText = (newText) => {
        // Generate new text to append
        //const newText = `New text added at ${new Date().toLocaleTimeString()}\n`;
        setText((prevText) => prevText+'\n' + newText);
    };

    useEffect(() => {
        //const socket = new WebSocket('ws://localhost:8080/api/v1/ws');
        socket.onopen = () => {
            console.log('WebSocket connection established.');
        };
        // Message received event
        socket.onmessage = (event) => {
            const message = event.data;
            console.log('Received message:', message);
            appendText(message);
        };
    }, []);

    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.scrollTop = textareaRef.current.scrollHeight;
        }
    }, [text]);

    const sendMessage = (event) => {
        event.preventDefault();
        console.log(event.target);
        socket.send(event.target.value);
    };

    return (
        <div>
            <form id="messageform">
                <input type="text" placeholder="Enter message"></input>
                <textarea ref={textareaRef} value={text} cols="50" rows="10"></textarea>
                <button type="submit" onClick={sendMessage}>Send</button>
            </form>
        </div>
    )
}


export default WebSocketMessage;