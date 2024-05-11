<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>WebSocket Example</title>
</head>
<body>
  <h1>WebSocket Example</h1>
  
  <form id="messageForm">
    <input type="text" id="messageInput" placeholder="Enter message">
    <button type="submit">Send</button>
  </form>

  <script>
    // Establish a WebSocket connection
    const socket = new WebSocket('ws://localhost:8080/ws');

    // Connection opened event
    socket.onopen = () => {
      console.log('WebSocket connection established.');
    };

    // Message received event
    socket.onmessage = (event) => {
      const message = event.data;
      console.log('Received message:', message);
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
      socket.send(message);
    };

    // Form submission event
    document.getElementById('messageForm').addEventListener('submit', (event) => {
      event.preventDefault();
      const messageInput = document.getElementById('messageInput');
      const message = messageInput.value;
      sendMessage(message);
      messageInput.value = '';
    });
  </script>
</body>
</html>