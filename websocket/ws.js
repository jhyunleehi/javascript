// Establish a WebSocket connection
const socket = new WebSocket('ws://localhost:8080/api/v1/ws');

// Connection opened event
socket.onopen = () => {
    console.log('WebSocket connection established.');
};

// Message received event
socket.onmessage = (event) => {
    const message = event.data;
    console.log('Received message:', message);
    const messageOutput = document.getElementById('mydiv');
    messageOutput.innerHTML += message;    
};

// Error event
socket.onerror = (error) => {
    console.error('WebSocket error:', error);
};

// Connection closed event
socket.onclose = () => {
    console.log('WebSocket connection closed.');
};

// Send a message to the server
const sendMessage = (message) => {
    for (i=1;i<10;i++){
        socket.send(`message+${i}`);
    }
};



// Form submission event
document.getElementById('messageForm').addEventListener('submit', (event) => {
    event.preventDefault();    
    const messageInput = document.getElementById('messageInput');
    const message = messageInput.value;
    sendMessage(message);
    messageInput.value = '';
    
});