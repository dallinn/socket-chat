# socket-chat

First time playing with websockets, built upon the chat from the socket.io [tutorial](http://socket.io/get-started/chat/)

Added additional functionality including username tracking, different styling for different users, and a 'view all users' button, along with some additional styling.

Install
```
git clone https://github.com/dallinn/socket-chat.git
cd socket-chat
```

Run without docker
```
npm install
node app.js
```

Run with docker
```
docker build -t socket-chat .
docker run -p 3000:3000 -d socket-chat
```

Open two tabs to http://localhost:3000 and witness the power of websockets
