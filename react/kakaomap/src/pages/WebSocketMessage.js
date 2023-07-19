import React, { useState, useRef, useEffect } from 'react';



function WebSocketMessage(props) {
    const [text, setText] = useState('');
    const textareaRef = useRef(null);

    const appendText = (newText) => {
        // Generate new text to append
        //const newText = `New text added at ${new Date().toLocaleTimeString()}\n`;
        setText((prevText) => prevText + newText);
    };


    useEffect(() => {
        const socket = new WebSocket('ws://localhost:8080/api/v1/ws');
        socket.onopen = () => {
            console.log('WebSocket connection established.');
        };
        // Message received event
        socket.onmessage = (event) => {
            const message = event.data;
            console.log('Received message:', message);
            appendText(message);
        };

         if (textareaRef.current) {
             textareaRef.current.scrollTop = textareaRef.current.scrollHeight;
         }
    }, [text]);


    return (
        <div>
            <form id="messageform">
                <input type="text" placeholder="Enter message"></input>
                <textarea ref={textareaRef} value={text} cols="50" rows="10"></textarea>
                <button type="submit">Send</button>
            </form>
        </div>
    )
}


export default WebSocketMessage;